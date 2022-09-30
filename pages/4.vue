<template>
	<section id="page-4">
		<h1 class="title">Structure</h1>
		<div class="container">
			<div class="circ">
				<h2>SVG's</h2>
				<a target="new" href="/_nuxt/assets/img/svgs.svg">
					<img src="~/assets/img/svgs.svg" />
				</a>
			</div>
			<div>
				<h2>Dash array</h2>
				<Strokes />
			</div>
			<div>
				<h2>Transforms</h2>
				<a target="new" href="/_nuxt/assets/img/dot-structure.png">
					<img src="~/assets/img/dot-structure.png" />
				</a>
			</div>
			<div>
				<h2>Make JS talk with CSS</h2>
				<a target="new" href="/_nuxt/assets/img/talking.png">
					<img src="~/assets/img/talking.png" />
				</a>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
	#page-4 {
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
