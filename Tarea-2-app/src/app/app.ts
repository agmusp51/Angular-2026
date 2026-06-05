import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MIN_LENGTH, REQUIRED } from '@angular/forms/signals';
import { REACTIVE_NODE } from '@angular/core/primitives/signals';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
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

  getRegisterFormError(field_name: string) :string{
    const register_form_control =this.register_form.get(field_name)
    console.log(register_form_control?.errors)
    if(!register_form_control?.touched){
      return''
    }
    
    if (!register_form_control){
      return ''
    }
    if (register_form_control.hasError(ERRORTIPO.REQUIRED.NAME)){
      return 'Este campo es obligatorio'
    }
    if (register_form_control.hasError(ERRORTIPO.MIN_LENGTH.NAME)){
      const cant = register_form_control.errors?.[ERRORTIPO.MIN_LENGTH.NAME].requiredLength
      return 'Debe tener al menos ' + cant + 'caracteres'
    }
    return ''
  }
}

const ERRORTIPO = {
  MIN_LENGTH:{
    NAME: 'minlength',
  },
   REQUIRED:{
    NAME: 'required', 
  }
}