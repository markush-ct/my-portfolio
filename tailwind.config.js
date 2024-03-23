/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#075fe4",
                secondary: "#232b35",
                base: "#1b1f24",
            },
        },
    },
    plugins: [],
};
