import mongoose from 'mongoose';

const dbURL = process.env.BEST_POS_URL || '';

export const connectMongo = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }
    await mongoose.connect(dbURL, {
      maxPoolSize: 10,
      socketTimeoutMS: 100000,
    });
    console.log('connect mongoDB');
  } catch (error) {
    console.log('connection error =', error);
  }
};
