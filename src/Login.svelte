
	<form method="POST" action="/login" class="box my-form">
		<div class="field">
			<label class="label">Name</label>
			<div class="control is-one-fifth">
				<input class="input" type="text" placeholder="Text input" />
			</div>
		</div>

		<div class="field">
			<label class="label" for="login_email">Email</label>
			<div class="control">
				<input
					id="login_email"
					class="input"	
					type="email"
					placeholder="Email input"
					value="hello@"
				/>
			</div>
		</div>

		<div class="field">
			<label class="label" for="password">Password</label>
			<div class="control">
				<input class="input" type="password" />
			</div>
		</div>

		<div class="field">
			<div class="control">
				Don't have an account? Click <a href="/signup">here</a>
			</div>
		</div>

		<div class="field is-grouped">
			<div class="control my-full-parent-size">
				<button class="button is-link is-fullwidth">Log In</button>
			</div>
		</div>
	</form>

<style>
	.my-form {
		width: 60%;
		height: 40%;
		margin: auto;
		margin-top: 100px;
		padding: 40px 60px;
		border: 1px solid red;
		background-color: #202020;
	}
	.my-full-parent-size {
		width: 100%;
	}
</style>
