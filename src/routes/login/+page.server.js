// @ts-nocheck
/** @type {import('./$types').Actions} */
import { redirect } from '@sveltejs/kit';
//import { acp_name } from "$lib/vars";

export const actions = {
    acp: async ({ request }) => {
        //console.log("acp_name", acp_name);
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        console.log(data);
        console.log(email, password);

        // async () => {
        //     fetch("http://localhost:8080/api/v1/orders?status=DELIVERING")
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //         //apiData.set(data);
        //         //orders = data;
        //         //total = orders.length
        //     }).catch(error => {
        //         console.log(error);
        //         return [];
        //     });
        // }

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