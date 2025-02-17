import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexPageComponent } from '../index-page/index-page.component';
import { YtDownloaderComponent } from '../yt-downloader/yt-downloader.component';

@Component({
  selector: 'app-main-index',
  imports: [NgbNavModule, IndexPageComponent, YtDownloaderComponent],
  templateUrl: './main-index.component.html',
  styleUrl: './main-index.component.scss',
})
export class MainIndexComponent {
  active = 1;
}
