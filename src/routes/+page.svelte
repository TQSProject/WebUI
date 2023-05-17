<script>
	/** @type {import('@sveltejs/adapter-vercel').Config} */
	export const config = {
    	runtime: 'nodejs18.x'
	};
    import Login from "../Login.svelte";
	import Navbar from "../Navbar.svelte";
	import Wallpaper from "../Wallpaper.svelte";

</script>

<Navbar loggedIn={false}/>
<Wallpaper />
<Login />
