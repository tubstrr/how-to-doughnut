<template>
	<nav id="nav">
		<NuxtLink :to="prev"><icons-left /></NuxtLink>
		<NuxtLink :to="next"><icons-right /></NuxtLink>
	</nav>
</template>

<script setup>
	// Data
	const route = useRoute();
	const pageID = ref(null);
	const max = 5;

	// Methods
	const updatePageID = (value) => {
		if (value === "index") pageID.value = value;
		else pageID.value = parseInt(value);
	};

	// Computed
	const next = computed(() => {
		if (pageID.value === null) return false;
		if (pageID.value === "index") return "/1";
		if (pageID.value === max) return "/";
		return `/${pageID.value + 1}`;
	});

	const prev = computed(() => {
		if (pageID.value === null) return false;
		if (pageID.value === "index") return `/${max}`;
		if (pageID.value === 1) return "/";
		console.log(`🚀 ~ pageID.value`, pageID.value);
		return `/${pageID.value - 1}`;
	});

	// Mounted
	updatePageID(route.name);

	// Watchers
	watch(route, (value) => {
		updatePageID(value.name);
	});
</script>

<style lang="scss">
	#nav {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100px;
		background: var(--white);
		display: flex;
		align-items: center;
		justify-content: center;

		a {
			background: var(--black);
			padding: 0.5em;
			border-radius: 0.3em;
			transition: 275ms ease-in-out;

			+ a {
				margin-left: 1em;
			}

			svg {
				height: 2em;
				width: 2em;
				fill: var(--white);
				transition: 275ms ease-in-out;
			}
			&:hover {
				svg {
					fill: var(--blue);
				}
				transform: scale(1.1);
			}
		}
	}
</style>
