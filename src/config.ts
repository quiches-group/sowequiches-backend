// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export default {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  apiUrl: process.env.API_URL,
  jwt: {
    secretKey: 'YoMan',
    tokenExpirationTime: 15552000,
  },
  aws: {
    id: process.env.AWS_ID,
    secret: process.env.AWS_SECRET,
    bucketName: process.env.AWS_BUCKET_NAME,
  },
};
