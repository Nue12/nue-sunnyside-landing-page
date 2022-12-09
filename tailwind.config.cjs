/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'smph': '320px',
        'ph': '400px',
        'sm': '700px'
      },
      fontFamily: {
        'fraun': 'Fraunces',
        'barlow': 'Barlow'
      },
      colors: {
        primary: {
          'Soft-red': 'hsl(7, 99%, 70%)',
          'Yellow': 'hsl(51, 100%, 49%)',
          'Dark-desaturated-cyan' : 'hsl(167, 40%, 24%)',       //(graphic design text)
          'Dark-blue' : 'hsl(198, 62%, 26%)',                   //(photography text)
          'Dark-moderate-cyan' : 'hsl(168, 34%, 41%)'   ,       //(footer)
        },  
        neutral: {
          'Very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
          'Very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
          'Dark-grayish-blue': 'hsl(232, 10%, 55%)',
          'Grayish-blue': 'hsl(210, 4%, 67%)',
          'White': 'hsl(0, 0%, 100%)',
          'White-opacity': 'hsl(0, 0%, 100%, 0.3)',
        }
      },
      backgroundImage: {
        'navBg-mobile': "url('./public/images/mobile/image-header.jpg')",
        'navBg-desktop': "url('./public/images/desktop/image-header.jpg')",

        'egg-mobile': "url('./public/images/mobile/image-transform.jpg')",
        'egg-desktop': "url('./public/images/desktop/image-transform.jpg')",

        'standout-mobile': "url('./public/images/mobile/image-stand-out.jpg')",
        'standout-desktop': "url('./public/images/desktop/image-stand-out.jpg')",

        'graphic-mobile': "url('./public/images/mobile/image-graphic-design.jpg')",
        'graphic-desktop': "url('./public/images/desktop/image-graphic-design.jpg')",

        'photography-mobile': "url('./public/images/mobile/image-photography.jpg')",
        'photography-desktop': "url('./public/images/desktop/image-photography.jpg')",
      }
    },
  },
  plugins: [],
}
