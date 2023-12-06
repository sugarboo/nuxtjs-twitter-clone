import config from '@antfu/eslint-config'

export default config({
  rules: {
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
  },
})
