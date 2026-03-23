import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton
} from '@ionic/angular/standalone';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  // ✅ así se importa ReactiveFormsModule
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonButton
  ]
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;
  constructor(public fb: FormBuilder) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", [Validators.required]),
      'confirmacionPassword': new FormControl("", [Validators.required]),
    })




  }

  ngOnInit() {
  }
  guardar() {
    // método vacío, solo para que compile
    console.log("Presionaste Guardar");
  }

}
