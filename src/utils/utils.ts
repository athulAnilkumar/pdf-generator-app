import jsPDF from 'jspdf';
// import mammoth from 'mammoth';

export const generatePDF = async (imageFiles: any) => {
  const pdf = new jsPDF();
  const imgWidth = 210;
  const imgHeight = 297;

  for (let i = 0; i < imageFiles.length; i++) {
    const imageData: any = await fileToDataURL(imageFiles[i]);

    if (i > 0) pdf.addPage();
    pdf.addImage(imageData, 'JPEG', 10, 10, imgWidth - 20, imgHeight - 20);
  }

  pdf.save('images.pdf');
};

const fileToDataURL = (file: any) => {
  return new Promise((resolve) => {
    const reader: any = new FileReader();
    reader.onload = (e: any) => resolve(e.target.result);
    reader.readAsDataURL(file);
  });
};

export const convertImageToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result as string);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};

export const convertDocxToPDF = async (file: any) => {
  // const reader = new FileReader();

  // reader.onload = async (event: any) => {
  //   const arrayBuffer = event.target.result;

  //   // Extract text from DOCX
  //   const { value: textContent } = await mammoth.extractRawText({
  //     arrayBuffer,
  //   });

  //   // Generate PDF
  //   const pdf = new jsPDF();
  //   pdf.setFont('helvetica', 'normal');
  //   pdf.setFontSize(12);

  //   const marginLeft = 10;
  //   const marginTop = 10;
  //   const maxWidth = 190; // A4 width - margins
  //   const lineHeight = 7; // Spacing between lines

  //   const lines = pdf.splitTextToSize(textContent, maxWidth);
  //   let cursorY = marginTop;

  //   // Add text to PDF
  //   lines.forEach((line: any) => {
  //     if (cursorY + lineHeight > 280) {
  //       pdf.addPage();
  //       cursorY = marginTop;
  //     }
  //     pdf.text(line, marginLeft, cursorY);
  //     cursorY += lineHeight;
  //   });

  //   pdf.save('converted-document.pdf');
  // };

  // reader.readAsArrayBuffer(file);
  return null;
};

// export function downloadYouTubeVideo() {
//   const videoElement = document.getElementById('videoUrl');
//   if (!videoElement) {
//     alert('Video URL element not found');
//     return;
//   }
//   const videoURL: any = (videoElement as HTMLInputElement).value;
//   if (!videoURL) {
//     alert('Please enter a YouTube URL');
//     return;
//   }
//   window.location.href = `http://localhost:3001/download?url=${encodeURIComponent(
//     videoURL
//   )}`;
// }

export async function downloadYouTubeVideo() {
  const videoElement = document.getElementById('videoUrl');
  if (!videoElement) {
    alert('Video URL input not found');
    return;
  }

  const videoURL = (videoElement as HTMLInputElement).value;
  if (!videoURL) {
    alert('Please enter a YouTube URL');
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:3001/download?url=${encodeURIComponent(videoURL)}`
    );
    if (!response.ok) {
      throw new Error('Failed to download video');
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'video.mp4'; // Default filename (can be customized)
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to download video');
  }
}
