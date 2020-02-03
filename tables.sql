CREATE TABLE IF NOT EXISTS members (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT
);

DROP TABLE IF EXISTS expense;
CREATE TABLE IF NOT EXISTS expense (
    id SERIAL PRIMARY KEY,
    user_id TEXT,
    category TEXT,
    amount numeric(12, 2),
    description TEXT,
    time_entered TIMESTAMPTZ DEFAULT Now()
);

CREATE TABLE IF NOT EXISTS budget (
    id SERIAL PRIMARY KEY,
    user_id TEXT,
    budget INTEGER
);