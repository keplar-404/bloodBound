import dotenv from "dotenv";
dotenv.config();

export interface ConfigType {
  port: number;
  db_local: string;
  stripe_scret: string;
}

export const config: ConfigType = {
  port: parseInt(process.env.PORT || ""), // Use a default value if PORT is not defined
  db_local: process.env.DB_LOCAL || "", // Use an empty string as a default value if DB_LOCAL is not defined
  stripe_scret: process.env.STRIPE_SECRET_KEY || "",
};
