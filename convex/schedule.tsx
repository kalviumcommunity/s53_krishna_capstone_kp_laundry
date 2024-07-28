import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createSchedulesForm = mutation({
  args: {
    description: v.string(),
    dateTime: v.string(),
    createdBy: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.insert('ScheduleForm', args);
    return result;
  },
});

export const getSchedule = query({
  args: {email: v.string()},
  handler: async(ctx, args) => {
      const result = await ctx.db.query('ScheduleForm')
      .filter(q => q.eq(q.field('createdBy'), args.email))
      .collect();

      return result;
  },
})
