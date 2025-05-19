import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Tutorial section schema
export const tutorialSections = pgTable("tutorial_sections", {
  id: serial("id").primaryKey(),
  sectionId: text("section_id").notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  order: integer("order").notNull(),
});

// Examples schema
export const examples = pgTable("examples", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  iterations: jsonb("iterations").notNull(),
});

// Resources schema
export const resources = pgTable("resources", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(),
  icon: text("icon").notNull(),
  items: jsonb("items").notNull(),
});

// Newsletter subscribers schema
export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  subscribed_at: text("subscribed_at").notNull(),
  active: boolean("active").notNull().default(true),
});

// Create insert schemas
export const insertTutorialSectionSchema = createInsertSchema(tutorialSections).pick({
  sectionId: true,
  title: true,
  content: true,
  order: true,
});

export const insertExampleSchema = createInsertSchema(examples).pick({
  title: true,
  description: true,
  iterations: true,
});

export const insertResourceSchema = createInsertSchema(resources).pick({
  category: true,
  icon: true,
  items: true,
});

export const insertSubscriberSchema = createInsertSchema(subscribers).pick({
  email: true,
  subscribed_at: true,
});

// Define types
export type InsertTutorialSection = z.infer<typeof insertTutorialSectionSchema>;
export type TutorialSection = typeof tutorialSections.$inferSelect;

export type InsertExample = z.infer<typeof insertExampleSchema>;
export type Example = typeof examples.$inferSelect;

export type InsertResource = z.infer<typeof insertResourceSchema>;
export type Resource = typeof resources.$inferSelect;

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribers.$inferSelect;
