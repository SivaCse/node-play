import app from '../app';
import Note from '../models/Note';
import { ReqResHelper } from '../helpers/PromiseHandlers';

class Notes {
	constructor() {
		this.initRoute();
	}

	initRoute() {
		app.get('/notes',this.getNotes);
		app.post('/notes',this.saveNote);
		app.put('/notes',this.updateNote);
		app.delete('/notes',this.removeNote);
	}

	async getNotes(req, res) {
		const result = await Note.find({});
		res.send(result);
	}

	async saveNote(req, res) {
		const note = new Note(req.body);
		await note.save(ReqResHelper(req, res));
	}

	async updateNote(req, res) {
		await Note.findByIdAndUpdate(req.body._id, req.body, ReqResHelper(req, res));
	}

	async removeNote(req, res) {
		await Note.findByIdAndRemove(req.body._id, ReqResHelper(req, res));
	}

}

export default new Notes;
