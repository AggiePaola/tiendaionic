import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonLabel, IonItem, IonInput, IonCard, IonCardHeader,
  IonButton, IonFooter, IonButtons
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonItem,
    IonInput,
    IonCard,
    IonCardHeader,
    IonButton,
    IonFooter,
    IonButtons
  ]
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, private router: Router) {
    this.formularioLogin = this.fb.group({
      nombre: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() { }

  ingresar() {
    console.log("Presionaste Ingresar");
    this.router.navigateByUrl('/home');
  }
}