/**
 * Ambika Electric - Industrial Electrical Engineering Calculations
 * Standard Reference: Indian Standard IS 3961 / IEC 60034 / NEC Table 430
 */

/**
 * Calculate motor specifications based on power, voltage, and power factor
 * @param {Object} params
 * @param {number} params.hp - Motor horse power
 * @param {number} params.voltage - System voltage in Volts (e.g. 415 or 230)
 * @param {number} params.powerFactor - Power factor cos φ (0.7 to 0.98)
 * @param {string} params.phase - '3-Phase' | '1-Phase'
 * @param {number} [params.efficiency] - Optional motor efficiency (0 to 1)
 */
export function calculateMotorSpecs({
  hp = 10,
  voltage = 415,
  powerFactor = 0.85,
  phase = '3-Phase',
  efficiency,
}) {
  const numHp = Math.max(0.1, Number(hp) || 0.1);
  const numVoltage = Number(voltage) || 415;
  const numPf = Math.min(1, Math.max(0.5, Number(powerFactor) || 0.85));

  // Watts = HP * 746
  const totalWatts = numHp * 746;
  const kW = (totalWatts / 1000).toFixed(2);

  // Efficiency estimation based on motor rating
  const eff = efficiency || (numHp >= 15 ? 0.90 : numHp >= 5 ? 0.86 : 0.82);

  let fullLoadAmps = 0;
  if (phase === '3-Phase') {
    // I = P / (sqrt(3) * V * pf * eff)
    fullLoadAmps = totalWatts / (Math.sqrt(3) * numVoltage * numPf * eff);
  } else {
    // I = P / (V * pf * eff)
    fullLoadAmps = totalWatts / (numVoltage * numPf * eff);
  }

  const flaFormatted = fullLoadAmps.toFixed(1);

  // Suggested Copper Multi-strand Armoured / Flexible Cable size (sq mm)
  let cable = '2.5 sq mm';
  if (fullLoadAmps <= 16) {
    cable = '2.5 sq mm';
  } else if (fullLoadAmps <= 25) {
    cable = '4.0 sq mm';
  } else if (fullLoadAmps <= 34) {
    cable = '6.0 sq mm';
  } else if (fullLoadAmps <= 48) {
    cable = '10.0 sq mm';
  } else if (fullLoadAmps <= 68) {
    cable = '16.0 sq mm';
  } else if (fullLoadAmps <= 95) {
    cable = '25.0 sq mm';
  } else if (fullLoadAmps <= 130) {
    cable = '35.0 sq mm';
  } else if (fullLoadAmps <= 170) {
    cable = '50.0 sq mm';
  } else if (fullLoadAmps <= 220) {
    cable = '70.0 sq mm';
  } else {
    cable = '95+ sq mm (Heavy Busbar / 3.5 Core Armoured)';
  }

  // Recommended Breaker (MCB / MCCB): standard rating ~ 1.35x - 1.5x motor rated current
  const breakerTarget = fullLoadAmps * 1.4;
  const standardRatings = [6, 10, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125, 160, 200, 250, 315, 400, 500, 630];
  let breakerRating = standardRatings.find((r) => r >= breakerTarget);
  const breakerText = breakerRating
    ? (breakerRating <= 63 ? `${breakerRating} A (MCB C-Curve)` : `${breakerRating} A (Industrial MCCB)`)
    : `${Math.ceil(breakerTarget)} A (Heavy Industrial MCCB)`;

  // Recommended Motor Starter configuration
  let starterType = 'Direct-On-Line (DOL) Starter';
  let starterDesc = 'Suitable for standard low starting torque and motors up to 7.5 HP.';
  if (numHp > 7.5 && numHp <= 30) {
    starterType = 'Automatic Star-Delta Starter';
    starterDesc = 'Reduces inrush starting current by 60% to protect transformers and control gears.';
  } else if (numHp > 30) {
    starterType = 'Soft Starter / Variable Frequency Drive (VFD)';
    starterDesc = 'Essential for high inertia loads, smooth ramp-up, and optimal energy efficiency.';
  }

  return {
    hp: numHp,
    kW,
    voltage: numVoltage,
    powerFactor: numPf,
    phase,
    efficiencyPercent: Math.round(eff * 100),
    fullLoadCurrent: flaFormatted,
    suggestedCable: cable,
    recommendedBreaker: breakerText,
    starterType,
    starterDesc,
  };
}
