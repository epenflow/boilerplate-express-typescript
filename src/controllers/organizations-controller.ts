import { Controller } from './controller';
import { Request, Response, NextFunction } from 'express';
import { db } from '../libs/db';
import bcrypt from 'bcrypt';
import { getOrganizationsById } from '../libs/data/organizations';
export class OrganizationsController extends Controller {
	async index(req: Request, res: Response, next: NextFunction) {
		const data = await db.organizations.findMany();
		res.json({
			success: true,
			message: 'Here is all organizations',
			data: data,
		});
	}
	async create?(req: Request, res: Response, next: NextFunction) {
		const { name, email, password } = await req.body;
		const emailToLowerCase = (email as string).toLowerCase();
		const hashPassword = await bcrypt.hash(password, 10);
		const getEmail = await db.organizations.findUnique({
			where: { email: emailToLowerCase },
		});
		console.log(email);
		if (getEmail) {
			res.json({
				success: false,
				message: `Email: ${getEmail.email} already exist in database`,
				data: null,
			});
		}
		const data = await db.organizations.create({
			data: {
				name,
				email: emailToLowerCase,
				password: hashPassword,
			},
		});

		res.json({
			success: true,
			message: `Organization created`,
			data,
		});
	}
	async find?(req: Request, res: Response, next: NextFunction) {
		const { organizationId } = req.params;

		const organization = await getOrganizationsById(organizationId);
		if (!organization) {
			res.json({
				success: false,
				message: "Organization doesn't available on database",
				data: null,
			});
		}
		res.json({
			success: true,
			message: 'Here is your organizations',
			data: organization,
		});
	}
	update?(req: Request, res: Response, next: NextFunction) {
		throw new Error('Method not implemented.');
	}
	patch?(req: Request, res: Response, next: NextFunction) {
		throw new Error('Method not implemented.');
	}
	async delete?(req: Request, res: Response, next: NextFunction) {
		const { organizationId } = req.params;
		const data = await db.organizations.delete({
			where: { id: organizationId },
		});
		res.json({
			success: true,
			message: 'Delete organization successfully',
			data: data,
		});
	}
}
