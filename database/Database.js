import * as SQLite from 'expo-sqlite/legacy';

export const DatabaseConnection = {
    getConnection: () => SQLite.openDatabase('database.db')
}