import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={240}
    height={443}
    viewBox="0 0 240 443"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-3" y="227" rx="0" ry="0" width="230" height="20" />
    <rect x="0" y="15" rx="2" ry="2" width="230" height="193" />
    <rect x="0" y="266" rx="5" ry="5" width="230" height="68" />
    <rect x="0" y="355" rx="6" ry="6" width="120" height="25" />
  </ContentLoader>
);

export default Skeleton;
