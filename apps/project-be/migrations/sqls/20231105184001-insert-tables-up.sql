INSERT INTO users (first_name, last_name, username, email, phone, status, about_message, keycloak_uid)
VALUES
  ('John', 'Doe', 'johndoe', 'john@example.com', '123-456-7890', 'ACTIVE', 'I am a business enthusiast.', 'dummy-keycloak_uid1'),
  ('Jane', 'Smith', 'janesmith', 'jane@example.com', '987-654-3210', 'ACTIVE', 'Experienced entrepreneur.','dummy-keycloak_uid2'),
  ('Mike', 'Johnson', 'mikejohnson', 'mike@example.com', '555-555-5555', 'ACTIVE', 'Passionate about startups.','dummy-keycloak_uid3'),
  ('Sarah', 'Williams', 'sarahw', 'sarah@example.com', '555-123-4567', 'ACTIVE', 'Entrepreneur and small business owner.','dummy-keycloak_uid4'),
  ('Mark', 'Johnson', 'markj', 'mark@example.com', '555-987-6543', 'ACTIVE', 'Seeking business growth opportunities.','dummy-keycloak_uid5'),
  ('Emily', 'Garcia', 'emilyg', 'emily@example.com', '555-555-1234', 'ACTIVE', 'Passionate about startups and innovation.','dummy-keycloak_uid6');


INSERT INTO companies (company_title, tax_number, tax_office, country, city, address, is_approved, status, official_user_id, created_by)
VALUES
  ('ABC Company', '1234567890', 'Tax Office A', 'Country A', 'City A', '123 Main St.', true, 'ACTIVE', 1, 1),
  ('XYZ Corporation', '0987654321', 'Tax Office B', 'Country B', 'City B', '456 Oak St.', true, 'ACTIVE', 2, 2),
  ('PQR Ltd.', '5678901234', 'Tax Office C', 'Country C', 'City C', '789 Elm St.', true, 'ACTIVE', 3, 3);


INSERT INTO consultant_type (consultant_name)
VALUES
  ('Software Consultant'),
  ('Mechanical Consultant'),
  ('Data Science Consultant');

INSERT INTO consultants (consultant_type_id, education, career_information, is_approved, status, user_id, created_by)
VALUES
  (1, 'Computer Science', 'Experienced in software development.', true, 'ACTIVE', 1, 1),
  (2, 'Engineering', 'Specialized in mechanical engineering.', true, 'ACTIVE', 2, 2),
  (1, 'Data Science', 'Skilled in machine learning.', true, 'ACTIVE', 3, 3);

INSERT INTO categories (category_type, description, status)
VALUES
  ('Financial Planning', 'Services related to financial planning and analysis','ACTIVE'),
  ('Marketing Strategies', 'Consultancy for marketing strategies and campaigns','ACTIVE'),
  ('Startup Guidance', 'Assistance for new startups and entrepreneurs','ACTIVE');

INSERT INTO advertisements (advertisement_title, description, price, currency, status, is_approved, user_id, category_id)
VALUES
  ('Financial Planning Services', 'Get expert financial planning advice', 100.00, 'USD', 'ACTIVE', true, 1, 1),
  ('Digital Marketing Consultancy', 'Boost your online presence with our marketing services', 75.50, 'USD', 'ACTIVE', true, 2, 2),
  ('Startup Launch Assistance', 'Guidance for launching your startup', 150.00, 'USD', 'ACTIVE', true, 3, 3);

INSERT INTO roles (role_name, description)
VALUES
  ('Admin', 'Administrator role with full access'),
  ('Client', 'Role for clients who seek business consultancy services'),
  ('Consultant', 'Role for business consultants providing services')


INSERT INTO permissions (permission_name, role_id)
VALUES
  ('MANAGE_USER', 1),
  ('APPROVE_ADVERTISEMENT', 1),
  ('VIEW_OWN_PROFILE', 1),
  ('APPROVE_COMPANY', 1),
  ('APPROVE_CONSULTANT', 1),
  ('VIEW_ADVERTISEMENT', 1),
  ('VIEW_ADVERTISEMENT', 2),
  ('VIEW_ADVERTISEMENT',3),
  ('VIEW_COMPANY_PROFILE',3),
  ('DELETE_ADVERTISEMENT',3),
  ('VIEW_OWN_PROFILE', 2),
  ('VIEW_OWN_PROFILE', 3),
  ('CREATE_ADVERTISEMENT', 3),
  ('CREATE_COMPANY', 3),
  ('UPDATE_ADVERTISEMENT', 3),
  ('UPDATE_COMPANY_PROFILE', 3),
  ('UPDATE_CONSULTANT_PROFILE', 3),
  ('CREATE_CONSULTANT_PROFILE', 2),
  ('GET_PING', 2);

INSERT INTO user_roles (user_id, role_id)
VALUES
  (1, 1),
  (2, 1),
  (3, 2),
  (4, 2),
  (5, 3),
  (6, 4);
