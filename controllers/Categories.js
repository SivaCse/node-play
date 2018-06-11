import app from '../app';
import Category from '../models/Category';
import { ReqResHelper } from '../helpers/PromiseHandlers';

class Categories {
	constructor() {
		this.initRoute();
	}

	initRoute() {
		app.get('/categories',this.getCategories);
		app.post('/categories',this.saveCategory);
		app.put('/categories',this.updateCategory);
		app.delete('/categories',this.removeCategory);
	}

	async getCategories(req, res) {
		const result = await Category.find({});
		res.send(result);
	}

	async saveCategory(req, res) {
		const categ = new Category(req.body);
		await categ.save(ReqResHelper(req, res));
	}

	async updateCategory(req, res) {
		await Category.findByIdAndUpdate(req.body._id, req.body, ReqResHelper(req, res));
	}

	async removeCategory(req, res) {
		await Category.findByIdAndRemove(req.body._id, ReqResHelper(req, res));
	}

}

export default new Categories;
