import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonCard, IonCardHeader, IonButton, IonFooter, IonButtons } from '@ionic/angular/standalone';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonLabel, IonItem, IonCard, IonCardHeader, IonButton, IonFooter, IonButtons, RouterModule]
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;


  constructor(public fb: FormBuilder) {
    this.formularioLogin = this.fb.group(
      {
        'nombre': new FormControl("", Validators.required),
        'password': new FormControl("", Validators.required),
      }
    )
  }

  ngOnInit() {
  }

}
