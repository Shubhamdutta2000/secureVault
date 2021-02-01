import express from "express";
const app = express();


import mongoose from "mongoose";
import jsonSchemas from "mongoose-schema-jsonschema";
import { userSchema } from "../models/User.js";

jsonSchemas(mongoose);

const jsonSchema = userSchema.jsonSchema();
console.dir(jsonSchema, { depth: null });
