export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'text-black': '0 4px 6px rgba(0, 0, 0, 0.7)', // Dark black shadow
        'text-black-lg': '0 5px 10px rgba(0, 0, 0, 0.8)', // Larger dark shadow
        'text-black-xl': '0 10px 20px rgba(0, 0, 0, 0.9)', // Extra large dark shadow
      }
    },
  },
  plugins: [],
};