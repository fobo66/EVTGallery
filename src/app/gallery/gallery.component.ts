import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { Image } from '../image';
import { compare } from '../util';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  constructor(public dialog: MatDialog) { }

  public images: Array<Image> = [
    {
      name: 'McLaren',
      description: 'Orange disaster',
      url: 'http://video.skysports.com/9xcDA5YTE6_4gUaDJAos1W4YdKErN5lK/promo313441973',
      isPreviewShown: false
    }
  ];

  public togglePreviewModal(image: Image) {
    image.isPreviewShown = !image.isPreviewShown;
  }

  public addImage(name: string, url: string, description: string) {
    this.images.push({
      name: name,
      url: url,
      description: description,
      isPreviewShown: false
    });
  }

  /**
   * Delete an image with confirmation
   */
  public deleteImage(index: number) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '250px',
      data: { index: index }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result > -1) {
        this.images.splice(result, 1);
      }
    });
  }

  /**
 * Edit an image with confirmation
 */
  public editImage(index: number, image: Image) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: {
        index: index,
        image: image
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.ok) {
        this.images[result.index] = result.image;
        this.images = this.images.slice();
      }
    });
  }

  /**
   * Move an element forward
   */
  public moveForward(index: number) {
    if (index < this.images.length - 1) {
      const temp = this.images[index];
      this.images[index] = this.images[index + 1];
      this.images[index + 1] = temp;

      this.images = this.images.slice();
    }
  }

  /**
   * Move an element forward
   */
  public moveBackward(index: number) {
    if (index > 0) {
      const temp = this.images[index];
      this.images[index] = this.images[index - 1];
      this.images[index - 1] = temp;

      this.images = this.images.slice();
    }
  }

  /**
   * Determine image format for coloring image border
   */
  public checkImageFormat(url: string): string {
    const normalizedUrl = url.toLocaleLowerCase();
    if (normalizedUrl.endsWith('jpg') || normalizedUrl.endsWith('jpeg')) {
      return 'jpeg';
    } else if (normalizedUrl.endsWith('png')) {
      return 'png';
    } else {
      return '';
    }
  }

  public isJpeg(url: string): boolean {
    return compare(this.checkImageFormat(url), 'jpeg');
  }

  public isPng(url: string): boolean {
    return compare(this.checkImageFormat(url), 'png');
  }
}
