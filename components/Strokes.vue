<template>
	<section id="strokes">
		<span>Solid</span>
		<svg description="solid" viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
			<!-- No dashes nor gaps -->
			<line x1="0" y1="1" x2="300" y2="1" stroke="black" />
		</svg>
		<span>Dash Array: 10</span>
		<svg description="10" viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
			<!-- No dashes nor gaps -->
			<line x1="0" y1="1" x2="300" y2="1" stroke="black" stroke-dasharray="10" />
		</svg>
		<span>Dash Array: 10 5</span>
		<svg description="10 5" viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
			<!-- No dashes nor gaps -->
			<line x1="0" y1="1" x2="300" y2="1" stroke="black" stroke-dasharray="10 5" />
		</svg>
		<span>Dash Array: 10 5 5 20</span>
		<svg description="10 5 5 20" viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
			<!-- No dashes nor gaps -->
			<line x1="0" y1="1" x2="300" y2="1" stroke="black" stroke-dasharray="10 5 5 20" />
		</svg>
	</section>
</template>

<style lang="scss">
	#strokes {
		span {
			display: block;
			font-size: 0.75em;
			margin-top: 0.5em;
			margin-bottom: -0.5em;
			font-style: italic;
		}
	}
</style>
