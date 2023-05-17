import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

const publicRoutes = ['/login', '/register', '/forgot-password', '/reset-password'];
export const load = ((ctx) => {
	if (ctx.route.id) {
		if (!ctx.locals.user && !publicRoutes.includes(ctx.route.id)) {
			throw redirect(307, '/login');
		}
	}
	return { user: ctx.locals.user };
}) satisfies LayoutServerLoad;
