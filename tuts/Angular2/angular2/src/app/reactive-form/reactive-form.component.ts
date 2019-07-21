import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;
  constructor( private fb: FormBuilder ) {

    this.form = this.fb.group({
      firstname: ["", [Validators.minLength(3), Validators.maxLength(15)]],
      lastname: ["" , [Validators.minLength(3), Validators.maxLength(15)]],
      phone: ["" , [Validators.minLength(3), Validators.maxLength(15)]],
    });

  }

  ngOnInit() {

  }

  onSubmit() {
    console.warn(this.form.value);
  }

}
