import { redirect } from "@sveltejs/kit";
import type { Actions } from './$types';

export const actions = {
	default: async ({ locals }) => {
		console.log('logout');
		locals.pb.authStore.clear();
		locals.user = null;
		throw redirect(303, '/login');
	}
} satisfies Actions;
