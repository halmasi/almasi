// import { Pool } from "pg";

import { PrismaClient } from "@prisma/client";

// const port = parseInt(process.env.DB_PORT!);
// export const pool = new Pool({
//   host: process.env.DB_HOST,
//   port,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });
export const db = new PrismaClient();
