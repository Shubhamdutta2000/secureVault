CREATE TABLE `individuals` (
  `id` object_id,
  `individuals_details` Array,
  `individuals_documents` Array,
  `individuals_education` Array,
  `individuals_career` Array,
  `individuals_finance` Array,
  `individuals_medical` Array
);

CREATE TABLE `individuals_details` (
  `id` object_id PRIMARY KEY AUTO_INCREMENT,
  `name` string,
  `address` string,
  `phn_no` int,
  `email` string,
  `key` string,
  `dob` string
);

CREATE TABLE `pan_card` (
  `id` object_id,
  `pan_card` string
);

CREATE TABLE `individuals_documents` (
  `id` object_id,
  `adhaar_card_no` int PRIMARY KEY,
  `driver_license` string,
  `pan_card` Array,
  `voter_card` string,
  `passport` string
);

CREATE TABLE `individuals_education` (
  `id` object_id,
  `class_representative_boards` Array,
  `college` Array
);

CREATE TABLE `class_representative_boards` (
  `id` int PRIMARY KEY,
  `marks` string NOT NULL,
  `grade` string,
  `admit_card` string,
  `registration_card` string,
  `pass_certificate` string,
  `grade_certificate` string
);

CREATE TABLE `college` (
  `id` int PRIMARY KEY,
  `degree` string,
  `course` string,
  `discipline` string,
  `semester_sheets` string,
  `final_year_projects` string,
  `degree_certificate` string,
  `other_certificates` string
);

CREATE TABLE `individuals_career` (
  `id` object_id,
  `resume_or_portfolio` string,
  `career_instances` Array,
  `non_service_persuits` Array
);

CREATE TABLE `career_instances` (
  `id` int PRIMARY KEY,
  `company_name` string,
  `company_post` string,
  `finance` Array
);

CREATE TABLE `finance` (
  `id` object_id,
  `in_hand` string,
  `ctc` string,
  `salary_slips` string
);

CREATE TABLE `non_service_persuits` (
  `id` object_id,
  `freelancing` string,
  `bussiness` string,
  `non_profits` string
);

CREATE TABLE `individuals_finance` (
  `id` object_id,
  `pan_card` Array,
  `itr_forms` string,
  `bank_transaction` string,
  `assets` Array
);

CREATE TABLE `assets` (
  `id` object_id,
  `commodities` string,
  `cryptocurrencies` string,
  `stocks` string,
  `mutual_funds` string,
  `ipos` string
);

CREATE TABLE `individuals_medical` (
  `id` object_id,
  `vaccination_records` Array,
  `medical_illness_long_term` string
);

CREATE TABLE `vaccination_records` (
  `id` object_id,
  `records` Array
);

CREATE TABLE `records` (
  `id` object_id,
  `vaccine_name` string,
  `vaccine_date` date,
  `administered_by` string,
  `administered_at` date
);

ALTER TABLE `individuals` ADD FOREIGN KEY (`individuals_details`) REFERENCES `individuals_details` (`id`);

ALTER TABLE `individuals` ADD FOREIGN KEY (`individuals_documents`) REFERENCES `individuals_documents` (`id`);

ALTER TABLE `individuals` ADD FOREIGN KEY (`individuals_education`) REFERENCES `individuals_education` (`id`);

ALTER TABLE `individuals` ADD FOREIGN KEY (`individuals_career`) REFERENCES `individuals_career` (`id`);

ALTER TABLE `individuals` ADD FOREIGN KEY (`individuals_finance`) REFERENCES `individuals_finance` (`id`);

ALTER TABLE `individuals` ADD FOREIGN KEY (`individuals_medical`) REFERENCES `individuals_medical` (`id`);

ALTER TABLE `individuals_documents` ADD FOREIGN KEY (`pan_card`) REFERENCES `pan_card` (`id`);

ALTER TABLE `individuals_education` ADD FOREIGN KEY (`class_representative_boards`) REFERENCES `class_representative_boards` (`id`);

ALTER TABLE `individuals_education` ADD FOREIGN KEY (`college`) REFERENCES `college` (`id`);

ALTER TABLE `individuals_career` ADD FOREIGN KEY (`career_instances`) REFERENCES `career_instances` (`id`);

ALTER TABLE `individuals_career` ADD FOREIGN KEY (`non_service_persuits`) REFERENCES `non_service_persuits` (`id`);

ALTER TABLE `career_instances` ADD FOREIGN KEY (`finance`) REFERENCES `finance` (`id`);

ALTER TABLE `individuals_finance` ADD FOREIGN KEY (`pan_card`) REFERENCES `pan_card` (`id`);

ALTER TABLE `individuals_finance` ADD FOREIGN KEY (`assets`) REFERENCES `assets` (`id`);

ALTER TABLE `individuals_medical` ADD FOREIGN KEY (`vaccination_records`) REFERENCES `vaccination_records` (`id`);

ALTER TABLE `vaccination_records` ADD FOREIGN KEY (`records`) REFERENCES `records` (`id`);

ALTER TABLE `career_instances` ADD FOREIGN KEY (`company_name`) REFERENCES `career_instances` (`id`);
