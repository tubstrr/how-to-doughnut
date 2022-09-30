<template>
	<section id="page-5">
		<h1 class="title">Animation</h1>
		<div class="container">
			<span></span>
			<div>
				<h2>Mount</h2>
				<a target="new" href="/_nuxt/assets/img/mount.png">
					<img src="~/assets/img/mount.png" />
				</a>
			</div>
			<div class="circ">
				<h2>Count</h2>
				<a target="new" href="/_nuxt/assets/img/count.png">
					<img src="~/assets/img/count.png" />
				</a>
			</div>
			<span></span>
		</div>
	</section>
</template>

<style lang="scss">
	#page-5 {
		height: 100vh;
		display: flex;
		align-items: center;

		.title {
			position: fixed;
			top: 1rem;
			left: 1rem;
		}

		.container {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			align-content: flex-start;
			gap: 2em;
			box-sizing: border-box;
			padding: 0 3em;

			div {
				width: 100%;
				img {
					margin-top: 0.5em;
					max-width: 100%;
				}
				+ div {
					// margin-left: 1em;
				}
			}
		}
	}
</style>
