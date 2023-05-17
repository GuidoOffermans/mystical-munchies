import type { Actions } from '../../../../.svelte-kit/types/src/routes';
import { redirect } from '@sveltejs/kit';

export const actions = {
	register: async ({ locals, request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]) as {
			email: string;
			password: string;
			passwordConfirm: string;
		};

		try {
			await locals.pb.collection('users').create(data);
			await locals.pb.collection('users').authWithPassword(data.email, data.password);
		} catch (error) {
			throw error;
		}

		throw redirect(303, '/');
	}
} satisfies Actions;
