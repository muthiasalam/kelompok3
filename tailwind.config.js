/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
      'aliceblue': '#F0F8FF',
      'merahgelap': '#7E0404',
      'abu':'#F4F4F4',
      'abusambutan':'#736E6E',
      'abunama': '#595454',
      'merahdesain': '#C30404'
    },
    fontSize: {
      '12': '12px',   // Contoh ukuran font 12px
      '16': '16px',
      '10': '10px',
      '18': '18px',
      '14': '14px',
  
      '21': '21px',
      '19': '19px'

         // Contoh ukuran font 16px
      // Tambahkan ukuran font lain jika diperlukan
    },
  },
  },
  plugins: [],
}

