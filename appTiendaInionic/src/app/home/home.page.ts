import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class HomePage implements OnInit {

  productos: any[] = [];
  cargando: boolean = true;

  constructor(
    private http: HttpClient,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.http.get<any[]>('https://fakestoreapi.com/products')
      .subscribe({
        next: (data) => {
          this.productos = data;
          this.cargando = false;
        },
        error: (err) => {
          console.error('Error:', err);
          this.cargando = false;
        }
      });
  }

  agregarAlCarrito(producto: any) {
    this.cartService.agregar(producto);
    console.log('Agregado al carrito:', producto.title);
  }

}