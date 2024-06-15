import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  clothesForms: defineTable({
    bedsheets: v.float64(),
    createdBy: v.string(),
    pant: v.float64(),
    pyjama: v.float64(),
    shirt: v.float64(),
    status: v.string(),
    trousers: v.float64(),
    tshirt: v.float64(),
  }),
  user: defineTable({
    email: v.string(),
    name: v.string(),
    picture: v.string(),
    tokenIdentifier: v.string(),
  }),
});