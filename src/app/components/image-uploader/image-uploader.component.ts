import { Component } from '@angular/core';
import { ImagesService } from '../../services/images.service'

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent {

  protected image: string = '';
  protected title: string = '';
  protected option: string = '';
  protected options: string[] = ['Positive', 'Negative', 'Neutral'];
  protected messages: string[] = [];

  constructor(private imagesService: ImagesService) { }

  protected onSubmit():void {

    if (this.imagesService.isExist(this.image)) {
      this.messages.push('Duplicate image found. The image has not been added to the list.');
      return;
    }

    if (this.image) {
      this.imagesService.uploadImage(this.image, this.title, this.option);
      this.messages.push(`Image with ${this.title ? 'title '+this.title  : 'empty title' }, ${this.option ? 'option '+this.option  : 'empty option' }, have been added to the list of all uploaded images`)
    } else this.messages.push('Error: image must be added');

  }

  protected onFileSelected(event: any):void {

    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    }

  }

  private handleReaderLoaded(event: any):void {
    this.image = event.target.result;
  }

}
