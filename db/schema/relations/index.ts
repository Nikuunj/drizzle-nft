import { relations } from "drizzle-orm";
import { players, user } from "../tables/user";
import { events } from "../tables/event";
import { eventsTags, status, tags } from "../tables/tags";
import { teams } from "../tables/teams";

export const userRelation = relations(user, ({ many }) => ({
  events: many(events),
  players: many(players),
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


