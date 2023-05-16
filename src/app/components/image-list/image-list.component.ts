import { Component } from '@angular/core';
import { ImagesService } from "../../services/images.service";
import { ImageParams} from "../../imageparams";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})

export class ImageListComponent {
  constructor(private imagesService: ImagesService) { }

  protected displayedColumns: string[] = ['Image', 'Title', 'Option'];
  protected getImageList(): ImageParams[] {
    return this.imagesService.getImages();
  }

}
