<template>
	<section id="page-1">
		<h1>Like this</h1>
		<Doughnut :data="doughnut" />
		<section class="options">
			<div class="rangeHolder percentage" :style="`--label: 'Percentage: ${doughnut.percentage}%'`">
				<span class="min">0</span>
				<input v-model.lazy="doughnut.percentage" type="range" min="0" max="100" />
				<span class="max">100</span>
			</div>
			<div class="rangeHolder duration" :style="`--label: 'Duration: ${doughnut.animation.duration}ms'`">
				<span class="min">16ms</span>
				<input v-model.lazy="doughnut.animation.duration" type="range" min="16" max="2000" />
				<span class="max">2s</span>
			</div>
			<div class="rangeHolder direction" :style="`--label: 'Direction: ${doughnut.direction}'`">
				<div>
					<input v-model.lazy="doughnut.direction" type="radio" id="right" name="direction" value="right" />
					<label for="right">Right</label>
				</div>
				<div>
					<input v-model.lazy="doughnut.direction" type="radio" id="left" name="direction" value="left" />
					<label for="left">Left</label>
				</div>
			</div>
		</section>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				doughnut: {
					percentage: 20,
					direction: "right",
					animation: {
						delay: 500,
						duration: 750
					}
				}
			};
		}
	};
</script>

<style lang="scss">
	#page-1 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;

		h1 {
			margin-bottom: 1.2em;
		}
		.options {
			position: fixed;
			top: 0;
			left: 0;
			background: white;
			padding: 1.2em;
			height: 100vh;
			z-index: 2;

			.rangeHolder {
				margin-top: 2em;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				position: relative;

				+ .rangeHolder {
					margin-top: 3em;
				}
				&.direction {
					flex-direction: column;
					justify-content: flex-start;
					align-items: flex-start;
					> div {
						margin-bottom: 0.25em;
						label {
							margin-left: 0.5em;
						}
					}
				}
				&::before {
					content: var(--label);
					position: absolute;
					bottom: 100%;
					font-weight: bold;
				}

				input[type="range"] {
					margin: 0 1em;
					&::-webkit-slider-runnable-track {
						background: white;
						border-radius: 1em;
						border: 1px solid var(--black);
						padding: 0.2em;
					}
				}
			}
		}
	}
</style>
