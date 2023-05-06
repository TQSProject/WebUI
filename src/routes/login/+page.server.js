/** @type {import('./$types').Actions} */
import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async () => {
        // TODO log the user in
        console.log("Here");
        await new Promise(r => setTimeout(r, 2000));

        //if (url.searchParams.has('redirectTo')) {
		throw redirect(303, '/dashboard');
		//}
    }
};