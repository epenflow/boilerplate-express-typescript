import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
import RouteGroup from 'express-route-grouping';
import { OrganizationsController } from '../controllers/organizations-controller';
const route = new RouteGroup('/', Router());
const db = new PrismaClient();
/** products route */
route.group('organizations', async (organizations) => {
	organizations.resource({
		handlers: new OrganizationsController(),
	});
});
export default route;
