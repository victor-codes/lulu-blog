import React from "react";
import { Helmet } from "react-helmet";

const Title = ({ title, description, imageUrl }) => {

  return (
    <Helmet>
      {/* // <!-- Primary Meta Tags --> */}
      <title>{`${title} — Lulu Nwenyi`}</title>
      <meta name="title" content={`${title} — Lulu Nwenyi`} />
      <meta name="description" content={`${description}`} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${window.location.href}`} />
      <meta property="og:title" content={`${title} — Lulu Nwenyi`} />
      <meta property="og:description" content={`${description}`} />
      <meta
        property="og:image"
        content={`${
          imageUrl ? `https://sad-rosalind-d98e2f.netlify.app/${imageUrl}` : ""
        }`}
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${window.location.href}`} />
      <meta property="twitter:title" content={`${title} — Lulu Nwenyi`} />
      <meta property="twitter:description" content={`${description}`} />
      <meta
        property="twitter:image"
        content={`${
          imageUrl ? `https://sad-rosalind-d98e2f.netlify.app/${imageUrl}` : ""
        }`}
      ></meta>
    </Helmet>
  );
};

export default Title;
