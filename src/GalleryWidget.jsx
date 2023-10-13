import React, { useMemo, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const GalleryWidget = ({ config }) => {
  const id = useMemo(() => `pgw-${uuid()}`, []);

  useEffect(() => {
    const widget = cloudinary.galleryWidget({
      ...config,
      container: `#${id}`
    });

    widget.render();

    return () => {
      widget.destroy();
    };
  }, [id, config]);

  return <div id={id} />;
};
