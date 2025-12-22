CREATE TABLE `events` (
	`id` char(36) NOT NULL DEFAULT (UUID()),
	`title` varchar(50) NOT NULL,
	`description` varchar(255) NOT NULL,
	`location` varchar(255) NOT NULL,
	`status_id` int NOT NULL,
	`price` int NOT NULL,
	`user_id` char(36) NOT NULL,
	`date_time` timestamp,
	`create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `events_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `events_tags` (
	`tagId` int NOT NULL,
	`eventsId` char(36) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `players` (
	`user_id` char(36) NOT NULL,
	`team_id` int NOT NULL,
	CONSTRAINT `players_team_id_user_id_pk` PRIMARY KEY(`team_id`,`user_id`)
);
--> statement-breakpoint
CREATE TABLE `purchase` (
	`user_id` char(36) NOT NULL,
	`event_id` char NOT NULL
);
--> statement-breakpoint
CREATE TABLE `status` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	CONSTRAINT `status_id` PRIMARY KEY(`id`),
	CONSTRAINT `status_title_unique` UNIQUE(`title`)
);
--> statement-breakpoint
CREATE TABLE `tags` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	CONSTRAINT `tags_id` PRIMARY KEY(`id`),
	CONSTRAINT `tags_title_unique` UNIQUE(`title`)
);
--> statement-breakpoint
CREATE TABLE `teams` (
	`id` int AUTO_INCREMENT NOT NULL,
	`team_name` varchar(255) NOT NULL,
	CONSTRAINT `teams_id` PRIMARY KEY(`id`),
	CONSTRAINT `teams_team_name_unique` UNIQUE(`team_name`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` char(36) NOT NULL DEFAULT (UUID()),
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `events` ADD CONSTRAINT `events_status_id_status_id_fk` FOREIGN KEY (`status_id`) REFERENCES `status`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `events` ADD CONSTRAINT `events_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `events_tags` ADD CONSTRAINT `events_tags_tagId_tags_id_fk` FOREIGN KEY (`tagId`) REFERENCES `tags`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `events_tags` ADD CONSTRAINT `events_tags_eventsId_events_id_fk` FOREIGN KEY (`eventsId`) REFERENCES `events`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `players` ADD CONSTRAINT `players_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `players` ADD CONSTRAINT `players_team_id_teams_id_fk` FOREIGN KEY (`team_id`) REFERENCES `teams`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `purchase` ADD CONSTRAINT `purchase_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `purchase` ADD CONSTRAINT `purchase_event_id_events_id_fk` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE no action ON UPDATE no action;