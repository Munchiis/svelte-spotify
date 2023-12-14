import { redirect } from "@sveltejs/kit";
import type { LayoutData } from "./$types";


export const load = ({ url, data }: { url: URL; data: LayoutData }) => {
	const { user } = data || {};
	if (user && url.pathname === '/login') {
		throw redirect(307, '/');
	}
	if (!user && url.pathname !== '/login') {
		throw redirect(307, '/login');
	}

	return {
		user
	};
};
