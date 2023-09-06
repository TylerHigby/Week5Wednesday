import { json } from "express";
import mongoose from "mongoose";
const Schema = mongoose.Schema
export const GalaxySchema = new Schema({
  name: { type: String, required: true },
  size: { type: String, enum: ["small", "medium", "large"], required: true },
  age: { type: Number, required: true }
})