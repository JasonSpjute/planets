import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import GalaxySchema from "../models/Galaxy";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Galaxies = mongoose.model("Galaxy", GalaxySchema);
}

export const dbContext = new DbContext();
