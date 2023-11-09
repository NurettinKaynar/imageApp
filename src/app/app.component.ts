import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DOC_ORIENTATION, NgxImageCompressService } from 'ngx-image-compress';
import { FileSizePipe } from './pipe/fileSize.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService, FileSizePipe],
})
export class AppComponent {
  title = 'imageApp';
  imageFile: string = '';
  previousImage: string = '';
  finalImage: string = '';
  resolution: string = '720';
  customWidth: number = 0;
  customHeight: number = 0;
  width: number = 1280;
  height: number = 720;
  imageFormat = 'png';
  compressValue: number = 0;
  customAspectRatio: string = '4 / 3';
  customAspectRatio1: number = 0;
  customAspectRatio2: number = 0;
  finalAspectRatio: number = 0;
  imgResultBeforeCompression: string = '';
  sliderPos: number = 50; // Initial slider position
  originalImageFileSize: number = 0;
  finalImageFileSize: number = 0;
  blockedPanel: boolean = false;
  constructor(
    private messageService: MessageService,
    public compressor: NgxImageCompressService,
    private fileSize: FileSizePipe
  ) {}

  onUpload() {
    this.compressor.uploadFile().then(({ image, orientation }) => {
      this.imageFile = image;
      this.previousImage = image;
    });
  }
  onSliderChange(event: any): void {
    const sliderValue = (event.target as HTMLInputElement).value;
    this.sliderPos = parseInt(sliderValue, 10);
  }

  applyChanges() {
    switch (this.resolution) {
      case '720':
        this.width = 1280;
        this.height = 720;
        break;

      case '1080':
        this.width = 1920;
        this.height = 1080;
        break;
      case '2K':
        this.width = 2048;
        this.height = 1080;
        break;
      case '4K':
        this.width = 3840;
        this.height = 2160;
        break;
      case 'custom':
        this.width = this.customWidth;
        this.height = this.customHeight;
        break;

      default:
        this.width = 1280;
        this.height = 720;
        break;
    }

    switch (this.customAspectRatio) {
      case '4 / 3':
        this.finalAspectRatio = (4 / 3) * 100;
        break;
      case '16 / 9':
        this.finalAspectRatio = (16 / 9) * 100;
        break;
      case 'custom':
        this.finalAspectRatio =
          (this.customAspectRatio1 / this.customAspectRatio2) * 100;
        break;

      default:
        this.finalAspectRatio = (4 / 3) * 100;
        break;
    }
    this.blockedPanel = true;
    this.compressFile(this.imageFile);
  }

  compressFile(imageFile: any) {
    this.blockedPanel = true;
    setTimeout(() => {
      this.compressor
        .compressFile(
          imageFile,
          DOC_ORIENTATION.Default,
          this.finalAspectRatio,
          100 - this.compressValue,
          this.width,
          this.height
        )
        .then((compressedImage) => {
          this.finalImage = compressedImage;
          this.messageService.add({
            severity: 'success',
            summary: 'BAŞARILI!',
            detail: `Seçtiğiniz ayarlar yüklediğiniz dosyaya başarıyla uygulandı. Orjinal Dosya Boyutunuz:${this.fileSize.transform(
              this.compressor.byteCount(imageFile)
            )}. En son hali: ${this.fileSize.transform(
              this.compressor.byteCount(this.finalImage)
            )}`,
            life: 20000,
          });
          this.originalImageFileSize = this.compressor.byteCount(
            this.imageFile
          );
          this.finalImageFileSize = this.compressor.byteCount(this.finalImage);
          this.blockedPanel = this.finalImageFileSize > 0 ? false : true;
        });
    }, 600);
  }

  downloadFile() {
    const fileName = `final.${this.imageFormat}`;
    const url = this.finalImage;
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    // the filename you want
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
