import Airtable from 'airtable';

Airtable.configure({
  apiKey: `${process.env.AIR_TABLE_KEY}`,
});

const BASE_ID = `${process.env.AIR_TABLE_BASE_ID}`;

const sendToAirtable = async (table: string, body: object) => {
  try {
    const data = { ...body };
    console.log('air table');
    console.log(data);
    const base = Airtable.base(BASE_ID);
    await base(table).create(data);
    return true;
  } catch (error) {
    console.log('air table error = ', error);
  }
  return false;
};

export { sendToAirtable };
