import { relations } from "drizzle-orm";
import { user } from "../tables/user";
import { events } from "../tables/event";
import { eventsTags, status, tags } from "../tables/tags";

export const userRelation = relations(user, ({ many }) => ({
  events: many(events)
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

export const priorityRelation = relations(status, ({ many }) => ({
  events: many(events)
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


