import React from "react";
import ReactIntense from "react-intense";
import { memo } from "react";
const GalleryItems = memo(({ room }) => {
  const { fields } = room;
  const { title, image } = fields;
  const { fields: images } = image;
  const { file } = images;
  console.log(file.url);
  return (
    <>
      {/* <img src={file.url} /> */}
      <ReactIntense vertical="true" title={title} src={file.url} />
    </>
  );
});
export default GalleryItems;
