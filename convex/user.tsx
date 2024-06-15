import { ConvexError } from 'convex/values';
import { mutation } from './_generated/server'

export const store=mutation({
    args:{
    },
    handler:async(ctx, args)=> {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
          throw new ConvexError("Called storeUser without authentication present");
        }
        const user = await ctx.db
        .query("user")
        .filter((q)=>q.eq(q.field('tokenIdentifier'),identity.tokenIdentifier))
        .unique();
      if (user !== null) {
        // If we've seen this identity before but the name has changed, patch the value.
        if (user.name !== identity.name) {
          await ctx.db.patch(user._id, { name: identity.name });
        }
        return user._id;
      }
      return await ctx.db.insert("user", {
        name: identity.name || '',
        email: identity.email || '', 
        picture: identity.pictureUrl || '', 
        tokenIdentifier: identity.tokenIdentifier,
      });
    },
    
})