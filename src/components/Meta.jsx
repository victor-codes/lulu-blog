import React from "react";
import { Helmet } from "react-helmet";
import { truncateString } from "../utils/helperFunction";

const Meta = ({ title, description, imageUrl, isBlogPost, canonicalLink }) => {
  const defaultImgUrl = "";
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
      <meta name="title" content={`${title} — Lulu Nwenyi`} />
      <meta
        name="description"
        content={`${
          description ? trimmedDescription : defaultDescriptionText
        } Read more...`}
      />
      {isBlogPost && <meta property="og:type" content="article" />}

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${window.location.href}`} />
      <meta property="og:title" content={`${title} — Lulu Nwenyi`} />
      <meta
        property="og:description"
        content={`${
          description ? trimmedDescription : defaultDescriptionText
        } Read more...`}
      />
      <meta
        property="og:image"
        content={`${
          imageUrl
            ? `https://sad-rosalind-d98e2f.netlify.app/${imageUrl}`
            : defaultImgUrl
        }`}
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${window.location.href}`} />
      <meta property="twitter:title" content={`${title} — Lulu Nwenyi`} />
      <meta name="twitter:card" content="summary" />
      <meta
        property="twitter:description"
        content={`${
          description ? trimmedDescription : defaultDescriptionText
        } Read more...`}
      />
      <meta
        property="twitter:image"
        content={`${
          imageUrl
            ? `https://sad-rosalind-d98e2f.netlify.app/${imageUrl}`
            : defaultImgUrl
        }`}
      ></meta>
    </Helmet>
  );
};

export default Meta;
