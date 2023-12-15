import type { LayoutServerLoad } from "./$types";
import { SPOTIFY_BASE_URL } from "$env/static/private"
import { redirect } from "@sveltejs/kit";

export const load: LayoutServerLoad = async ({ cookies, fetch, url }) => {
    const accessToken = cookies.get('access_token');
    const refreshToken = cookies.get('refresh_token');
    if (!accessToken) {
        return {
            user: null
        }
    }

    const profileResponse = await fetch(`${SPOTIFY_BASE_URL}/me`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

    if (profileResponse.ok) {
        const profile: SpotifyApi.CurrentUsersProfileResponse = await profileResponse.json();
        return {
            user: profile
        }
    } if (profileResponse.status === 401 && refreshToken) {
        //refresh the token and try again
        const refreshRes = await fetch('/api/auth/refresh');
        if ( refreshRes.ok ) {
            throw redirect(307, url.pathname )
        }
    } else {
        return {
            user: null
        }
    }
}