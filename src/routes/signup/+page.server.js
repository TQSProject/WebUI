/** @type {import('./$types').Actions} */
import { redirect } from '@sveltejs/kit';

export const actions = {
    // @ts-ignore
    default: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        console.log(email, password);
        // TODO sign up the user
        console.log("Here");
        await new Promise(r => setTimeout(r, 2000));

        //if (url.searchParams.has('redirectTo')) {
		throw redirect(303, '/');
		//}
    }
};