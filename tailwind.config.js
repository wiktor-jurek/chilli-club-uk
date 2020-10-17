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
      spacing: {
               'card-height': '200px',
              },
      borderRadius: {
        'lg': '30px',
        'default': '10px',
      },
      fontFamily: {
      },
      colors: {
        'apple': {
          50: '#F5FBF5',
          100: '#EBF6EC',
          200: '#CCE9CF',
          300: '#AEDBB2',
          400: '#71C178',
          500: '#34A63E',
          600: '#2F9538',
          700: '#1F6425',
          800: '#174B1C',
          900: '#103213',
          },
          'crimson': {
            50: '#FDF3F4',
            100: '#FCE8E8',
            200: '#F6C4C6',
            300: '#F1A1A3',
            400: '#E75B5E',
            500: '#DC1419',
            600: '#C61217',
            700: '#840C0F',
            800: '#63090B',
            900: '#420608',
            },
            'fun-blue': {
              50: '#F4F7FB',
              100: '#E8EFF7',
              200: '#C6D6EA',
              300: '#A4BEDE',
              400: '#608DC5',
              500: '#1C5CAC',
              600: '#19539B',
              700: '#113767',
              800: '#0D294D',
              900: '#081C34',
              },
        'cod-grey':'#1C1C1C'
      },
    },
  },
  variants: {},
  plugins: [],
}