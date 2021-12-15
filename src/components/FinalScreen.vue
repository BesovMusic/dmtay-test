<template>
	<div class="finalWrapper">
		<div class="card mt-2 shadow-sm">
			<div class="card-body">
				<h5 class="card-title">Final</h5>
				<p class="card-text">Correct answers:</p>
				<button class="btn btn-primary" @click="answerSelected">
					Retry
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FinalScreen',
};
</script>

<style lang="scss">
.finalWrapper {
	position: absolute;
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	height: 100vh;
	width: 100%;
	z-index: 2;
	background: #fff;
	top: 0;
	left: 0;
}
</style>
