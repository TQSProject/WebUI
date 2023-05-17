<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
</svelte:head>


<script>
	export let loggedIn = false;
</script>

<nav class="navbar my-height my-bg-red {loggedIn === true ? 'smaller' : ''}" aria-label="main navigation">
	<div class="navbar-brand">
		<a
			role="button"
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
			data-target="navbarBasicExample"
			href="https://bulma.io"
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</a>
	</div>

	<div id="navbarBasicExample" class="navbar-menu">
		<div class="navbar-start">
			<div class="text-4xl pt-4 mx-3 my-logo text-white">PickUs</div>
			<a class="navbar-item" href="/"> Home </a>
			<a class="navbar-item" href="/"> Team </a>
			<a class="navbar-item" href="/"> About Us</a>
			<a class="navbar-item" href="/"> Contact </a>

		</div>
	</div>
</nav>


<style>
	.smaller {
		margin-left: 250px;
	}
	.my-height {
		height: 80px;
	}
	.my-bg-red {
		background-color: #C41E3A;
	}
	.navbar-item {
		color: white;
	}
	.my-logo {
		font-family: 'Varela Round', sans-serif;
	}
</style>