import { config as conf } from "dotenv";

conf();

const _config={
  port:process.env.PORT,
  mongodbURL:process.env.MONGODB_URI,
  env:process.env.NODE_ENV,
  jwt_secret:process.env.JWT_SECRET,
}

export const config=Object.freeze(_config);
