import { Router } from 'express';
import RouteGroup from 'express-route-grouping';
const route = new RouteGroup('/', Router());
/** products route */
route.group('products', (product) => {
	product.resource({
		handlers: {
			index(req, res) {
				res.send('GET: /products');
			},
		},
	});
});
/** items route */
route.group('items', (items) => {
	items.resource({
		handlers: {
			index(req, res) {
				res.send('GET: /items');
			},
		},
	});
});
export default route;
