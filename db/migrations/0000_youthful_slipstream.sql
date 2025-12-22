CREATE TABLE `events` (
	`id` char(36) NOT NULL DEFAULT (UUID(),
	`title` varchar(50) NOT NULL,
	`description` varchar(255) NOT NULL,
	`priority_id` int NOT NULL,
	`user_id` char(36) NOT NULL,
	`createAt` timestamp,
	CONSTRAINT `events_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `events_tags` (
	`tagId` int NOT NULL,
	`eventsId` char(36) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `priority` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	CONSTRAINT `priority_id` PRIMARY KEY(`id`),
	CONSTRAINT `priority_title_unique` UNIQUE(`title`)
);
--> statement-breakpoint
CREATE TABLE `tags` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	CONSTRAINT `tags_id` PRIMARY KEY(`id`),
	CONSTRAINT `tags_title_unique` UNIQUE(`title`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` char(36) NOT NULL DEFAULT (UUID(),
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `events` ADD CONSTRAINT `events_priority_id_priority_id_fk` FOREIGN KEY (`priority_id`) REFERENCES `priority`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `events` ADD CONSTRAINT `events_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `events_tags` ADD CONSTRAINT `events_tags_tagId_tags_id_fk` FOREIGN KEY (`tagId`) REFERENCES `tags`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `events_tags` ADD CONSTRAINT `events_tags_eventsId_events_id_fk` FOREIGN KEY (`eventsId`) REFERENCES `events`(`id`) ON DELETE no action ON UPDATE no action;