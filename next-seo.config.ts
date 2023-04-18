const description =
  "The offical website for Gaming Galaxy, the ultimate superstore for gaming content creators and gamers alike";
const title = "Gaming Galaxy";
const url = "https://gaminggalaxy.gg";

const seo = {
  title,
  titleTemplate: "%s | Creator Superstore",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  },
  twitter: {
    handle: "@notrab",
    site: "@notrab",
  },
};

export { seo as defaultSEO, url as defaultUrl };
