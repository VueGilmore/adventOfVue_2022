import { cleanup, fireEvent, render } from '@testing-library/vue'
import { afterEach, expect, it } from 'vitest'

import App from './App.vue'

afterEach(cleanup)

it('should update the TO field', async () => {
  const { findByLabelText, findByText } = render(App)

  await fireEvent.input(await findByLabelText('To:'), { target: { value: 'Foo' } })

  expect(await findByText('TO: Foo')).toBeTruthy()
})

it('should update the FROM field', async () => {
  const { findByLabelText, findByText } = render(App)

  await fireEvent.input(await findByLabelText('From:'), { target: { value: 'Bar' } })

  expect(await findByText('FROM: Bar')).toBeTruthy()
})
