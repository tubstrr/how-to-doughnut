<template>
	<section id="page-2">
		<h1 class="title">Key Concepts</h1>
		<div class="container">
			<ol>
				<li class="list-item">
					Math
					<ul>
						<li>Get circumference in pixels</li>
						<li>Convert % into degree's</li>
						<li>Kill a bug</li>
					</ul>
				</li>
				<li class="list-item">
					Structure
					<ul>
						<li>SVG's</li>
						<li>Dash array</li>
						<li>Transforms</li>
						<li>Make JS talk with CSS</li>
					</ul>
				</li>
				<li class="list-item">Animation</li>
			</ol>
		</div>
	</section>
</template>

<style lang="scss">
	#page-2 {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.title {
			position: fixed;
			top: 1rem;
			left: 1rem;
		}

		ol {
			list-style-type: space-counter;
			padding-left: 1em;
			> li {
				font-weight: 900;
				margin-top: 1em;

				ul {
					list-style-type: disc;
					padding-left: 1em;
					> li {
						font-weight: 400;
					}
				}
			}
		}
	}
	@counter-style space-counter {
		symbols: "\1F680""\1F6F8""\1F6F0""\1F52D";
		suffix: " ";
	}
</style>
