import React from "react";
import { Helmet } from "react-helmet";
import { truncateString } from "../utils/helperFunction";

const Meta = ({ title, description, imageUrl, isBlogPost, canonicalLink }) => {
  // const defaultImgUrl = "";
  const defaultDescriptionText = "";
  const trimmedDescription = description && truncateString(description, 150);

  return (
    <Helmet>
      <html lang="en" />
      <title>{`${title} — Lulu Nwenyi`}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta rel="canonical" href={canonicalLink} />
      {/* // <!-- Primary Meta Tags --> */}
      <meta name="title" content={`Blog — Lulu Nwenyi`} />
      <meta
        name="description"
        content="Hello! Welcome to my blog. On here, you can find articles on Design, Backend Development, Technical Writing, and More."

        // content={`${
        //   description ? trimmedDescription : defaultDescriptionText
        // } Read more...`}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="%PUBLIC_URL%/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="%PUBLIC_URL%/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="%PUBLIC_URL%/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href="%PUBLIC_URL%/safari-pinned-tab.svg"
        color="#fef0ff"
      />
      <meta name="msapplication-TileColor" content="#f5e5f6" />
      <meta name="theme-color" content="#fef0ff" />
      {isBlogPost && <meta property="og:type" content="article" />}

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="www.lulu.wtf" />
      <meta property="og:title" content={`Blog — Lulu Nwenyi`} />
      <meta
        property="og:description"
        content="Hello! Welcome to my blog. On here, you can find articles on Design, Backend Development, Technical Writing, and More."

        // content={`${
        //   description ? trimmedDescription : defaultDescriptionText
        // } Read more...`}
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/victorcodes/image/upload/v1655848298/meta-image-min_woayuo.png"
        // content={`${
        //   imageUrl
        //     ? `https://sad-rosalind-d98e2f.netlify.app/${imageUrl}`
        //     : defaultImgUrl
        // }`}
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="www.lulu.wtf" />
      <meta property="twitter:title" content="Blog — Lulu Nwenyi" />
      <meta name="twitter:card" content="summary" />
      <meta
        property="twitter:description"
        content="Hello! Welcome to my blog. On here, you can find articles on Design, Backend Development, Technical Writing, and More."
        // content={`${
        //   description ? trimmedDescription : defaultDescriptionText
        // } Read more...`}
      />
      <meta
        property="twitter:image"
        content="https://res.cloudinary.com/victorcodes/image/upload/v1655848298/meta-image-min_woayuo.png"
        //        content={`${
        //   imageUrl
        //     ? `https://sad-rosalind-d98e2f.netlify.app/${imageUrl}`
        //     : defaultImgUrl
        // }`}
      />
    </Helmet>
  );
};

export default Meta;
