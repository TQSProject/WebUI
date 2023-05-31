<aside class="menu">
	<ul class="menu-list">
		<li class="my-space-50"></li>
	</ul>
	<ul class="menu-list">
		<li class="my-link"><a href="/admin/dashboard">Dashboard</a></li>
		<li class="my-link"><a href="/admin/delivery">Specific Delivery</a></li>
	</ul>
	<ul class="menu-list">
		<li>
			<a class="my-link" href="/">Manage Deliveries</a>
			<ul>
				<li class="my-link"><a href="/admin/new">New</a></li>
				<li class="my-link"><a href="/admin/on_transport">In transportation</a></li>
				<li class="my-link"><a href="/admin/progress">Ready for Client to pick up</a></li>
				<li class="my-link"><a href="/admin/finished">Delivered</a></li>
				<li class="my-link"><a href="/admin/returned">Returned</a></li>
				<li class="my-link"><a href="/admin/cancelled">Cancelled</a></li>
			</ul>
		</li>
		<li>
			<a class="my-link" href="/">Manage PickUp Points</a>
			<ul>
				<li class="my-link"><a href="/admin/allpartners">See All</a></li>
				<li class="my-link"><a href="/admin/pendingpartners">Pending requests</a></li>
				<li class="my-link"><a href="/admin/nearme">Search in area</a></li>
			</ul>
		</li>
		<li class="my-link"><a href="/admin/statistics">Statistics</a></li>
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
