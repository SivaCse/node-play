const app = require('../app');
const db = require('../db');

class Topics {
  constructor() {
    this.initRoute();
  }

  initRoute() {
    app.get('/topics',this.getTopics);
    app.post('/topics',this.saveTopics);
  }

  getTopics(req, res) {
    const topics = db.get('topics');
    topics.find({}).then((data)=>res.send(data));
  }

  saveTopics(req, res) {
    const topics = db.get('topics');
    topics.insert(req.body)
    .then(data => res.json(data))
    .catch(err => console.log('Error Topic Save', err));
  }

}

module.exports = new Topics;
