<div class="my-container">
	<div class="my-container-content">
		<slot></slot>
	</div>
</div>

<style>
	.my-container {
		position: absolute;
		top: 0;
		left: 0px;
		width: 500%;
		height: 100vh;
		z-index: -1;
		background-color: black;
		color: white;
		overflow: visible;
	}
	.my-container-content {
		width: 80vw;
		max-height: 600px;
		margin-top: 130px;
		margin-left: 300px;
	}
</style>