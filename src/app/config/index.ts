import dotenv from 'dotenv';
import path from 'path';
// dot env file import
dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_Url: process.env.DATABASE_URL,
};
