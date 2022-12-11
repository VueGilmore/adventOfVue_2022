<template>
	<div class="text-center">
		<div class="hero">
			<div class="hero-content flex-col lg:flex-row">
				<img src="../../public/tennis.jpg" class="max-w-sm rounded-lg shadow-2xl" />
				<div>
					<p class="py-6">In my free time, I like to play tennis.</p>
				</div>
			</div>
		</div>
		<p class="btn btn-accent btn-outline" @click="$emit('emitShowMeAnotherClue', 3)">Last clue, please!</p>
	</div>
</template>