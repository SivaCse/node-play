const app = require('./app');
const index = require('./index');
const topics = require('./controllers/Topics');

app.listen(3000, ()=>{
  console.log('Server is Running on 3000')
});
