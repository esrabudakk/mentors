CREATE TABLE users (
  id serial PRIMARY KEY,
  first_name text NOT NULL,
  last_name text NOT NULL,
  username text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  status text NOT NULL check (status in ('ACTIVE', 'PASSIVE')),
  about_message text,
  created_at timestamp NOT NULL default now(),
  created_by integer,
  updated_at timestamp,
  updated_by integer
);

CREATE TABLE companies (
  id serial PRIMARY KEY,
  company_title text NOT NULL,
  tax_number text NOT NULL,
  tax_office text NOT NULL,
  country text NOT NULL,
  city text NOT NULL,
  address text NOT NULL,
  status text NOT NULL check (status in ('ACTIVE', 'PASSIVE')),
  official_user_id integer NOT NULL,
  created_at timestamp NOT NULL default now(),
  created_by integer,
  updated_at timestamp,
  updated_by integer
);

CREATE TABLE consultants (
  id serial PRIMARY KEY,
  consultant_type text NOT NULL,
  education text NOT NULL,
  career_information text NOT NULL,
  status text NOT NULL check (status in ('ACTIVE', 'PASSIVE')),
  user_id integer NOT NULL,
  created_at timestamp NOT NULL default now(),
  created_by integer,
  updated_at timestamp,
  updated_by integer
);

CREATE TABLE categories (
  id serial PRIMARY KEY,
  category_type text NOT NULL,
  description text NOT NULL,
  status text NOT NULL check (status in ('ACTIVE', 'PASSIVE')),
  created_at timestamp NOT NULL default now(),
  created_by integer,
  updated_at timestamp,
  updated_by integer
);

CREATE TABLE advertisements (
  id serial PRIMARY KEY,
  advertisement_title text NOT NULL,
  description text NOT NULL,
  price decimal(5,2) NOT NULL,
  currency text NOT NULL,
  status text NOT NULL check (status in ('ACTIVE', 'PASSIVE')),
  is_approved text NOT NULL,
  user_id integer NOT NULL,
  category_id integer NOT NULL,
  created_at timestamp NOT NULL default now(),
  created_by integer,
  updated_at timestamp,
  updated_by integer
);

CREATE TABLE roles (
  id serial PRIMARY KEY,
  role_name text NOT NULL,
  description text NOT NULL,
  created_at timestamp NOT NULL default now(),
  created_by integer,
  updated_at timestamp,
  updated_by integer
);

CREATE TABLE permissions (
  id serial PRIMARY KEY,
  permission_name text NOT NULL,
  role_id integer NOT NULL,
  created_at timestamp NOT NULL default now(),
  created_by integer,
  updated_at timestamp,
  updated_by integer
);

CREATE TABLE user_roles (
  id serial PRIMARY KEY,
  user_id integer NOT NULL,
  role_id integer NOT NULL,
  created_at timestamp NOT NULL default now(),
  created_by integer,
  updated_at timestamp,
  updated_by integer
);

ALTER TABLE companies ADD FOREIGN KEY (official_user_id) REFERENCES users (id);
CREATE INDEX ix_companies_official_user_id ON public.companies(official_user_id);

ALTER TABLE consultants ADD FOREIGN KEY (user_id) REFERENCES users (id);
CREATE INDEX ix_consultants_user_id ON public.consultants(user_id);


ALTER TABLE advertisements ADD FOREIGN KEY (user_id) REFERENCES users (id);
CREATE INDEX ix_advertisements_user_id ON public.advertisements(user_id);


ALTER TABLE advertisements ADD FOREIGN KEY (category_id) REFERENCES categories (id);
CREATE INDEX ix_advertisements_category_id ON public.advertisements(category_id);


ALTER TABLE permissions ADD FOREIGN KEY (role_id) REFERENCES roles (id);
CREATE INDEX ix_permissions_role_id ON public.permissions(role_id);


ALTER TABLE user_roles ADD FOREIGN KEY (role_id) REFERENCES roles (id);
CREATE INDEX ix_user_roles_role_id ON public.user_roles(role_id);


ALTER TABLE user_roles ADD FOREIGN KEY (user_id) REFERENCES users (id);
CREATE INDEX ix_user_roles_user_id ON public.user_roles(user_id);

CREATE UNIQUE INDEX uix_lower_users_username ON public.users(lower(username));
CREATE UNIQUE INDEX uix_lower_users_email ON public.users(lower(email));
CREATE UNIQUE INDEX uix_users_phone ON public.users(phone);


CREATE UNIQUE INDEX uix_companies_tax_number ON public.companies(tax_number);