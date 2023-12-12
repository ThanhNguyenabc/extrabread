import { Db, MongoClient } from 'mongodb';

const URL = `${process.env.MONGODB_URL}`;

const connectDb = async () => {
  try {
    const instance = await new MongoClient(URL).connect();
    global['mongoClient'] = instance.db('extrabread');
    return global['mongoClient'];
  } catch (error) {
    console.log('connection to mongodb error = ', error);
  }
  return;
};

export const getMongoDbClient = async (): Promise<Db | null> => {
  let mongoClient = global['mongoClient'];
  if (mongoClient) {
    return mongoClient;
  } else {
    mongoClient = await connectDb();
  }
  return mongoClient;
};
