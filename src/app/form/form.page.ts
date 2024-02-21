import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators,ReactiveFormsModule  } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from '../header/header.page';
import { InfoPage } from '../info/info.page';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderPage, InfoPage, ReactiveFormsModule,]
})
export class FormPage implements OnInit {
  step2 = true;
  titleStep = "DATOS DE CUENTA";
  title = "¿CUÁLES SON TUS DATOS?";
  info = "Ahora necesitamos saber algunos datos tuyos";
  icoSecurity = true;
  tiposDocumentos: any[] = [];
  formulario:FormGroup;

  
  constructor(private Router: Router,private fb:FormBuilder) { 
    this.formulario=this.fb.group({
      tipoDocumento:['',[Validators.required]],
      numeroDocumento:['',[Validators.required]],
      fechaDocumento:['',[Validators.required]],
      fechaNacimiento:['',[Validators.required]],
      genero:['',[Validators.required]],
      correo:['',[Validators.required]],
      confirmarCorreo:['',[Validators.required]],
      pinSeguridad:['',[Validators.required]],
      confirmarPin:['',[Validators.required]],
    })
  }
  private markAllAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markAllAsTouched(control);
      }
    });
  }
  ngOnInit() {
    fetch('https://api.bancoink.biz/qa/signup/documentTypes?apiKey=030106')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        this.tiposDocumentos= data;
      })
      .catch((error) => {
        console.error('Error al obtener tipos de documentos', error);
      });
  }
  saveData() {
    if (this.formulario.valid) {
      this.Router.navigate(['/contract']) 
    }else{
      this.markAllAsTouched(this.formulario);
    }
    
  }
  password: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
