/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      fraunces: ["Fraunces", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        desktopHeroImage:
          "url('https://raw.githubusercontent.com/sthitaprajna-mishra/coffeeroasters/main/src/assets/home/desktop/image-hero-coffeepress.jpg')",
        tabletHeroImage:
          "url('https://raw.githubusercontent.com/sthitaprajna-mishra/coffeeroasters/main/src/assets/home/tablet/image-hero-coffeepress.jpg')",
        mobileHeroImage:
          "url('https://raw.githubusercontent.com/sthitaprajna-mishra/coffeeroasters/main/src/assets/home/mobile/image-hero-coffeepress.jpg')",
        desktopWhyChooseUs:
          "url('https://raw.githubusercontent.com/sthitaprajna-mishra/coffeeroasters/main/src/assets/plan/desktop/bg-steps.png')",
        mobileWhyChooseUs:
          "url('https://raw.githubusercontent.com/sthitaprajna-mishra/coffeeroasters/main/src/assets/plan/mobile/bg-steps.png')",
        desktopAboutHeroImage:
          "url('https://raw.githubusercontent.com/sthitaprajna-mishra/coffeeroasters/main/src/assets/about/desktop/image-hero-whitecup.jpg')",
        tabletAboutHeroImage:
          "url('https://raw.githubusercontent.com/sthitaprajna-mishra/coffeeroasters/main/src/assets/about/tablet/image-hero-whitecup.jpg')",
        mobileAboutHeroImage:
          "url('https://raw.githubusercontent.com/sthitaprajna-mishra/coffeeroasters/main/src/assets/about/mobile/image-hero-whitecup.jpg')",
      },
      colors: {
        darkCyan: "hsl(179, 81%, 29%)",
        darkGreyBlue: "hsl(215, 19%, 25%)",
        paleOrange: "hsl(25, 94%, 86%)",
        lightCream: "hsl(43, 78%, 98%)",
        grey: "hsl(215, 5%, 54%)",
        lightCyan: "#66d1cf",
      },
    },
  },
  plugins: [],
};
