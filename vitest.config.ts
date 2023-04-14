import { defineProject } from 'vitest/config'

export default defineProject({
  test: {
    name: '{{name}}',
    environment: 'jsdom'
  }
})
