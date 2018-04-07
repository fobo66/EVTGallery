import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './/app-routing.module';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteConfirmationComponent,
    EditDialogComponent,
    MainComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSnackBarModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [
    EditDialogComponent,
    DeleteConfirmationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
