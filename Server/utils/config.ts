import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const PG_USERNAME = process.env.PG_USERNAME;
const PG_PASSWORD = process.env.PG_PASSWORD;
const PG_HOST = process.env.PG_HOST;
const PROXY_PORT = process.env.PROXY_PORT;
const PG_PORT = process.env.PG_PORT;
const PG_URI = process.env.PG_URI;

export { PORT, PG_HOST, PG_PASSWORD, PG_PORT, PG_URI, PG_USERNAME, PROXY_PORT };
