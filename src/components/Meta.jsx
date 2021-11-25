import React from "react";
import { Helmet } from "react-helmet";
import { truncateString } from "../utils/helperFunction";

import AppleTouch from "../assets/apple-touch-icon.png";
import Icon32 from "../assets/favicon-32x32.png";
import Icon16 from "../assets/favicon-16x16.png";
import Safari from "../assets/safari-pinned-tab.svg";
import defaultImgUrl from "../assets/meta-image.png";

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
      <meta name="title" content={`${title} — Lulu Nwenyi`} />
      <meta
        name="description"
        content={`${
          description ? trimmedDescription : defaultDescriptionText
        } Read more...`}
      />
      <link rel="apple-touch-icon" sizes="76x76" href={AppleTouch} />
      <link rel="icon" type="image/png" sizes="32x32" href={Icon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={Icon16} />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href={Safari} color="#fef0ff" />
      <meta name="msapplication-TileColor" content="#f5e5f6" />
      <meta name="theme-color" content="#fef0ff" />
      {isBlogPost && <meta property="og:type" content="article" />}

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={`${window.location.href}`} />
      <meta property="og:title" content={`${title} — Lulu Nwenyi`} />
      <meta
        property="og:description"
        content={`${
          description ? trimmedDescription : defaultDescriptionText
        } Read more...`}
      />
      <meta property="og:image" content={defaultImgUrl} />

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
      <meta property="twitter:image" content={defaultImgUrl}></meta>
    </Helmet>
  );
};

export default Meta;
