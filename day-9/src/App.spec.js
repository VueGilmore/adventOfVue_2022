import { configure, fireEvent, render } from '@testing-library/vue'
import { expect, it } from 'vitest'

import App from './App.vue'

configure({ testIdAttribute: 'data-qa' })

it('should sort presents from small to big by dimensions when toggling sort', async () => {
  const { findAllByTestId, findByRole } = render(App)

  await fireEvent.click(await findByRole('button', { name: 'Toggle sort' }))

  const presents = await findAllByTestId('present')
  expect(presents[0].getAttribute('alt')).toBe('Present 2')
  expect(presents[1].getAttribute('alt')).toBe('Present 1')
  expect(presents[2].getAttribute('alt')).toBe('Present 3')
  expect(presents[3].getAttribute('alt')).toBe('Present 5')
  expect(presents[4].getAttribute('alt')).toBe('Present 4')
})
