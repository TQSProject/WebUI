<div class="my-form">
	<form method="POST" action="/login">
		<div class="field">
			<label class="label">Name</label>
			<div class="control">
				<input class="input" type="text" placeholder="Text input" />
			</div>
		</div>

		<div class="field">
			<label class="label">Username</label>
			<div class="control has-icons-left has-icons-right">
				<input class="input is-success" type="text" placeholder="Text input" value="bulma" />
				<span class="icon is-small is-left">
					<i class="fas fa-user" />
				</span>
				<span class="icon is-small is-right">
					<i class="fas fa-check" />
				</span>
			</div>
			<p class="help is-success">This username is available</p>
		</div>

		<div class="field">
			<label class="label" for="login_email">Email</label>
			<div class="control has-icons-left">
				<input
					id="login_email"
					class="input"
					type="email"
					placeholder="Email input"
					value="hello@"
				/>
				<span class="icon is-small is-left">
					<i class="fas fa-envelope" />
				</span>
			</div>
		</div>

		<div class="field">
			<label class="label">Subject</label>
			<div class="control">
				<div class="select">
					<select>
						<option>Select dropdown</option>
						<option>With options</option>
					</select>
				</div>
			</div>
		</div>

		<div class="field">
			<div class="control">
				<label class="checkbox">
					<input type="checkbox" />
					I agree to the <a href="#">terms and conditions</a>
				</label>
			</div>
		</div>

		<div class="field">
			<div class="control">
				<label class="radio">
					<input type="radio" name="question" />
					Yes
				</label>
				<label class="radio">
					<input type="radio" name="question" />
					No
				</label>
			</div>
		</div>

		<div class="field is-grouped">
			<div class="control">
				<button class="button is-link">Submit</button>
			</div>
			<div class="control">
				<button class="button is-link is-light">Cancel</button>
			</div>
		</div>
	</form>
</div>

<style>
	.my-form {
		width: 80%;
		height: 40%;
		margin: auto;
		margin-top: 100px;
		padding: 20px 40px;
		border: 1px solid red;
		background-color: white;
	}
</style>
