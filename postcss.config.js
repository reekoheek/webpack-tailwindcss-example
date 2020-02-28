module.exports = {
  // parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'tailwindcss': {},
    'postcss-url': {},
    'postcss-preset-env': {
      features: {
        'nesting-rules': true,
      },
    },
    '@fullhuman/postcss-purgecss': {
      content: ['./src/**/*.html'],
    },
    cssnano: {},
  },
};
