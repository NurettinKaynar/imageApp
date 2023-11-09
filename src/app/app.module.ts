import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';

import { MessagesModule } from 'primeng/messages';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';
import { NgxImageCompressService } from 'ngx-image-compress';
import { FileSizePipe } from './pipe/fileSize.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlockUIModule } from 'primeng/blockui';
import { BlockableDivComponent } from './components/blockable-div/blockable-div.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  imports: [
    BrowserModule,
    ButtonModule,
    MessagesModule,
    FileUploadModule,
    ToastModule,
    RadioButtonModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    SliderModule,
    BrowserAnimationsModule,
    BlockUIModule,
    ProgressSpinnerModule,
  ],
  providers: [MessagesModule, NgxImageCompressService, FileSizePipe],
  declarations: [AppComponent, BlockableDivComponent, FileSizePipe],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
