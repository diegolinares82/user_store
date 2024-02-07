import 'dotenv/config';
import { get } from 'env-var';


export const envs = {

  PORT: get('PORT').required().asPortNumber(),
  MONGO_URL:get('MONGO_URL').required().asString(),//mongo-user:123456@localhost:27017
  MONGO_DB_NAME:get('MONGO_DB_NAME').required().asString()
}



