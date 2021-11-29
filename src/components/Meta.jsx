import React from "react";
import { Helmet } from "react-helmet";

import AppleTouch from "../assets/apple-touch-icon.png";
import Icon32 from "../assets/favicon-32x32.png";
import Icon16 from "../assets/favicon-16x16.png";
import Safari from "../assets/safari-pinned-tab.svg";
import defaultImgUrl from "../assets/meta-image-min.png";

const Meta = ({ title, description, isBlogPost, canonicalLink }) => {
  const defaultDescriptionText =
    "Hello! Welcome to my blog. On here, you can find articles on Design, Backend Development, Technical Writing, and More.";
  const trimmedDescription = description && description;

  return (
    <Helmet>
      <html lang="en" />
      <title>{`${title} — Lulu Nwenyi`}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta rel="canonical" href={canonicalLink} />

      <meta name="title" content={`${title} — Lulu Nwenyi`} />
      <meta
        name="description"
        content={description ? trimmedDescription : defaultDescriptionText}
      />
      <link rel="apple-touch-icon" sizes="76x76" href={AppleTouch} />
      <link rel="icon" type="image/png" sizes="32x32" href={Icon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={Icon16} />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href={Safari} color="#fef0ff" />
      <meta name="msapplication-TileColor" content="#f5e5f6" />
      <meta name="theme-color" content="#fef0ff" />
      {isBlogPost && <meta property="og:type" content="article" />}

      <meta property="og:type" content="blog" />
      <meta property="og:url" content={canonicalLink} />
      <meta property="og:title" content={`${title} — Lulu Nwenyi`} />
      <meta
        property="og:description"
        content={description ? trimmedDescription : defaultDescriptionText}
      />
      <meta property="og:image" content={defaultImgUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalLink} />
      <meta property="twitter:title" content={`${title} — Lulu Nwenyi`} />
      <meta name="twitter:card" content="summary" />
      <meta
        property="twitter:description"
        content={description ? trimmedDescription : defaultDescriptionText}
      />
      <meta property="twitter:image" content={defaultImgUrl}></meta>
    </Helmet>
  );
};

export default Meta;
