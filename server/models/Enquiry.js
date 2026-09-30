import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    phone: {
      type: String,
      required: [true, 'Please provide your contact number'],
      trim: true,
    },
    company: {
      type: String,
      trim: true,
      default: '',
    },
    service: {
      type: String,
      required: [true, 'Please select a service'],
      enum: [
        'Heavy Motor Winding & Maintenance',
        'Custom Control Panel Design',
        'Industrial Consulting & Diagnostics',
        'Industrial Automation & PLC',
        'Load & Panel Estimator Quotation',
        'General Electrical Enquiry',
      ],
      default: 'General Electrical Enquiry',
    },
    message: {
      type: String,
      required: [true, 'Please provide enquiry details or requirements'],
      maxlength: [2000, 'Message cannot exceed 2000 characters'],
    },
    estimatedSpecs: {
      motorHp: { type: Number },
      voltage: { type: String },
      fullLoadCurrent: { type: String },
      suggestedCable: { type: String },
      recommendedBreaker: { type: String },
    },
    status: {
      type: String,
      enum: ['New', 'In Review', 'Contacted', 'Closed'],
      default: 'New',
    },
  },
  {
    timestamps: true,
  }
);

export const Enquiry = mongoose.model('Enquiry', enquirySchema);
