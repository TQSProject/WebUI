/** @type {import('./$types').Actions} */
import { redirect } from '@sveltejs/kit';

export const actions = {
    acp: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        console.log(data);
        console.log(email, password);

        // TODO log the user in
        await new Promise(r => setTimeout(r, 1500));
        console.log(email, password);
        
        //if (url.searchParams.has('redirectTo')) {
		throw redirect(303, '/partner/dashboard');
		//}
    },
    admin: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        // TODO log the user in
        await new Promise(r => setTimeout(r, 1500));
        console.log(email, password);
        
        //if (url.searchParams.has('redirectTo')) {
		throw redirect(303, '/admin/dashboard');
		//}
    }
};