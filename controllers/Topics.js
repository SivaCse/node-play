import app from '../app';
import Topic from '../models/Topic';
import { ReqResHelper } from '../helpers/PromiseHandlers';

class Topics {
  constructor() {
    this.initRoute();
  }

  initRoute() {
    app.get('/topics',this.getTopics);
    app.post('/topics',this.saveTopic);
    app.put('/topics',this.updateTopic);
    app.delete('/topics',this.removeTopic);
  }

  async getTopics(req, res) {
    const result = await Topic.find({});
    res.send(result);
  }

  async saveTopic(req, res) {
    const topic = new Topic(req.body);
    const result = await topic.save(ReqResHelper(req, res));
  }

  async updateTopic(req, res) {
    const topic = await Topic.findByIdAndUpdate(req.body._id, req.body, ReqResHelper(req, res));
  }

  async removeTopic(req, res) {
    const topic = await Topic.findByIdAndRemove(req.body._id, ReqResHelper(req, res));
  }

}

export default new Topics;
