<template>
	<main>
		<NuxtPage />
		<Navigation />
	</main>
</template>

<!-- <script setup>
	definePageMeta({ pageTransition: "simple" });
</script> -->

<style lang="scss">
	@import "@/assets/styles/destyle.scss";
	@import "@/assets/styles/type.scss";
	@import "@/assets/styles/animations.scss";

	:root {
		--blue: #3d6fb1;
		--white: #edeeef;
		--gray: #adadad;
		--black: #1a2330;
	}
	html,
	body,
	main {
		background: var(--white);
		min-width: 100vw;
		min-height: 100vh;

		h1 {
			font-size: 2rem;
		}
		h2 {
			font-size: 1.5rem;
		}
		h3 {
			font-size: 1.25rem;
		}
		h4 {
			font-size: 1rem;
		}
	}
</style>
