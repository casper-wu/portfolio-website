const fs = require("fs");
const path = require("path");

// Try to load the PDF with pdf-lib and re-save with compression
async function compressPDF(inputPath, outputPath) {
  try {
    const { PDFDocument } = require("pdf-lib");

    const pdfBytes = fs.readFileSync(inputPath);
    const originalSize = pdfBytes.length / 1024 / 1024;
    console.log(`Original: ${originalSize.toFixed(1)}MB`);

    const pdfDoc = await PDFDocument.load(pdfBytes, {
      ignoreEncryption: true,
      updateMetadata: false,
    });

    // Remove metadata to save space
    pdfDoc.setTitle("");
    pdfDoc.setAuthor("");
    pdfDoc.setSubject("");
    pdfDoc.setKeywords([]);
    pdfDoc.setProducer("");
    pdfDoc.setCreator("");

    // Save with compression
    const compressedBytes = await pdfDoc.save({
      useObjectStreams: true,
      addDefaultPage: false,
    });

    const newSize = compressedBytes.length / 1024 / 1024;
    console.log(`Compressed: ${newSize.toFixed(1)}MB`);
    console.log(`Saved: ${(originalSize - newSize).toFixed(1)}MB`);

    fs.writeFileSync(outputPath, compressedBytes);
    console.log(`Written to: ${outputPath}`);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

compressPDF(
  path.join(__dirname, "..", "public", "UD Portfolio.pdf"),
  path.join(__dirname, "..", "public", "UD Portfolio-compressed.pdf")
);
