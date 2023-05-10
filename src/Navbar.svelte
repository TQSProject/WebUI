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
			<a class="navbar-item" href="/"> Home </a>

			<a class="navbar-item" href="https://bulma.io"> Documentation </a>

			<a class="navbar-item" href="https://bulma.io"> About </a>
			
			<a class="navbar-item" href="https://bulma.io"> Jobs </a>
			
			<a class="navbar-item" href="https://bulma.io"> Contact </a>

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
</style>