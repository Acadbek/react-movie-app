import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import { GalleryContainer } from "./ImagerStyle";
import { GlobalContainer } from "../../styles/GlobalStyle.styled";

function ImagerView() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "http://www.xondoppitravel.com/admin/files/image/Summer-in-Sunny-Dubai-00.jpg    ",
    "http://www.xondoppitravel.com/admin/files/image/4ae41f27fc1b0d7ec149414ec97b13ad.jpg",
    "	http://www.xondoppitravel.com/admin/files/image/840156cdd5d63fb0b2c838997e7eef3b.jpg ",
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <GlobalContainer>
      <GalleryContainer>
        {images.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            width="300"
            key={index}
            style={{ margin: "2px" }}
            alt=""
            className="img"
          />
        ))}
      </GalleryContainer>

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
    </GlobalContainer>
  );
}

export default ImagerView;
