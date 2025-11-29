import { Document } from "mongoose";

export interface InterfaceOfUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
