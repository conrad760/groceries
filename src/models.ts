import { Document } from 'mongoose';

export type UserID = string;

export interface User extends Document {
  id: UserID; // Dont know what type yet
  name: string;
  email: string;
};

export type UniversalProductCode = string;

export interface GroceryItem extends Document {
  id?: number;
  associatedTrip?: GroceryTripID;
  
  name: string;
  count: number;

  expirationDate?: Date;
  UPC?: UniversalProductCode;
};

export type GroceryTripID = string;

export interface GroceryTrip extends Document {
  id: GroceryTripID;
  purchaserId: UserID;

  name: string;
  description: string;
  date: Date;
};

export interface GroceryCategory extends Document {
  id?: number;
  name: string;
  tags: string[];
  units?: string;
  items: GroceryItem[];
};
