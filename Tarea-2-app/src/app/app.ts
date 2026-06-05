import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  register_form: FormGroup
  //de spues de private 'fb' e sel nombre puede ser formBuilder
  constructor(private formBuilder: FormBuilder){
    this.register_form = this.formBuilder.group({
      nombre: [
        '', //inicialmente es un string vacio por los ''
        [
          Validators.required,
          Validators.minLength(3)
        ], //array de validaciones 
      ],
      email: [
        '', //inicialmente es un string vacio por los ''
        [
          Validators.required,
          Validators.email
        ], //array de validaciones 
      ],
      password: [
        '', //inicialmente es un string vacio por los ''
        [
          Validators.required,
          Validators.minLength(8)
        ], //array de validaciones 
      ],
      edad: [
        '0', //inicialmente es un string vacio por los ''
        [
          Validators.required,
          Validators.min(18)
        ], //array de validaciones 

      ],
    });
  }

  submitRegisterForm(){
      console.log("Se envio el formulario de registro", this.register_form.value
         
      )
  }
}
