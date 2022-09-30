export default {
	methods: {
		count(start, end, duration, callback) {
			let startTimestamp = null;

			const step = (timestamp) => {
				if (!startTimestamp) startTimestamp = timestamp;
				const progress = Math.min((timestamp - startTimestamp) / duration, 1);
				const numbers = Math.floor(start + (end - start) * progress);

				callback(numbers);

				if (progress < 1) {
					window.requestAnimationFrame(step);
				}
			};
			window.requestAnimationFrame(step);
		}
	}
};
