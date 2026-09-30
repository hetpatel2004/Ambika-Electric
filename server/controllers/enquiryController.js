import { Enquiry } from '../models/Enquiry.js';
import mongoose from 'mongoose';

// In-memory fallback cache when MongoDB is disconnected in development
const inMemoryEnquiries = [];

export const createEnquiry = async (req, res) => {
  try {
    const { name, phone, company, service, message, estimatedSpecs } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, phone number, and message are required fields.',
      });
    }

    let savedData;
    // Check if Mongoose connection is ready
    if (mongoose.connection.readyState === 1) {
      const enquiry = new Enquiry({
        name,
        phone,
        company,
        service: service || 'General Electrical Enquiry',
        message,
        estimatedSpecs,
      });
      savedData = await enquiry.save();
    } else {
      // In-memory fallback
      savedData = {
        _id: 'mem_' + Date.now(),
        name,
        phone,
        company: company || '',
        service: service || 'General Electrical Enquiry',
        message,
        estimatedSpecs,
        createdAt: new Date().toISOString(),
        status: 'New (In-Memory)',
      };
      inMemoryEnquiries.unshift(savedData);
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your enquiry has been received. Our team at Ambika Electric will contact you shortly.',
      data: savedData,
    });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit enquiry. Please call us directly at +91 99985 77955.',
      error: error.message,
    });
  }
};

export const getEnquiries = async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const list = await Enquiry.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: list.length, data: list });
    } else {
      return res.status(200).json({
        success: true,
        count: inMemoryEnquiries.length,
        note: 'Serving from memory storage (MongoDB not connected)',
        data: inMemoryEnquiries,
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
