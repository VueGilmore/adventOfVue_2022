<template>
  <main class="flex flex-col justify-center h-full mx-auto max-w-600px">
    <section class="flex flex-col items-center leading-loose text-center">
      <div class="text-3xl">
        <span class="i-twemoji-christmas-tree" />{{ t('happyHolidays') }}<span class="i-twemoji-world-map" />
      </div>
      <i18n-t keypath="christmasIsComing" tag="span">
        <!-- These are dynamic slots, based on the values within the message -->
        <template #time>
          <span class="font-medium text-green-600">
            {{ t('day', days) }}
          </span>
        </template>

        <template #date>
          {{ d(christmasDate, 'long') }}
        </template>
      </i18n-t>
      <div class="flex items-center justify-between w-200px">
        <!-- list.next() allows us to cycle through the languages -->
        <button class="icon-button" @click="list.next()">
          <span class="i-carbon-language" />
        </button>
        <div>
          <span :class="flags[locale]" />
          {{ t('language') }}
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useCycleList } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

/**
 * An explanation of `useI18n()`!
 * t
 * The main way you'll grab translations.
 *
 * d
 * Localize dates with a format.
 * Formats are defined within main.js.
 *
 * locale
 * Ref that allows you to change the current locale.
 *
 * availableLocales
 * Grab all of the availableLocales from Vue i18n
 * These are automatically loaded in main.js
 * The Vite i18n plugin scans the locales directory
 * For each file, `availableLocales` is populated.
 */
const { t, d, locale, availableLocales } = useI18n()

// https://vueuse.org/core/usecyclelist/
// Easy way to make a wrap-around, reactive Array.
const list = useCycleList(availableLocales)
watch(list.state, state => (locale.value = state))

// See the README about tricky timezone issues!
// I figured since this is i18n-friendly, we'd wanna
// make sure the timezones were right :-)
const christmasDate = new Date('2022/12/25')

const days = computed(() => {
  const diff = christmasDate.getTime() - new Date()

  return Math.ceil(diff / 1000 / 60 / 60 / 24)
})

const flags = {
  en: 'i-twemoji-flag-united-kingdom',
  es: 'i-twemoji-flag-spain',
  de: 'i-twemoji-flag-germany',
  'ja-JP': 'i-twemoji-flag-japan',
}
</script>

<style scoped>
.icon-button {
  @apply text-xl
    w-32px
    h-32px
    rounded-full
    border-1
    border-transparent
    bg-transparent
    cursor-pointer
    duration-300
    hover:ring-2
    hover:border-green-500
    hover:ring-green-500
    hover:ring-opacity-40
    hover:text-green-600;
}
</style>
