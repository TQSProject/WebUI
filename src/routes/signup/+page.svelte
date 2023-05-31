<script>

	import Login from "../../Login.svelte";
	import Navbar from "../../Navbar.svelte";
	import Wallpaper from "../../Wallpaper.svelte";

    let city = '';
    let name = '';
    let email = '';
    let password1 = '';
    let password2 = '';
    let result = '';

	async function newacp() {
        const res = await fetch('http://localhost:8080/api/v1/acps', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "city": city,
                "name": name
            })
        })
        
        const json = await res.json()
        result = JSON.stringify(json)
        console.log(result);

        //window.location.href = '/admin/allpartners';
    }
</script>


<Navbar loggedIn={false}/>
<Wallpaper />
<form class="box my-form">
    <div class="field">
        <label class="label my-label" for="signup_name">Name</label>
        <div class="control">
            <input class="input" type="text" id="signup_name" placeholder="Text input" bind:value={name} />
        </div>
    </div>

    <div class="field">
        <label class="label my-label" for="signup_city">City</label>
        <div class="control">
            <input class="input" type="text" id="signup_city" placeholder="Text input" bind:value={city} />
        </div>
    </div>

    <div class="field">
        <label class="label my-label" for="login_email">Email</label>
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
        <label class="label my-label" for="signup_password1">Password</label>
        <div class="control">
            <input class="input" type="password" />
        </div>
    </div>

    <div class="field">
        <label class="label my-label" for="signup_password2">Repeat Password</label>
        <div class="control">
            <input class="input" type="password" />
        </div>
    </div>

    <div class="field">
        <div class="control">
            <label class="checkbox">
                <input type="checkbox" />
                I agree to the <a href="">terms and conditions</a>
            </label>
        </div>
    </div>

    <div class="field is-grouped">
        <div class="control">
            <button class="button is-link" on:click={newacp}>Submit</button>
        </div>
        <div class="control">
            <button class="button is-link is-light"><a href="/">Cancel</a></button>
        </div>
    </div>
</form>

<style>
    .my-form {
        width: 60%;
        height: 40%;
        margin: auto;
        margin-top: 100px;
        padding: 20px 40px;
        border: 1px solid red;
        background-color: #202020;
    }
    .my-label {
		color: #b0b0b0;
	}
</style>