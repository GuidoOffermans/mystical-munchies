import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';
import { building } from '$app/environment';

const publicPaths = ['/login', '/register'];

export const handle = (async ({ event, resolve }) => {
	if (building) {
		return resolve(event); // bailing here allows the 404 page to build
	}
	
	event.locals.pb = pb;
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	try {
		// get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
		event.locals.pb.authStore.isValid &&
			(await event.locals.pb.collection('users').authRefresh());
	} catch (_) {
		console.log(event);
		// clear the auth store on failed refresh
		event.locals.pb.authStore.clear();
	}

	event.locals.user = structuredClone(pb.authStore.model);
	console.log(event.locals.user);

	if (!publicPaths.includes(event.url.pathname) && !event.locals.user) {
		throw redirect(303, '/login');
	}

	const response = await resolve(event);

	// send back the default 'pb_auth' cookie to the client with the latest store state
	response.headers.append(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({ httpOnly: false })
	);

	return response;
}) satisfies Handle;
