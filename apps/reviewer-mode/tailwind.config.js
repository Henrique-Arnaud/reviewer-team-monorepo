module.exports = {
  theme: {
    extend: {
      keyframes: {
        'fade-gradient': {
          '0%': {
            'background': 'linear-gradient(to bottom, rgba(59,130,246,1), rgba(59,130,246,0))'
          },
          '50%': {
            'background': 'linear-gradient(to bottom, rgba(59,130,246,0.7), rgba(59,130,246,0))'
          },
          '100%': {
            'background': 'linear-gradient(to bottom, rgba(59,130,246,0), rgba(59,130,246,0))'
          },
        },
      },
      animation: {
        'fade-gradient': 'fade-gradient 4s cubic-bezier(0.165,0.84,0.44,1) infinite',
      },
    },
  },
  safelist: [
    'tracking-[-.01em]',
    'ease-[cubic-bezier(.165,.84,.44,1)]',
  ],
  plugins: [],
}
