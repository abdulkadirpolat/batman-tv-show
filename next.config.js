/** @type {import('next').NextConfig} */
const path = require("path");
const withSass = require("@zeit/next-sass");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["static.tvmaze.com", "via.placeholder.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = withSass({
  /* bydefault config  option Read For More Optios
here https://github.com/vercel/next-plugins/tree/master/packages/next-sass
*/
  cssModules: true,
});

module.exports = {
  ...nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  presets: ["next/babel"],
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
    [
      "@fullhuman/postcss-purgecss",
      {
        content: [
          "./pages/**/*.{js,jsx,ts,tsx}",
          "./components/**/*.{js,jsx,ts,tsx}",
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: ["html", "body"],
      },
    ],
  ],
};
