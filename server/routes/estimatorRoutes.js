import express from 'express';

const router = express.Router();

/**
 * Electrical Estimation Logic matching Industrial Standards:
 * Motor Power: HP
 * 1 HP = 746 Watts (0.746 kW)
 * System Voltage: 415V (3-Phase) or 230V (1-Phase)
 * Power Factor: cos φ (typically 0.8 to 0.9, standard 0.85)
 * Motor Efficiency: η (typically 80% to 90%, standard ~85-88%)
 */
router.post('/calculate', (req, res) => {
  try {
    const hp = parseFloat(req.body.hp) || 10;
    const voltage = parseFloat(req.body.voltage) || 415;
    const powerFactor = parseFloat(req.body.powerFactor) || 0.85;
    const isThreePhase = req.body.phase === '1-Phase' || voltage < 300 ? false : true;

    const watts = hp * 746;
    const efficiency = hp >= 10 ? 0.88 : hp >= 5 ? 0.85 : 0.82;

    let fullLoadCurrent = 0;
    if (isThreePhase) {
      // I = P / (sqrt(3) * V * pf * eff)
      fullLoadCurrent = watts / (Math.sqrt(3) * voltage * powerFactor * efficiency);
    } else {
      // I = P / (V * pf * eff)
      fullLoadCurrent = watts / (voltage * powerFactor * efficiency);
    }

    fullLoadCurrent = parseFloat(fullLoadCurrent.toFixed(1));

    // Suggested Cable Size (Copper multi-strand, standard industrial rating)
    let suggestedCable = '2.5 sq mm';
    if (fullLoadCurrent <= 16) suggestedCable = '2.5 sq mm';
    else if (fullLoadCurrent <= 24) suggestedCable = '4.0 sq mm';
    else if (fullLoadCurrent <= 32) suggestedCable = '6.0 sq mm';
    else if (fullLoadCurrent <= 45) suggestedCable = '10 sq mm';
    else if (fullLoadCurrent <= 65) suggestedCable = '16 sq mm';
    else if (fullLoadCurrent <= 90) suggestedCable = '25 sq mm';
    else if (fullLoadCurrent <= 125) suggestedCable = '35 sq mm';
    else if (fullLoadCurrent <= 160) suggestedCable = '50 sq mm';
    else suggestedCable = '70+ sq mm (Consult Engineer)';

    // Suggested MCB/MCCB Rating (typically 1.25x to 1.5x full load current for motor duty class C/D)
    const breakerCapacity = fullLoadCurrent * 1.4;
    const standardBreakers = [6, 10, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125, 160, 200, 250, 315, 400, 500, 630];
    let recommendedBreaker = standardBreakers.find((b) => b >= breakerCapacity) || Math.ceil(breakerCapacity) + ' A MCCB';
    recommendedBreaker = typeof recommendedBreaker === 'number' ? `${recommendedBreaker} A` : recommendedBreaker;

    // Recommended Starter Type
    let starterType = 'Direct-On-Line (DOL) Starter';
    if (hp > 7.5 && hp <= 30) {
      starterType = 'Star-Delta (Automatic) Starter';
    } else if (hp > 30) {
      starterType = 'Soft Starter or VFD (Variable Frequency Drive)';
    }

    return res.status(200).json({
      success: true,
      inputs: { hp, voltage, powerFactor, phase: isThreePhase ? '3-Phase' : '1-Phase' },
      results: {
        fullLoadCurrent: `${fullLoadCurrent} A`,
        suggestedCable,
        recommendedBreaker,
        starterType,
      },
      disclaimer: 'Preliminary estimator values. Final selection requires electrical safety engineering review.',
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
