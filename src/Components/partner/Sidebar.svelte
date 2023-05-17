<aside class="menu">
	<ul class="menu-list">
		<li class="my-space-50"></li>
	</ul>
	<ul class="menu-list">
		<li class="my-link"><a href="/partner/dashboard">Dashboard</a></li>
		<li class="my-link"><a href="/partner/deliveries">Deliveries</a></li>
	</ul>
	<ul class="menu-list">
		<li>
			<a class="my-link" href="/">Manage Deliveries</a>
			<ul>
				<li class="my-link"><a href="/partner">New</a></li>
				<li class="my-link"><a href="/partner/cancelled">Canceled</a></li>
				<li class="my-link"><a href="/partner/">In progress</a></li>
				<li class="my-link"><a href="/partner/on_transport">In transportation</a></li>
				<li class="my-link"><a href="/partner">Delivered</a></li>
			</ul>
		</li>
		<li class="my-link"><a href="partner/dashboard">Analysis</a></li>
	</ul>
</aside>

<style>
    aside {
        position: absolute;
        height: 100%;
        top: 0;
    	width: 250px;
        background-color: #202020;
    }
    li a {
        color: white;
    }
    /**disable*/
    .menu-list a:hover {
        background-color: unset;
    }

    .my-link a {
        height: 50px;
    }
    .my-link:hover {
        color: #202020;
        background-color: #C41E3A;
    }
	.my-space-50 {
		height: 50px;
	}
</style>
