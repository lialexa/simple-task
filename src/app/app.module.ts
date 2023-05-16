import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    ImageUploaderComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
