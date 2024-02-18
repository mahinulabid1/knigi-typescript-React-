import React from 'react';
import {Helmet} from "react-helmet";

interface ComponentProps {
  title:string;
}

const HelmetComponent: React.FC<ComponentProps> = ({ title }) => {

  return (
    <>
    {/* using hardcoded value in some tags for now */}
      <Helmet>
        {/* Title */}
        <title>{title}</title>

        {/* website icon */}
        <link rel="icon" href="./images/favicon.png" />

        {/* Meta Tags */}
        <meta name="description" content="Knigi - A place where you can buy books, write stories as blogger and ETC" />
        <meta name="keywords" content="knigi, api, buy books, write stories, blog" />

        {/* OpenGraph Tags */}
        <meta property="og:title" content={title}/>
        <meta property="og:description" content="Knigi - A place where you can buy books, write stories as blogger and ETC" />
        <meta property="og:image" content="https://www.knigi.com/image.jpg" />
        <meta property="og:url" content="https://www.knigi.com" />

        {/* Twitter Tags */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="Knigi - A place where you can buy books, write stories as blogger and ETC" />
        <meta name="twitter:image" content="https://www.knigi.com/image.jpg" />
        <meta name="twitter:card" content="dummy content" />
      </Helmet>
    </>
  )
}

export default HelmetComponent;