import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = ((ctx) => {
	if (ctx.route.id) {
		if (ctx.locals.user) {
			throw redirect(307, '/');
		}
	}
}) satisfies PageServerLoad;

export const actions = {
	login: async ({ request, locals }) => {
		const fromData = await request.formData();
		const data = Object.fromEntries([...fromData]) as {
			email: string;
			password: string;
		};

		try {
			await locals.pb.collection('users').authWithPassword(data.email, data.password);
		} catch (error) {
			console.log(error);
			throw error;
		}

		throw redirect(303, '/');
	}
} satisfies Actions;
