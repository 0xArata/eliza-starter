-- Begin transaction
BEGIN;

-- Drop tables in correct order (respecting foreign key constraints)
DROP TABLE IF EXISTS relationships CASCADE;
DROP TABLE IF EXISTS participants CASCADE;
DROP TABLE IF EXISTS logs CASCADE;
DROP TABLE IF EXISTS goals CASCADE;
DROP TABLE IF EXISTS memories CASCADE;
DROP TABLE IF EXISTS rooms CASCADE;
DROP TABLE IF EXISTS accounts CASCADE;

-- Drop functions
DROP FUNCTION IF EXISTS get_embedding_dimension();

-- Drop extensions (optional, commented out as they might be used by other databases)
-- DROP EXTENSION IF EXISTS vector;
-- DROP EXTENSION IF EXISTS fuzzystrmatch;
-- DROP EXTENSION IF EXISTS pgcrypto;

-- Drop schema (optional, commented out as it might be used by other databases)
-- DROP SCHEMA IF EXISTS extensions;

COMMIT;