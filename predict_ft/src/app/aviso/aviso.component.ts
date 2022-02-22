import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.scss']
})
export class AvisoComponent implements OnInit {

  nota: number | any
  title: string | any

  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    private dialog: MatDialogRef<AvisoComponent>) {
    this.title = data.title;
    this.nota = data.nota;
  }

  ngOnInit(): void {
  }

  cancel() {
    this.dialog.close(null);
  }

}
