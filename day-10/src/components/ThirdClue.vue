<script setup>
const now = new Date()
const timeFirstMessage  = now.getHours().toString() + ':' + ( now.getMinutes() - 4 < 10 ? '0' : '' ) + (now.getMinutes() - 4).toString()
const timeSecondMessage = now.getHours().toString() + ':' + ( now.getMinutes() - 3 < 10 ? '0' : '' ) + (now.getMinutes() - 3).toString()
const timeThirdMessage  = now.getHours().toString() + ':' + ( now.getMinutes() < 10 ? '0' : '' ) + (now.getMinutes()).toString()
</script>

<template>
	<div>
		<div class="chat chat-start">
			<div class="chat-image avatar">
				<div class="w-10 rounded-full">
				<img src="https://pbs.twimg.com/profile_images/1594712700143140864/5fY209mD_400x400.jpg" />
				</div>
			</div>
			<div class="chat-header">
				Me
				<time class="text-xs opacity-50">{{ timeFirstMessage }}</time>
			</div>
			<div class="chat-bubble">I'm new at this. Learning about Vue and social media.</div>
			<div class="chat-footer opacity-50">
				Delivered
			</div>
		</div>
		<div class="chat chat-start">
			<div class="chat-image avatar">
				<div class="w-10 rounded-full">
				<img src="https://pbs.twimg.com/profile_images/1594712700143140864/5fY209mD_400x400.jpg" />
				</div>
			</div>
			<div class="chat-header">
				Me
				<time class="text-xs opacity-50">{{ timeSecondMessage }}</time>
			</div>
			<div class="chat-bubble">My background is on WordPress and I like it. 💓💓</div>
			<div class="chat-footer opacity-50">
				Delivered
			</div>
		</div>
		<div class="chat chat-end">
			<div class="chat-image avatar">
				<div class="w-10 rounded-full">
				<img src="https://placeimg.com/192/192/people" />
				</div>
			</div>
			<div class="chat-header">
				You
				<time class="text-xs opacity-50">{{ timeThirdMessage }}</time>
			</div>
			<div class="chat-bubble">I know who you are!</div>
			<div class="chat-footer opacity-50">
				Seen at {{ timeThirdMessage }}
			</div>
		</div>

		<div class="text-center mt-10">
			<p class="btn btn-accent btn-outline" @click="$emit('emitShowMeAnotherClue', 4)">Reveal!</p>
		</div>
	</div>
</template>