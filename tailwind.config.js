/** @type {import('tailwindcss').Config} */
import flyonui from 'flyonui';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Incluye todos los archivos de tu proyecto
    "./node_modules/flyonui/dist/js/*.js", // Agrega FlyonUI a la lista de contenido
  ],
  theme: {
    extend: {},
  },
  plugins: [flyonui],
}


