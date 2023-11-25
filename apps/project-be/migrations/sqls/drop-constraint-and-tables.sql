/* Replace with your SQL commands */

------------------------------------------------------------------------------------------------------------------------

---DROP ALL CONSTRAINTS
CREATE
OR REPLACE FUNCTION drop_all_constraints()
RETURNS void AS $$
DECLARE
table_rec RECORD;
    constraint_rec
RECORD;
    sql_query
TEXT;
BEGIN
FOR table_rec IN (SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_type = 'BASE TABLE') LOOP
        FOR constraint_rec IN (SELECT constraint_name FROM information_schema.constraint_table_usage WHERE table_name = table_rec.table_name) LOOP
            sql_query := 'ALTER TABLE ' || table_rec.table_name || ' DROP CONSTRAINT ' || constraint_rec.constraint_name || ' CASCADE';

BEGIN
EXECUTE sql_query;
EXCEPTION
                WHEN OTHERS THEN
                    CONTINUE;
END;
END LOOP;
END LOOP;
END;
$$
LANGUAGE plpgsql;

SELECT drop_all_constraints();

------------------------------------------------------------------------------------------------------------------------

---DROP ALL TABLES
CREATE
OR REPLACE FUNCTION drop_all_tables()
RETURNS void AS $$
DECLARE
table_name text;
BEGIN
FOR table_name IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
        EXECUTE 'DROP TABLE IF EXISTS "' || table_name || '" CASCADE;';
END LOOP;
END;
$$
LANGUAGE plpgsql;

SELECT drop_all_tables();
