import { Component } from '@angular/core';
import { OutputFormat } from 'ngx-image-cropper';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
})
export class AppComponent {
  title = 'imageApp';
  imageFile: any;
  previousImage: any;
  finalImage: any;
  resolution: string = '720';
  customWidth: number = 0;
  customHeight: number = 0;
  width: number = 1280;
  height: number = 720;
  imageFormat: OutputFormat = 'png';
  compressValue: number = 0;
  customAspectRatio: any = '4 / 3';
  customAspectRatio1: any;
  customAspectRatio2: any;
  constructor(private messageService: MessageService) {}

  onUpload(event: any, fileUpload: FileUpload) {
    if (event) {
      for (const file of event.files) {
        console.log('Dosyalar', file);
        this.imageFile = file;
        this.previousImage = file.objectURL;
      }
    }
    fileUpload.clear();
  }

  loadImageFailed() {
    this.messageService.add({
      severity: 'error',
      summary: 'Hata',
      detail: 'Resim Yüklenirken hata oluştu!',
      life: 1000,
    });
  }

  imageCropped(event: any) {
    console.log('image cropped', event);
    this.finalImage = event.objectUrl;
  }

  imageLoaded(event: any) {
    console.log('imageLoaded', event);
  }
  cropperReady() {
    console.log('cropperReady');
  }
}
