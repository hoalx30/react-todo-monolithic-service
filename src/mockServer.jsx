import { createServer, Model } from 'miragejs';

const startServer = () => {
	createServer({
		models: {
			notes: Model,
		},
		routes() {
			this.urlPrefix = 'http://localhost:5173/api';

			this.get('/notes', (schema, req) => {
				return schema.all('notes');
			});
			this.get('/notes/:id', (schema, req) => {
				let id = req.params.id;
				return schema.find('notes', id);
			});
			this.post('/notes', (schema, req) => {
				let attrs = JSON.parse(req.requestBody);
				return schema.create('notes', attrs);
			});
			// @ts-ignore
			this.patch('/notes/:id', (schema, req) => {
				let newAttrs = JSON.parse(req.requestBody);
				let id = req.params.id;
				let old = schema.find('notes', id);
				return old.update(newAttrs);
			});
			// @ts-ignore
			this.delete('/notes/:id', (schema, req) => {
				let id = req.params.id;
				return schema.find('notes', id).destroy();
			});
		},
	});
};

export default startServer;
