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
    downloadYouTubeVideo();
  };

  onLinkChange = (event: any) => {
    this.link = event?.target.value;
  };
}
