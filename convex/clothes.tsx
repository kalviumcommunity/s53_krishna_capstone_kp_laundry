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

export const createClothesForm = mutation({
    args: {
        shirt: v.string(),
        tshirt: v.string(),
        trousers: v.string(),
        pant: v.string(),
        pyjama: v.string(),
        bedsheets: v.string(),
        // createdBy: v.string()
    },
    handler: async(ctx, args) => {
        const result = await ctx.db.insert('clothesForms', args);
        return result;
    },
})
