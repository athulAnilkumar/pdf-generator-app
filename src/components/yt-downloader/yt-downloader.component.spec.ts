import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtDownloaderComponent } from './yt-downloader.component';

describe('YtDownloaderComponent', () => {
  let component: YtDownloaderComponent;
  let fixture: ComponentFixture<YtDownloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YtDownloaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YtDownloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
