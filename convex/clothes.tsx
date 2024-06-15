import {v} from "convex/values";
import { mutation, query } from "./_generated/server";

export const getClothesForm = query({
    args: {email: v.string()},
    handler: async(ctx, args) => {
        const result = await ctx.db.query('clothesForms')
        .filter(q => q.eq(q.field('createdBy'), args.email))
        .collect();

        return result;
    },
})

export const getClothes = query({
    handler: async (ctx) => {
  
      const clotheList = await ctx.db.query("clothesForms").collect();
  
      return clotheList;
    },
  });


export const createClothesForm = mutation({
    args: {
        shirt: v.float64(),
        tshirt: v.float64(),
        trousers: v.float64(),
        pant: v.float64(),
        pyjama: v.float64(),
        bedsheets: v.float64(),
        createdBy: v.string(),
        status:v.string(),
    },
    handler: async(ctx, args) => {
        const result = await ctx.db.insert('clothesForms', args);
        return result;
    },
})
