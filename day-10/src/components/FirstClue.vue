<template>
	<div>
		<div class="text-center">
			<label for="modal-first-clue" class="btn btn-accent btn-outline">Give me the first clue!</label>
		</div>
		<input type="checkbox" id="modal-first-clue" class="modal-toggle" />
		<div class="modal">
			<div class="modal-box">
				<h3 class="font-bold text-lg">Hello! Here is your first clue</h3>
				<p class="py-4">I'm learning Vue.js and I think doing the <strong>Advent Of Vue</strong> is a fun way of doing it</p>
				<div class="modal-action">
					<label for="modal-first-clue" class="btn" @click="$emit('emitShowMeAnotherClue', 2)">Cool, got it. Give me the second clue!</label>
				</div>
			</div>
		</div>
	</div>
</template>