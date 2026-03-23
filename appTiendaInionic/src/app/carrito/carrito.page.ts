import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonButton, IonItem, IonLabel
} from '@ionic/angular/standalone';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  standalone: true,
  imports: [
    CommonModule,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonButton, IonItem, IonLabel
  ]
})
export class CarritoPage {
  constructor(public cartService: CartService) { }
}