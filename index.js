const app = require('./app');

class App {
  constructor() {
    this.initApp();
  }

  greeting(req, res) {
    res.send('Hello World');
  }

  initApp() {
    app.get('/', this.greeting);
  }

}

module.exports = new App;
