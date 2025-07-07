// userStorage.js
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Визначаємо __dirname в ES6-модулі
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const USERS_FILE = path.join(__dirname, 'users.json');

// Завантаження користувачів
export const loadUsers = async () => {
  try {
    await fs.access(USERS_FILE);
  } catch {
    await fs.writeFile(USERS_FILE, JSON.stringify([]));
  }

  const data = await fs.readFile(USERS_FILE, 'utf-8');
  if (!data.trim()) {
    fs.writeFile(USERS_FILE, JSON.stringify([]));
    return [];
  }

  try {
    return JSON.parse(data);
  } catch (error) {
    console.error('Файл users.json пошкоджено. Перезаписую...');
    fs.writeFile(USERS_FILE, JSON.stringify([]));
    return [];
  }
};

// Збереження користувача, якщо ще не збережено
export const saveUser = async (chatId) => {
  const users = await loadUsers();
  if (!users.includes(chatId)) {
    users.push(chatId);
    await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
  }
};
