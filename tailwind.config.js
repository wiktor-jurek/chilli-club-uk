module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ['./dist/*.html'],
  },
  theme: {
    extend: {
      borderRadius: {
        'lg': '30px',
        'default': '10px',
      },
      fontFamily: {
      },
      colors: {
      },
    },
  },
  variants: {},
  plugins: [],
}