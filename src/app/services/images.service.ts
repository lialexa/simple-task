import { Injectable } from '@angular/core';
import { ImageParams } from "../imageparams";


@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private images: ImageParams[] = [];

  public uploadImage(image: any, title: string, option: string): void {
    const img: ImageParams = {image: image, title: title, option: option};
    this.images.push(img);
  }

  public getImages(): ImageParams[] {
    return this.images;
  }

  public isExist(image: string): boolean {
    return this.images.some(obj => obj.image === image);
  }

}
