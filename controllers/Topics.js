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
		const result = await Topic.find({ categoryId:'5b1e1bc9df9c7e852002c122' });
		res.send(result);
	}

	async saveTopic(req, res) {
		const topic = new Topic(req.body);
		await topic.save(ReqResHelper(req, res));
	}

	async updateTopic(req, res) {
		await Topic.findByIdAndUpdate(req.body._id, req.body, ReqResHelper(req, res));
	}

	async removeTopic(req, res) {
		await Topic.findByIdAndRemove(req.body._id, ReqResHelper(req, res));
	}

}

export default new Topics;
