## Getting started

### Backend

- Create a new database
- Create the Excuse table

```sql
CREATE TABLE excuses(id SERIAL PRIMARY KEY, http_code INTEGER NOT NULL, tag TEXT NOT NULL, message TEXT NOT NULL);
```

- Insert some data

```sql
INSERT INTO excuses(http_code, tag, message) values (701, 'Inexcusable', 'Meh');
INSERT INTO excuses(http_code, tag, message) values (702, 'Inexcusable', 'Emacs');
INSERT INTO excuses(http_code, tag, message) values (703, 'Inexcusable', 'Explosion');
```

- Copy the `.env.example` to create a new file `.env` and change the database config.
- Install the dependencies:

```bash
npm install
```

### Frontend

- Install the dependencies:

```bash
npm install
```

## Running the app

Run the backend:

```bash
npm run dev
```

Run the frontend:

```bash
npm start
```

The frontend will be available at: http://localhost:3000/

And the backend will be available at: http://localhost:4000/

Both the app and api restart on code change.
