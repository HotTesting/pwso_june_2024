import { type ObjectId } from "mongodb";

export type CreateDBUser = {
  _id: ObjectId;
  merchant: null;
  provider: string;
  role: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
