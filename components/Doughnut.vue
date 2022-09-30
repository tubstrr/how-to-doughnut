<template>
	<section class="doughnut">
		<div class="main">
			<svg class="full" width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M250 35.5082C131.539 35.5082 35.5081 131.539 35.5081 250C35.5081 368.46 131.539 464.492 250 464.492C368.46 464.492 464.492 368.46 464.492 250C464.492 131.539 368.46 35.5082 250 35.5082Z"
					stroke="white"
					stroke-width="68"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M250 37.5656C132.099 37.5656 36.5211 133.143 36.5211 251.044C36.5211 368.945 132.099 464.523 250 464.523C367.901 464.523 463.479 368.945 463.479 251.044C463.479 133.143 367.901 37.5656 250 37.5656Z"
					stroke="#B6B6B6"
					stroke-width="8"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-dasharray="1 47"
				/>
			</svg>

			<svg
				class="full percentage"
				viewbox="0 0 100 100"
				width="500"
				height="500"
				:style="`--percentage:0.${info.percentage};`"
				:class="info.direction"
			>
				<circle cx="250" cy="250" r="215" />
				<defs>
					<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stop-color="#AE8DFF" />
						<stop offset="100%" stop-color="#478BFF" />
					</linearGradient>
				</defs>
			</svg>

			<div class="dot-wrapper full" :style="`--percentage: ${cheatNum};`" :class="info.direction">
				<span class="dot" />
			</div>

			<span class="full center text-inner">{{ cheatNum }}%</span>
		</div>
		<strong class="title" v-if="info.title">{{ info.title }}</strong>
	</section>
</template>

<script>
	import count from "~/mixins/count";

	export default {
		props: ["data"],
		mixins: [count],

		data() {
			return {
				info: {}
			};
		},

		computed: {
			cheatNum() {
				const num = Math.floor(this.info.percentage);
				if (num === 99) return 100;
				return num;
			},
			type() {
				if (this.data?.type === "vs") return "vs";
				else return "default";
			},
			hasAnimations() {
				return this.data?.animation;
			}
			// per() {
			//     return 100
			// }
		},
		methods: {
			updatePercentage(percentage) {
				const newVal = percentage.toString().padStart(2, "0");
				if (newVal == 100) this.info.percentage = 99.9999;
				else this.info.percentage = newVal;
			}
		},

		watch: {
			data: {
				handler(val) {
					if (this.info.direction !== val.direction) this.info.direction = val.direction;
					this.count(0, val.percentage, val.animation.duration, this.updatePercentage);
				},
				deep: true
			}
		},

		mounted() {
			this.info = {
				percentage: 0,
				direction: this.data.direction,
				type: this.data.type
			};
			setTimeout(() => {
				this.count(0, this.data.percentage, this.data.animation.duration, this.updatePercentage);
			}, this.data.animation.delay);
		}
	};
</script>

<style lang="scss" scoped>
	.doughnut {
		.main {
			width: 500px;
			height: 500px;
			position: relative;
			margin: 0 80px;

			.full {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
			--pie: 3.124;
			--radius: 215px;
			--circ: calc(2 * var(--pie) * var(--radius));

			.percentage {
				display: flex;
				justify-content: center;
				align-items: center;
				background: transparent;
				fill: transparent;
				stroke: url(#gradient);
				stroke-width: 70px;
				stroke-linecap: round;
				transform: rotate(-90deg);
				transform-origin: center;
				stroke-dasharray: calc(var(--circ) * var(--percentage)), var(--circ);

				&.left {
					transform: rotate(90deg) rotateY(180deg);
				}
			}
			.dot-wrapper {
				--degrees: calc((360 * var(--percentage)) / 100);
				--position: calc(var(--degrees) * 1deg);

				transform: rotate(var(--position));

				.dot {
					height: 50px;
					width: 50px;
					background: white;
					display: block;
					position: absolute;
					top: 0;
					left: 50%;
					transform: translate3d(calc(-50% - 5px), 10px, 0);
					border-radius: 50%;
				}

				&.left {
					--position: calc(var(--degrees) * -1deg);
					.dot {
						transform: translate3d(calc(-50% + 5px), 10px, 0);
					}
				}
			}

			.center {
				font-size: 90px;
				font-weight: 300;
				display: flex;
				justify-content: center;
				align-items: center;

				&.vs {
					color: var(--gray);
				}
			}
		}
		.title {
			font-size: 32px;
			width: 100%;
			text-align: center;
			text-transform: uppercase;
			margin-top: 32px;
			display: inline-block;
			font-weight: bold;
		}
	}
</style>
