import { Router } from 'express';
import RouteGroup from 'express-route-grouping';
const apiRoute = new RouteGroup('/api', Router());

apiRoute.group('/api', (api) => {
	api.resource({
		handlers: {
			/** GET : /api */
			index(req, res) {
				res.send('GET : /api');
			},
		},
	});
});
export default apiRoute;
