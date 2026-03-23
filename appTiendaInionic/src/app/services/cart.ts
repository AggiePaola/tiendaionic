import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private carrito: any[] = [];

  agregar(producto: any) {
    const item = this.carrito.find(p => p.id === producto.id);

    if (item) {
      item.cantidad++;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
  }

  obtenerCarrito() {
    return this.carrito;
  }

  eliminar(id: number) {
    this.carrito = this.carrito.filter(p => p.id !== id);
  }

  total() {
    return this.carrito.reduce((sum, p) => sum + (p.price * p.cantidad), 0);
  }
}