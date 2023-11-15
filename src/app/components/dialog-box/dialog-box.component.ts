import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormGroup, FormControl} from "@angular/forms";
import {BProduct} from "../../models/products";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  fileInput: any;


  myForm: FormGroup = new FormGroup({
    id: new FormControl(this.data?.id ?? null),
    title: new FormControl(this.data?.title ?? ''),
    price: new FormControl(this.data?.price ?? ''),
    configId: new FormControl(this.data?.configure.id ?? null),
    diameter: new FormControl(this.data?.configure.diameter ?? ''),
    color: new FormControl(this.data?.configure.color ?? ''),
    height: new FormControl(this.data?.configure.height ?? ''),
    code: new FormControl(this.data?.configure.code ?? ''),
  });

  isNew: boolean = true;


  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BProduct,
  ) {
    if (this.data) this.isNew = false;
  }

  ngOnInit(): void {
    this.fileInput = document.getElementById('myFileInput');
    console.log("kjlhlj", this.fileInput);

  }

  showMe() {


  }



  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onSubmit() {

    const file: File = this.fileInput.files[0];
    let base64data2;

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        base64data2 = reader.result;

        this.data = {
          id: this.myForm.value.id,
          title: this.myForm.value.title,
          price: this.myForm.value.price,
          image: base64data2,
          configure: {
            id: this.myForm.value.configId,
            diameter: this.myForm.value.diameter,
            color: this.myForm.value.color,
            height: this.myForm.value.height,
            code: this.myForm.value.code,
          }
        };

        this.dialogRef.close(this.data);
      }
      reader.readAsDataURL(file);
    }


  }


}
