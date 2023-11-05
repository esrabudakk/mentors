INSERT INTO users (first_name, last_name, username, email, phone, status, about_message)
VALUES
  ('John', 'Doe', 'johndoe', 'john@example.com', '123-456-7890', 'ACTIVE', 'I am a business enthusiast.'),
  ('Jane', 'Smith', 'janesmith', 'jane@example.com', '987-654-3210', 'ACTIVE', 'Experienced entrepreneur.'),
  ('Mike', 'Johnson', 'mikejohnson', 'mike@example.com', '555-555-5555', 'ACTIVE', 'Passionate about startups.'),
  ('Sarah', 'Williams', 'sarahw', 'sarah@example.com', '555-123-4567', 'ACTIVE', 'Entrepreneur and small business owner.'),
  ('Mark', 'Johnson', 'markj', 'mark@example.com', '555-987-6543', 'ACTIVE', 'Seeking business growth opportunities.'),
  ('Emily', 'Garcia', 'emilyg', 'emily@example.com', '555-555-1234', 'ACTIVE', 'Passionate about startups and innovation.');


INSERT INTO companies (company_title, tax_number, tax_office, country, city, address, official_user_id)
VALUES
  ('ABC Corporation', '12345', 'Local Tax Office', 'USA', 'New York', '123 Main St', 1),
  ('XYZ Inc.', '67890', 'City Tax Office', 'Canada', 'Toronto', '456 Elm St', 2),
  ('Startup Ventures', '54321', 'Startup Tax Office', 'USA', 'San Francisco', '789 Oak St', 3);

INSERT INTO consultants (consultant_type, education, career_information, status, user_id)
VALUES
  ('Financial Consultant', 'MBA in Finance', '10+ years of finance experience', 'ACTIVE', 1),
  ('Marketing Consultant', 'Marketing Degree', 'Digital marketing expert', 'ACTIVE', 2),
  ('Startup Advisor', 'Business Administration', 'Successful startup founder', 'ACTIVE', 3);

INSERT INTO categories (category_type, description)
VALUES
  ('Financial Planning', 'Services related to financial planning and analysis'),
  ('Marketing Strategies', 'Consultancy for marketing strategies and campaigns'),
  ('Startup Guidance', 'Assistance for new startups and entrepreneurs');

INSERT INTO advertisements (advertisement_title, description, price, currency, status, is_approved, user_id, category_id)
VALUES
  ('Financial Planning Services', 'Get expert financial planning advice', 100.00, 'USD', 'ACTIVE', 'Yes', 1, 1),
  ('Digital Marketing Consultancy', 'Boost your online presence with our marketing services', 75.50, 'USD', 'ACTIVE', 'Yes', 2, 2),
  ('Startup Launch Assistance', 'Guidance for launching your startup', 150.00, 'USD', 'ACTIVE', 'Yes', 3, 3);

INSERT INTO roles (role_name, description)
VALUES
  ('Admin', 'Administrator role with full access'),
  ('Client', 'Role for clients who seek business consultancy services'),
  ('Consultant', 'Role for business consultants providing services'),
  ('User', 'Standard user role with limited access');

INSERT INTO permissions (permission_name, role_id)
VALUES
  ('MANAGE_USER', 1),
  ('APPROVE_ADVERTISEMENT', 1),
  ('APPROVE_COMPANY', 1),
  ('MANAGE_COMPANY', 1),
  ('VIEW_ADVERTISEMENT', 1),
  ('VIEW_OWN_PROFILE', 1),
  ('CREATE_ADVERTISEMENT', 1);

INSERT INTO user_roles (user_id, role_id)
VALUES
  (1, 1),
  (2, 1),
  (3, 2),
  (4, 2),
  (5, 3),
  (6, 4);
