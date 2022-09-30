<template>
	<section id="page-3">
		<h1 class="title">Math</h1>
		<div class="container">
			<div class="circ">
				<h2>Circumference in pixels</h2>
				<a target="new" href="/_nuxt/assets/img/circ.png">
					<img src="~/assets/img/circ.png" />
				</a>
			</div>
			<div>
				<h2>% into Degree's</h2>
				<a target="new" href="/_nuxt/assets/img/dot.png">
					<img src="~/assets/img/dot.png" />
				</a>
			</div>
			<div>
				<h2>Kill a bug</h2>
				<a target="new" href="/_nuxt/assets/img/bug.png">
					<img src="~/assets/img/bug.png" />
				</a>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
	#page-3 {
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
			grid-template-columns: 1fr 1fr 1fr;
			align-content: flex-start;
			gap: 3em;
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
