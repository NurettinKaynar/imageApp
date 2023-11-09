import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MessagesModule } from 'primeng/messages';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';

@NgModule({
  imports: [
    BrowserModule,
    ButtonModule,
    ImageCropperModule,
    MessagesModule,
    FileUploadModule,
    ToastModule,
    RadioButtonModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    SliderModule,
  ],
  providers: [MessagesModule],
  declarations: [AppComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
