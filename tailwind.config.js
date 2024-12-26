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
    screens:{
      'phone': '375px',
      'tablet':'640px',
      'laptop':'1024px',
      'desctop':'1440px'
    },
    extend: {},
  },
  plugins: [],
}

