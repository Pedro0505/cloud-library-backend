-- CreateTable
CREATE TABLE `books` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `birth_date` DATE NOT NULL,
    `sex` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `writers` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(45) NOT NULL,
    `publication_date` DATE NOT NULL,
    `caption` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `books_writers` (
    `books_id` VARCHAR(191) NOT NULL,
    `writers_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`books_id`, `writers_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `books_writers` ADD CONSTRAINT `books_writers_books_id_fkey` FOREIGN KEY (`books_id`) REFERENCES `books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `books_writers` ADD CONSTRAINT `books_writers_writers_id_fkey` FOREIGN KEY (`writers_id`) REFERENCES `writers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
