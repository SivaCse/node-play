import monk from 'monk';
const db = monk('localhost/Notes');

export default db;
