CREATE TABLE `status` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	CONSTRAINT `status_id` PRIMARY KEY(`id`),
	CONSTRAINT `status_title_unique` UNIQUE(`title`)
);
--> statement-breakpoint
DROP TABLE `priority`;--> statement-breakpoint
ALTER TABLE `events` DROP FOREIGN KEY `events_priority_id_priority_id_fk`;
--> statement-breakpoint
ALTER TABLE `events` ADD `location` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `events` ADD `status_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `events` ADD `date_time` timestamp;--> statement-breakpoint
ALTER TABLE `events` ADD `create_at` timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL;--> statement-breakpoint
ALTER TABLE `user` ADD `name` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `events` ADD CONSTRAINT `events_status_id_status_id_fk` FOREIGN KEY (`status_id`) REFERENCES `status`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `events` DROP COLUMN `priority_id`;--> statement-breakpoint
ALTER TABLE `events` DROP COLUMN `createAt`;