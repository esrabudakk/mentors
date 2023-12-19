INSERT INTO users (first_name, last_name, username, email, phone, status, about_message,
keycloak_uid)
VALUES
  ('John', 'Doe', 'johndoe', 'john@example.com', '123-456-7890', 'ACTIVE', 'I am a business enthusiast.','489642a0-277c-4f49-b7b4-acc4b46a649e'),
  ('Jane', 'Smith', 'janesmith', 'jane@example.com', '987-654-3210', 'ACTIVE', 'Experienced entrepreneur.','42870000-ada9-42b8-9080-f09c7a5ed6a1'),
  ('Mike', 'Johnson', 'mikejohnson', 'mike@example.com', '512-555-5555', 'ACTIVE', 'Passionate about startups.','8e5a72ca-0905-4701-960e-ac131e0a9910'),
  ('Sarah', 'Williams', 'sarahw', 'sarah@example.com', '545-123-4567', 'ACTIVE', 'Entrepreneur and small business owner.','42870000-ada9-42b8-9080-f09c7a5ed6a1'),
  ('Mark', 'Johnson', 'markj', 'mark@example.com', '535-987-6543', 'ACTIVE', 'Seeking business growth opportunities.','1176a41a-0eb0-4c77-923c-9432dc38434d'),
  ('Emily', 'Garcia', 'emilyg', 'emily@example.com', '547-555-1234', 'ACTIVE', 'Passionate about startups and innovation.','08303f4c-64ec-4c9e-bf5b-16ebb2939572'),
  ('Chloe', 'King', 'ChloeKing_45', 'chloeking@example.com', '558-876-5432', 'ACTIVE', 'Small business owner joining the squad! Cheers, friend!', 'f17a91a9-2998-438d-9bf3-c018081986b0'),
  ('Henry', 'Cavill', 'HenryCavill_67', 'henrycavill@example.com', '559-987-6549', 'ACTIVE', 'Entrepreneurial vibes activated. Cheers to success!', '6ff6cf06-12ca-4a4e-bbea-277a67fc6f05'),
  ('Lily', 'Lopez', 'LilyLopez_89', 'lilylopez@example.com', '557-876-5437', 'ACTIVE', 'Your startup passion is our driving force.', '0020bf00-e117-4c1a-ac2d-361b0bd1cdf1'),
  ('Jackson', 'Hill', 'JacksonHill_01', 'jacksonhill@example.com', '555-234-5678', 'ACTIVE', 'Small business vibes on point. Cheers to the team!', '5f5572c6-b6ac-47ac-993b-8710487735a6'),
  ('Addison', 'Scott', 'AddisonScott_23', 'addisonscott@example.com', '551-876-5412', 'ACTIVE', 'Entrepreneurial spirit, welcome aboard! Lets thrive together.', '83cec429-0178-45e2-862e-b27f499379ff'),
  ('David', 'Green', 'DavidGreen_45', 'davidgreen@example.com', '554-234-5677', 'ACTIVE', 'Thrilled to have a business enthusiast like you!', '44995874-9c1f-45f0-8577-ad6064efc900'),
  ('Aubrey', 'Adams', 'AubreyAdams_67', 'aubreyadams@example.com', '550-876-5432', 'ACTIVE', 'Ready for a journey together, experienced entrepreneur?', 'e360ab21-ef00-41a8-987d-03914e16d0f1'),
  ('Owen', 'Baker', 'OwenBaker_89', 'owenbaker@example.com', '553-987-6503', 'ACTIVE', 'Small business owner joining the squad! Cheers!', '1435963a-b365-48cd-8dd1-657e03caa93a');


INSERT INTO companies (company_title, tax_number, tax_office, country, city, address, official_user_id, status,is_approved)
VALUES('Amazing Solutions', '123456789', 'Tax Office New York', 'Amerika Birleşik Devletleri', 'New York', '123 Main Street, Manhattan', 5, 'ACTIVE', true),
         ('Quantum Innovations', '234567890', 'Tax Office Westminster', 'İngiltere', 'Londra', '456 Park Avenue, Westminster', 6, 'ACTIVE',true),
         ('Dynamic Enterprises', '345678901', 'Tax Office Paris', 'Fransa', 'Paris', '789 Rue de la République, Le Marais', 7, 'ACTIVE',true),
         ('Global Systems Ltd.', '456789012', 'Tax Office Berlin', 'Almanya', 'Berlin', '101 Unter den Linden, Mitte', 8, 'ACTIVE',true),
         ('Elite Technologies', '567890123', 'Tax Office Tokyo', 'Japonya', 'Tokyo', '202 Shibuya Crossing, Shibuya', 9, 'ACTIVE',true);

INSERT INTO consultant_type (consultant_name)
VALUES
  ('Financial Analyst'),
  ('HR'),
  ('IT'),
  ('Legal Advisor'),
  ('Management'),
  ('CyberSecurity'),
  ('Sales Strategist'),
  ('Health and Wellness Coach'),
  ('Environmental'),
  ('Data Science');


INSERT INTO consultants (education,career_information,status,user_id,is_approved,consultant_type_id)
SELECT
    education,
    career_information,
    status,
    user_id,
    is_approved,
    consultant_type.id AS consultant_type_id
FROM (VALUES
  ('Finance and Accounting', '10+ years of financial analysis and risk management expertise', 'ACTIVE',5, true)
  ) AS consultants(education, career_information,status ,user_id,is_approved)
CROSS JOIN consultant_type
WHERE
  consultant_type.consultant_name = 'Financial Analyst';

INSERT INTO consultants (education,career_information,status,user_id,is_approved,consultant_type_id)
SELECT
    education,
    career_information,
    status,
    user_id,
    is_approved,
    consultant_type.id AS consultant_type_id
FROM (VALUES
  ('Marketing Management', 'Successful track record of implementing innovative marketing strategies', 'ACTIVE', 6,true)
    ) AS consultants(education, career_information,status ,user_id,is_approved)
CROSS JOIN consultant_type
WHERE
  consultant_type.consultant_name = 'HR';

INSERT INTO consultants (education,career_information,status,user_id,is_approved,consultant_type_id)
SELECT
    education,
    career_information,
    status,
    user_id,
    is_approved,
    consultant_type.id AS consultant_type_id
FROM (VALUES
  ('Information Technology', 'Specialized in cyberSecurity risk assessment and mitigation', 'ACTIVE', 7, true)) AS consultants(education, career_information,status ,user_id,is_approved)
CROSS JOIN consultant_type
WHERE
  consultant_type.consultant_name = 'IT';


INSERT INTO consultants (education,career_information,status,user_id,is_approved,consultant_type_id)
SELECT
    education,
    career_information,
    status,
    user_id,
    is_approved,
    consultant_type.id AS consultant_type_id
FROM (VALUES
    ('Law and Legal Studies', 'Providing legal counsel to diverse clientele', 'ACTIVE', 8,true)) AS consultants(education, career_information,status ,user_id,is_approved)
CROSS JOIN consultant_type
WHERE
  consultant_type.consultant_name = 'Legal Advisor';

  INSERT INTO consultants (education,career_information,status,user_id,is_approved,consultant_type_id)
  SELECT
      education,
      career_information,
      status,
      user_id,
      is_approved,
      consultant_type.id AS consultant_type_id
  FROM (VALUES
        ('Business Administration', 'Led organizational transformation projects for major corporations', 'ACTIVE', 9, true)) AS consultants(education, career_information,status ,user_id,is_approved)
  CROSS JOIN consultant_type
  WHERE
    consultant_type.consultant_name = 'Management';

  INSERT INTO consultants (education,career_information,status,user_id,is_approved,consultant_type_id)
  SELECT
      education,
      career_information,
      status,
      user_id,
      is_approved,
      consultant_type.id AS consultant_type_id
  FROM (VALUES
          ( 'Computer Science', 'Expert in cybersecurity risk assessment and mitigation', 'ACTIVE', 10,true)) AS consultants(education, career_information,status ,user_id,is_approved)
  CROSS JOIN consultant_type
  WHERE
    consultant_type.consultant_name = 'CyberSecurity';

  INSERT INTO consultants (education,career_information,status,user_id,is_approved,consultant_type_id)
  SELECT
      education,
      career_information,
      status,
      user_id,
      is_approved,
      consultant_type.id AS consultant_type_id
  FROM (VALUES
            ( 'Sales and Marketing', 'Developed and executed successful sales strategies for global brands', 'ACTIVE', 11,true)) AS consultants(education, career_information,status ,user_id,is_approved)
  CROSS JOIN consultant_type
  WHERE
    consultant_type.consultant_name = 'Sales Strategist';

  INSERT INTO consultants (education,career_information,status,user_id,is_approved,consultant_type_id)
  SELECT
      education,
      career_information,
      status,
      user_id,
      is_approved,
      consultant_type.id AS consultant_type_id
  FROM (VALUES
              ( 'Health Sciences', 'Health and wellness coach with a focus on holistic well-being', 'ACTIVE', 12,true)) AS consultants(education, career_information,status ,user_id,is_approved)
  CROSS JOIN consultant_type
  WHERE
    consultant_type.consultant_name = 'Health and Wellness Coach';

  INSERT INTO consultants (education,career_information,status,user_id,is_approved,consultant_type_id)
  SELECT
      education,
      career_information,
      status,
      user_id,
      is_approved,
      consultant_type.id AS consultant_type_id
  FROM (VALUES
        ('Environmental Studies', 'Environmental consultant with a history of sustainable project success', 'ACTIVE', 13,true)) AS consultants(education, career_information,status ,user_id,is_approved)
  CROSS JOIN consultant_type
  WHERE
    consultant_type.consultant_name = 'Environmental';


  INSERT INTO consultants (education,career_information,status,user_id,is_approved,consultant_type_id)
  SELECT
      education,
      career_information,
      status,
      user_id,
      is_approved,
      consultant_type.id AS consultant_type_id
  FROM (VALUES
          ('Data Science and Analytics', 'Expertise in data science and analytics for business optimization', 'ACTIVE', 14,true)) AS consultants(education, career_information,status ,user_id,is_approved)
  CROSS JOIN consultant_type
  WHERE
    consultant_type.consultant_name = 'Data Science';





INSERT INTO categories (category_type, description, status)
VALUES
  (('Financial Risk Management', 'Strategies to identify, assess, and mitigate financial risks for a stable and secure financial future.', 'ACTIVE');
  ('Human Resources Management', 'Solutions for effective HR practices, including talent acquisition, employee development, and workplace culture.', 'ACTIVE'),
  ('Technology Consulting', 'Expert guidance on leveraging technology to improve efficiency, productivity, and overall business performance.', 'ACTIVE'),
  ('Legal Advisory Services', 'Professional legal counsel covering a wide range of legal matters to ensure compliance and mitigate risks.', 'ACTIVE'),
  ('Project Management', 'Comprehensive project management solutions for successful planning, execution, and completion of projects.', 'ACTIVE'),
  ('CyberSecurity Solutions', 'Comprehensive solutions to protect businesses from cyber threats and ensure data security.', 'ACTIVE'),
  ('Real Estate Investment', 'Advisory services for making informed and profitable real estate investment decisions.', 'ACTIVE'),
  ('Health and Wellness Consulting', 'Guidance on promoting a healthy and balanced workplace, fostering employee well-being.', 'ACTIVE'),
  ('Environmental Sustainability', 'Consultancy for businesses striving to implement sustainable practices and reduce environmental impact.', 'ACTIVE'),
  ('Data Analytics Solutions', 'Utilizing data analysis to derive valuable insights, optimize decision-making, and drive business success.', 'ACTIVE'));


 INSERT INTO advertisements (advertisement_title, description, price, currency, status, is_approved, user_id,category_id)
     SELECT
         advertisement_title,
         advertisements.description,
         price,
         currency,
         advertisements.status,
         is_approved,
         user_id,
         categories.id AS category_id
     FROM (VALUES
             ('Financial Fortitude: Risk Management Strategies', 'Build financial fortitude with our risk management strategies. Ensure a stable and secure financial future.', 179, 'USD', 'ACTIVE', true, 5 ),
             ('Financial Shield: Mitigating Financial Risks', 'Secure your financial future with the Financial Shield. Our strategies mitigate risks for a stable financial path.', 249, 'USD', 'PASSIVE', false, 5 ))
             AS advertisements(advertisement_title,description,price ,currency,status,is_approved,user_id)
     CROSS JOIN categories
     WHERE
       categories.category_type = 'Financial Risk Management';

  INSERT INTO advertisements (advertisement_title, description, price, currency, status, is_approved, user_id,category_id)
     SELECT
         advertisement_title,
         advertisements.description,
         price,
         currency,
         advertisements.status,
         is_approved,
         user_id,
         categories.id AS category_id
     FROM (VALUES
             ('HR Excellence: Elevate Your Workforce Management', 'Elevate your business through effective HR practices. Let us guide you in creating an excellent workforce management strategy.', 899, 'USD', 'ACTIVE', true, 6 ),
             ('HR Harmony: Nurturing Workplace Culture', 'Harmonize your workplace culture with effective HR strategies. Nurturing harmony for a positive work environment.', 129, 'USD', 'ACTIVE', true, 6 ),
             ('HR Harmony Plus: Cultivating a Positive Work Environment', 'Upgrade to HR Harmony Plus. Cultivate an even more positive work environment with advanced HR strategies.', 149, 'USD', 'ACTIVE', true, 6 ))
             AS advertisements(advertisement_title,description,price ,currency,status,is_approved,user_id)
     CROSS JOIN categories
     WHERE
       categories.category_type = 'Human Resources Management';

  INSERT INTO advertisements (advertisement_title, description, price, currency, status, is_approved, user_id,category_id)
     SELECT
         advertisement_title,
         advertisements.description,
         price,
         currency,
         advertisements.status,
         is_approved,
         user_id,
         categories.id AS category_id
     FROM (VALUES
             ('Tech Innovations for Your Growth: Technology Consulting Expertise', 'Ignite growth with cutting-edge technology. Explore new horizons with our Technology Consulting Expertise.', 149, 'USD', 'ACTIVE', true, 7 ),
             ('Tech Marvels: Cutting-Edge Technology Solutions', 'Experience cutting-edge technology marvels. Our solutions redefine whats possible in the tech world.', 219, 'USD', 'ACTIVE', true, 7 ),
             ('Tech Titans: Harnessing Tech for Business Triumph', 'Join the league of Tech Titans. Harness technology for triumph in your business endeavors.', 279, 'USD', 'ACTIVE', true, 7))
             AS advertisements(advertisement_title,description,price ,currency,status,is_approved,user_id)
     CROSS JOIN categories
     WHERE
       categories.category_type = 'Technology Consulting';

     INSERT INTO advertisements (advertisement_title, description, price, currency, status, is_approved, user_id,category_id)
        SELECT
            advertisement_title,
            advertisements.description,
            price,
            currency,
            advertisements.status,
            is_approved,
            user_id,
            categories.id AS category_id
        FROM (VALUES

 ('Legal Insights: Navigate Legal Matters with Confidence', 'Confidently navigate legal waters with our expert insights. We are here to ensure your legal matters are handled with confidence.', 129, 'USD', 'ACTIVE', true, 8),
 ('Legal Guardianship: Secure Legal Advisory', 'Secure your business with our Legal Guardianship. Trust us for expert and secure legal advisory.', 159, 'USD', 'ACTIVE', true, 8 ),
 ('Legal Guardianship Pro: Expert Legal Advisory', 'Elevate your legal strategy with Legal Guardianship Pro. Trust us for expert and sophisticated legal advisory.', 179, 'USD', 'ACTIVE', true, 8 ))
                AS advertisements(advertisement_title,description,price ,currency,status,is_approved,user_id)
        CROSS JOIN categories
        WHERE
          categories.category_type = 'Legal Advisory Services';

           INSERT INTO advertisements (advertisement_title, description, price, currency, status, is_approved, user_id,category_id)
              SELECT
                  advertisement_title,
                  advertisements.description,
                  price,
                  currency,
                  advertisements.status,
                  is_approved,
                  user_id,
                  categories.id AS category_id
              FROM (VALUES

      ('Project Mastery: Seamless Project Management Solutions', 'Achieve mastery in project execution. From planning to completion, our solutions ensure seamless project management.', 119, 'USD', 'ACTIVE', true, 9),
      ('Project Mastery Pro: Elevate Your Project Success', 'Take project mastery to the next level. Elevate your project success with our professional solutions.', 189, 'USD', 'PASSIVE', false, 9 ),
      ('Project Mastery Elite: Excellence in Project Execution', 'Reach the pinnacle of project mastery with Project Mastery Elite. Excellence in every phase of project execution.', 229, 'USD', 'ACTIVE', true, 9 ))
                      AS advertisements(advertisement_title,description,price ,currency,status,is_approved,user_id)
              CROSS JOIN categories
              WHERE
                categories.category_type = 'Project Management';

                          INSERT INTO advertisements (advertisement_title, description, price, currency, status, is_approved, user_id,category_id)
                             SELECT
                                 advertisement_title,
                                 advertisements.description,
                                 price,
                                 currency,
                                 advertisements.status,
                                 is_approved,
                                 user_id,
                                 categories.id AS category_id
                             FROM (VALUES

                     ('Cybersecurity Shield: Protect Your Business Safely', 'Safeguard your business with our Cybersecurity Shield. Your digital fortress against online threats.', 179, 'USD', 'ACTIVE', true, 10 ),
                     ('Cybersecurity Sentinel: Your Digital Guardian', 'Trust the Cybersecurity Sentinel as your digital guardian. Protect your business with our advanced cybersecurity measures.', 239, 'USD', 'ACTIVE', true, 10 ))
                                     AS advertisements(advertisement_title,description,price ,currency,status,is_approved,user_id)
                             CROSS JOIN categories
                             WHERE
                               categories.category_type = 'CyberSecurity Solutions';


             INSERT INTO advertisements (advertisement_title, description, price, currency, status, is_approved, user_id,category_id)
                             SELECT
                                 advertisement_title,
                                 advertisements.description,
                                 price,
                                 currency,
                                 advertisements.status,
                                 is_approved,
                                 user_id,
                                 categories.id AS category_id
                             FROM (VALUES
 ('Real Estate Riches: Investment Advisory Services', 'Unlock real estate riches with expert investment advice. Our Investment Advisory Services guide you towards profitable decisions.', 249, 'USD', 'ACTIVE', true, 11 ),
 ('Real Estate Riches Pro: Expert Investment Strategies', 'Upgrade to Real Estate Riches Pro. Our expert investment strategies pave the way for profitable real estate ventures.', 289, 'USD', 'ACTIVE', true, 11 ))
                                     AS advertisements(advertisement_title,description,price ,currency,status,is_approved,user_id)
                             CROSS JOIN categories
                             WHERE
                               categories.category_type = 'Real Estate Investment';

                                 INSERT INTO advertisements (advertisement_title, description, price, currency, status, is_approved, user_id,category_id)
                                                          SELECT
                                                              advertisement_title,
                                                              advertisements.description,
                                                              price,
                                                              currency,
                                                              advertisements.status,
                                                              is_approved,
                                                              user_id,
                                                              categories.id AS category_id
                                                          FROM (VALUES
                              ('Wellbeing at Work: Health and Wellness Strategies', 'Prioritize a healthy workplace with Wellness Strategies. Discover the key to employee wellbeing and a positive work environment.', 149, 'USD', 'ACTIVE', true, 12 ),
                              ('Wellness Warriors: Building a Healthy Workplace', 'Join the Wellness Warriors. Together, lets build a workplace that prioritizes health and well-being.', 119, 'USD', 'ACTIVE', true, 12 ),
                              ('Wellness Champions: Building a Resilient Workforce', 'Become Wellness Champions. Build a resilient workforce with a focus on health and well-being.', 149, 'USD', 'PASSIVE', false, 12 ))
                                                                  AS advertisements(advertisement_title,description,price ,currency,status,is_approved,user_id)
                                                          CROSS JOIN categories
                                                          WHERE
                                                            categories.category_type = 'Health and Wellness Consulting';

                                 INSERT INTO advertisements (advertisement_title, description, price, currency, status, is_approved, user_id,category_id)
                                                          SELECT
                                                              advertisement_title,
                                                              advertisements.description,
                                                              price,
                                                              currency,
                                                              advertisements.status,
                                                              is_approved,
                                                              user_id,
                                                              categories.id AS category_id
                                                          FROM (VALUES
                         ('Eco-Friendly Business: Sustainability Consultancy', 'Transform your business with eco-friendly practices. Our Sustainability Consultancy brings green solutions for a brighter future.', 159, 'USD', 'ACTIVE', true, 13 ),
                         ('Eco-Wise Business: Sustainability in Action', 'Put sustainability into action with our Eco-Wise Business solutions. Make a positive impact on the planet.', 179, 'USD', 'ACTIVE', true, 13 ),
                         ('Eco-Wise Business Plus: Sustainable Practices for Success', 'Upgrade to Eco-Wise Business Plus. Implement sustainable practices for long-term success and positive impact.', 239, 'USD', 'ACTIVE', true, 13 ))
                                                                  AS advertisements(advertisement_title,description,price ,currency,status,is_approved,user_id)
                                                          CROSS JOIN categories
                                                          WHERE
                                                            categories.category_type = 'Environmental Sustainability';

                                                                    INSERT INTO advertisements (advertisement_title, description, price, currency, status, is_approved, user_id,category_id)
                                                                                                                     SELECT
                                                                                                                         advertisement_title,
                                                                                                                         advertisements.description,
                                                                                                                         price,
                                                                                                                         currency,
                                                                                                                         advertisements.status,
                                                                                                                         is_approved,
                                                                                                                         user_id,
                                                                                                                         categories.id AS category_id
                                                                                                                     FROM (VALUES
                                                                                    ('Data-Driven Excellence: Analytics for Smart Decision-Making', 'Drive excellence with data-driven decisions. Our Analytics solutions empower smart decision-making for business success.', 189, 'USD', 'ACTIVE', true, 14 ),
                                                                                    ('Data Alchemy: Transforming Data into Insights', 'Alchemy for your data. Witness the transformation of raw data into valuable insights.', 149, 'USD', 'ACTIVE', true, 14 ),
                                                                                    ('Data Dynamo: Mastering the Art of Data Science', 'Become a Data Dynamo. Master the art of data science for insightful decision-making and business success.', 199, 'USD', 'PASSIVE', false, 14 ))
                                                                                                                             AS advertisements(advertisement_title,description,price ,currency,status,is_approved,user_id)
                                                                                                                     CROSS JOIN categories
                                                                                                                     WHERE
                                                                                                                       categories.category_type = 'Data Analytics Solutions';
INSERT INTO roles (role_name, description)
VALUES
  ('ADMIN', 'Administrator role with full access'),
  ('CLIENT', 'Role for clients who seek business consultancy services'),
  ('CONSULTANT', 'Role for business consultants providing services')

INSERT INTO permissions (permission_name, role_id)
SELECT
  permission_name,
  roles.id AS role_id
FROM (VALUES
      ('MANAGE_USER'),
      ('APPROVE_ADVERTISEMENT'),
      ('VIEW_OWN_PROFILE'),
      ('APPROVE_COMPANY'),
      ('VIEW_ADVERTISEMENT')) AS permissions(permission_name)
CROSS JOIN roles
WHERE
  roles.role_name = 'ADMIN';

INSERT INTO permissions (permission_name, role_id)
SELECT
  permission_name,
  roles.id AS role_id
  FROM (VALUES
      ('VIEW_ADVERTISEMENT'),
      ('VIEW_COMPANY_PROFILE'),
      ('VIEW_OWN_PROFILE'),
      ('CREATE_ADVERTISEMENT'),
      ('CREATE_COMPANY'),
      ('UPDATE_ADVERTISEMENT'),
      ('UPDATE_COMPANY_PROFILE'),
      ('UPDATE_CONSULTANT_PROFILE'),
      ('DELETE_ADVERTISEMENT')) AS permissions(permission_name)
CROSS JOIN roles
WHERE
  roles.role_name = 'CONSULTANT';


INSERT INTO permissions (permission_name, role_id)
SELECT
  permission_name,
  roles.id AS role_id
FROM(VALUES
      ('VIEW_ADVERTISEMENT'),
      ('CREATE_CONSULTANT_PROFILE'),
      ('VIEW_OWN_PROFILE')) AS permissions(permission_name)
CROSS JOIN roles
WHERE
  roles.role_name = 'CLIENT';

INSERT INTO user_roles (user_id, role_id)
VALUES
  (1, 1),
  (2, 1),
  (3, 2),
  (4, 2),
  (5, 3),
  (6, 3)
  (7, 3),
  (8, 3),
  (9, 3),
  (10,3),
  (11,3),
  (12,3),
  (13,3),
  (14,3);
