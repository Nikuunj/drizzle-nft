CREATE TABLE `purchase` (
	`user_id` char(36) NOT NULL,
	`event_id` int NOT NULL
);
--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `id` char(36) NOT NULL DEFAULT (UUID());--> statement-breakpoint
ALTER TABLE `events` ADD `price` int NOT NULL;--> statement-breakpoint
ALTER TABLE `purchase` ADD CONSTRAINT `purchase_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `purchase` ADD CONSTRAINT `purchase_event_id_events_id_fk` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE no action ON UPDATE no action;