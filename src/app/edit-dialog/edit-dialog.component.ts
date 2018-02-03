import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onCancelClick() {
    this.dialogRef.close({
      ok: false
    });
  }

  onSaveClick(name: string, url: string) {
    this.dialogRef.close({
      ok: true,
      index: this.data.index,
      image: {
        name: name,
        url: url
      }
    });
  }
}
