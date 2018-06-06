import app from './app';

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

export default new App;
