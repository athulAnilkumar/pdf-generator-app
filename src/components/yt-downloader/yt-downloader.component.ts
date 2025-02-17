import { Component } from '@angular/core';
import { downloadYouTubeVideo } from '../../utils/utils';

@Component({
  selector: 'app-yt-downloader',
  imports: [],
  templateUrl: './yt-downloader.component.html',
  styleUrl: './yt-downloader.component.scss',
})
export class YtDownloaderComponent {
  link = '';

  downloadClick = () => {
    // downloadYouTubeVideo();
    this.openVideoInNewTab();
  };

  onLinkChange = (event: any) => {
    this.link = event?.target.value;
  };

  // openVideoInNewTab() {
  //   if (this.link) {
  //     const videoId = this.getYouTubeVideoId(this.link);
  //     if (videoId) {
  //       const newTab: any = window.open('', '_blank');
  //       newTab.document.write(`
  //         <html>
  //           <head><title>YouTube Video</title></head>
  //           <body>
  //             <video width="640" height="360" controls autoplay>
  //               <source src="https://www.youtube.com/watch?v=${videoId}" type="video/mp4">
  //               Your browser does not support the video tag.
  //             </video>
  //           </body>
  //         </html>
  //       `);
  //     } else {
  //       alert('Invalid YouTube link.');
  //     }
  //   } else {
  //     alert('Please enter a YouTube link.');
  //   }
  // }

  // // Extract video ID from YouTube URL
  // getYouTubeVideoId(url: string): string | null {
  //   const regex =
  //     /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/?)([\w\-]+))|(?:https?:\/\/(?:www\.)?youtu\.be\/([\w\-]+))/;
  //   const match = url.match(regex);
  //   return match ? match[1] || match[2] : null;
  // }

  // openVideoInNewTab() {
  //   if (this.link) {
  //     const videoId = this.getYouTubeVideoId(this.link);
  //     if (videoId) {
  //       const newTab = window.open('', '_blank');
  //       if (newTab) {
  //         newTab.document.write(`
  //           <html>
  //             <head><title>YouTube Video</title></head>
  //             <body style="margin:0; display:flex; justify-content:center; align-items:center; height:100vh;">
  //               <iframe
  //                 width="800"
  //                 height="450"
  //                 src="https://www.youtube.com/embed/${videoId}?autoplay=1"
  //                 frameborder="0"
  //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //                 allowfullscreen>
  //               </iframe>
  //             </body>
  //           </html>
  //         `);
  //       } else {
  //         alert('Popup blocked! Please allow popups for this site.');
  //       }
  //     } else {
  //       alert('Invalid YouTube link.');
  //     }
  //   } else {
  //     alert('Please enter a YouTube link.');
  //   }
  // }

  // Extract video ID from YouTube URL
  getYouTubeVideoId(url: string): string | null {
    const regex =
      /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/?)([\w\-]+))|(?:https?:\/\/(?:www\.)?youtu\.be\/([\w\-]+))/;
    const match = url.match(regex);
    return match ? match[1] || match[2] : null;
  }

  openVideoInNewTab() {
    if (this.link) {
      fetch(
        `http://localhost:3001/download-video?url=${encodeURIComponent(
          this.link
        )}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.videoUrl) {
            const newTab: any = window.open('', '_blank');
            newTab.document.write(`
              <html>
                <head><title>Download YouTube Video</title></head>
                <body>
                  <video width="640" height="360" controls autoplay>
                    <source src="${data.videoUrl}" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                  <a href="${data.videoUrl}" download="youtube_video.mp4">
                    <button>Download Video</button>
                  </a>
                </body>
              </html>
            `);
          } else {
            alert('Failed to fetch video');
          }
        })
        .catch(() => alert('Error fetching video URL'));
    } else {
      alert('Please enter a YouTube link.');
    }
  }
}
