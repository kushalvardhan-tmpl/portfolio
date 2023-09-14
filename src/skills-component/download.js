import React from "react";
import "./Myskills.css";

const DownloadButton = () => {
  const handleDownload = () => {
    fetch(
      "https://portfolio-website-lkvm.onrender.com/api/home/about-me/cvFile"
    )
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "your-cv.pdf";

        a.click();

        window.URL.revokeObjectURL(url);
      });
  };

  return (
    <div className="downloadCv">
      <button onClick={handleDownload}>Download CV</button>
    </div>
  );
};

export default DownloadButton;
