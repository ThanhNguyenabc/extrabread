import { Db, MongoClient } from 'mongodb';

const URL = `${process.env.MONGODB_URL}`;

const connectDb = async url => {
  try {
    const instance = await new MongoClient(url, {
      maxPoolSize: 10,
      socketTimeoutMS: 100000,
    }).connect();
    global['mongoClient'] = instance.db('extrabread');
    return global['mongoClient'];
  } catch (error) {
    console.log('connection to mongodb error = ', error);
  }
  return;
};

export const getMongoDbClient = async (url): Promise<Db | null> => {
  let mongoClient = global['mongoClient'];
  if (mongoClient) {
    return mongoClient;
  } else {
    mongoClient = await connectDb(url);
  }
  return mongoClient;
};
