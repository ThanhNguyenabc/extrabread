import { BEST_POS_URL } from '@/constants';
import mongoose from 'mongoose';

let dbInstance;
const dbURL = BEST_POS_URL || '';

export const connectMongo = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }
    dbInstance = await mongoose.connect(dbURL, {
      maxPoolSize: 10,
      socketTimeoutMS: 100000,
    });
    console.log('connect mongoDB');
  } catch (error) {
    console.log('connection error =', error);
  }
};
