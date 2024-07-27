import { db } from '../db';

export async function getOrganizationsById(id: string) {
	try {
		const data = db.organizations.findUnique({
			where: { id },
		});
		return data;
	} catch {
		return null;
	}
}
export async function getOrganizationsByEmail(email: string) {
	try {
		const data = db.organizations.findFirst({
			where: { email },
		});
		return data;
	} catch {
		return null;
	}
}
