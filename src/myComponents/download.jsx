import React from "react";
import { saveAs } from "file-saver";
import PdfDocument from "./PdfDocument";

const DownloadButton = ({ pdfUrl }) => {
  const handleDownload = () => {
    // Fetch the PDF content as a blob
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Save the blob as a file with a specific name
        saveAs(blob, "example.pdf");
      })
      .catch((error) => {
        console.error("Error fetching the PDF:", error);
      });
  };

  return (
    <div>
      <button onClick={handleDownload}>Download PDF</button>
      <PdfDocument pdfUrl={pdfUrl} />
    </div>
  );
};

export default DownloadButton;


// dbfhusgd
import React from 'react';
import DownloadButton from './DownloadButton';

const App = () => {
  const pdfUrl = '/path-to-your-pdf.pdf';

  return (
    <div>
      <h1>Download PDF Example</h1>
      <DownloadButton pdfUrl={pdfUrl} />
    </div>
  );
};

export default App;
// pdf ur;
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfDocument = ({ pdfUrl }) => {
  return (
    <Document file={pdfUrl}>
      <Page pageNumber={1} />
    </Document>
  );
};

export default PdfDocument;

npm install react-pdf
npm install file-saver