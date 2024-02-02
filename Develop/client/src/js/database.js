import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const db = await openDB('jate', 1);
  const text = db.transaction('jate', 'readwrite');
  const store = text.objectStore('jate');
  const result = await store.put({content});
  console.log('Data was saved to the database!', result);
  await text.done;
  return result;
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await openDB('jate', 1); 
  const text = db.transaction('jate', 'readonly'); 
  const store = text.objectStore('jate'); 
  const result = await store.getAll(); 
  console.log('Data retrieved succesfully!', result);
  await text.done; 
  return result; 
};

initdb();
