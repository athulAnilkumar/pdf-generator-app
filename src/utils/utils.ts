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
      'https://yt-downloader-api-50sv.onrender.com/download',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          // origin: 'https://yt-downloader-50sv.onrender.com',
          // 'User-Agent':
          //   'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36',
          // Referer: 'https://m.youtube.com/',
          // 'Accept-Language': 'en-US,en;q=0.9',
        },
        body: JSON.stringify({ videoUrl: videoURL }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to download video');
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'video_download.mp4';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to download video');
  }
}
