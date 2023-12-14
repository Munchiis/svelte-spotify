import type { LayoutServerLoad } from "./$types";
import { SPOTIFY_BASE_URL } from "$env/static/private"

export const load: LayoutServerLoad = async ({ cookies, fetch }) => {
    const accessToken = cookies.get('access_token');
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
    } else {
        return {
            user: null
        }
    }
}