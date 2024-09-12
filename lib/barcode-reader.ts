import { fromBuffer } from "pdf2pic";
import { Document } from "@/types";
// import Quagga from "@ericblade/quagga2";

async function pdfToJpeg(document: Document) {
  const fileUrl = "http://" + document.fileUrl;
  const response = await fetch(fileUrl);
  if (!response.ok) {
    return false;
  }
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const options = {
    density: 100,
    saveFilename: "untitled",
    savePath: "./images",
    format: "png",
    width: 600,
    height: 600,
  };
  const convert = fromBuffer(buffer, options);
  const pageToConvertAsImage = 1;
  convert(pageToConvertAsImage, { responseType: "image" }).then((resolve) => {
    console.log("Page 1 is now converted as image");
    return resolve;
  });
}

async function reader() {
  const res = await fetch(
    "gs://bimterface.appspot.com/Images/1720121254994_nfe 41240736757711000152550010000001431282877238.jpeg"
  );
  if (!res.ok) {
    return false;
  }
  const blob = await res.blob();
  console.log(blob);
  //   const arrayBuffer = await blob.arrayBuffer();
  //   const buffer = new Uint8Array(arrayBuffer);
  //   Quagga.decodeSingle(
  //     {
  //       src: buffer,
  //       numOfWorkers: 0,
  //       inputStream: {
  //         size: 800,
  //       },
  //       decoder: {
  //         readers: ["code_128_reader"],
  //       },
  //     },
  //     function (result) {
  //       if (result.codeResult) {
  //         console.log("result", result.codeResult.code);
  //       } else {
  //         console.log("not detected");
  //       }
  //     }
  //   );
}

export { pdfToJpeg, reader };
