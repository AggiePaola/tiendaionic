import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private carrito: any[] = [];

  constructor() {
    const data = localStorage.getItem('carrito');
    this.carrito = data ? JSON.parse(data) : [];
  }

  private guardar() {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  agregar(producto: any) {
    const item = this.carrito.find(p => p.id === producto.id);

    if (item) {
      item.cantidad++;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }

    this.guardar();
  }

  obtenerCarrito() {
    return this.carrito;
  }

  eliminar(id: number) {
    this.carrito = this.carrito.filter(p => p.id !== id);
    this.guardar();
  }

  total() {
    return this.carrito.reduce((sum, p) => sum + (p.price * p.cantidad), 0);
  }

  limpiar() {
    this.carrito = [];
    this.guardar();
  }
}