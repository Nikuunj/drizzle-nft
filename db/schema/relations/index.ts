import { relations } from "drizzle-orm";
import { players, user } from "../tables/user";
import { events, eventsTags } from "../tables/event";
import { status, tags } from "../tables/tags";
import { teams } from "../tables/teams";
import { purchase } from "../tables/purchase";

export const userRelation = relations(user, ({ many }) => ({
  events: many(events),
  players: many(players),
  purchase: many(purchase)
}))

export const eventsRelation = relations(events, ({ many, one }) => ({
  user: one(user, {
    fields: [events.userId],
    references: [user.id]
  }),
  status: one(status, {
    fields: [events.statusId],
    references: [status.id]
  }),
  eventsTags: many(eventsTags),
  purchase: many(purchase)
}))

export const tagsRelation = relations(tags, ({ many }) => ({
  eventsTags: many(eventsTags)
}))

export const statusRelation = relations(status, ({ many }) => ({
  events: many(events)
}))

export const teamsRelation = relations(teams, ({ many }) => ({
  players: many(players),
}));

export const playersRelation = relations(players, ({ one }) => ({
  user: one(user, {
    fields: [players.userId],
    references: [user.id],
  }),
  team: one(teams, {
    fields: [players.teamId],
    references: [teams.id],
  }),
}));


export const puchaseRelation = relations(purchase, ({ one }) => ({
  user: one(user, {
    fields: [purchase.userId],
    references: [user.id],
  }),
  event: one(events, {
    fields: [purchase.eventId],
    references: [events.id]
  })
}))
export const eventsTagRelation = relations(eventsTags, ({ one }) => ({
  event: one(events, {
    fields: [eventsTags.eventsId],
    references: [events.id],
  }),
  tag: one(tags, {
    fields: [eventsTags.tagId],
    references: [tags.id],
  }),
}))


