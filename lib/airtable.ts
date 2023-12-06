import Airtable from 'airtable';
import { customAlphabet } from 'nanoid';

Airtable.configure({
  apiKey: `${process.env.AIR_TABLE_KEY}`,
});

const BASE_ID = `${process.env.AIR_TABLE_BASE_ID}`;
const nanoid = customAlphabet('123456789abcde', 10);

const sendToAirtable = async (table: string, body: object) => {
  try {
    const data = { ...body, ID: nanoid() };
    const base = Airtable.base(BASE_ID);
    await base(table).create(data);
    return true;
  } catch (error) {
    console.log('air table error = ', error);
  }
  return false;
};

export { sendToAirtable };
