// import * as SQLite from 'expo-sqlite/legacy';

// export const DatabaseConnection = {
//     getConnection: () => SQLite.openDatabase('database.db')
// }
import * as SQLite from 'expo-sqlite/legacy';

const db = SQLite.openDatabase('database.db');

// Create a table if it does not exist
export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      );`
    );
  });
};

// Function to get the database connection
export const DatabaseConnection = {
  getConnection: () => db,
  createTable: () => createTable(),
};