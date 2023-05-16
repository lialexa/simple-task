import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { ImageListComponent } from './components/image-list/image-list.component';



const routes: Routes = [
  { path: 'load', component: ImageUploaderComponent },
  { path: 'list', component: ImageListComponent },
  { path: '', redirectTo: 'load', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
