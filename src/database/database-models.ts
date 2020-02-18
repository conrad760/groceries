
import mongoose, { Schema } from 'mongoose';
import { uuid } from 'uuidv4';

import * as GroceryModels from '../models';

const UserSchema = new Schema({
  id: { type: String, required: true },
  name: String,
  email: String,
});

const GroceryItemSchema = new Schema({
  id: { type: String, default: uuid },
  associatedTrip: String,

  name: { type: String, required: true },
  count: { type: Schema.Types.Number, default: 1 },

  expirationDate: Schema.Types.Date,
  UPC: String,
});

const GroceryTripSchema = new Schema({
  id: { type: String, default: uuid },
  purchaserId: String,
  name: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

const GroceryCategorySchema = new Schema({
  id: { type: String, default: uuid },
  name: { type: String, required: true },
  tags: [String],
  units: { type: String, default: ''},
  items: [GroceryItemSchema]
});

export const User = mongoose.model<GroceryModels.User>('User', UserSchema);
export const GroceryItem = mongoose.model<GroceryModels.GroceryItem>('GroceryItem', GroceryItemSchema);
export const GroceryTrip = mongoose.model<GroceryModels.GroceryTrip>('GroceryTrip', GroceryTripSchema);
export const GroceryCategory = mongoose.model<GroceryModels.GroceryCategory>('GroceryCategory', GroceryCategorySchema);
