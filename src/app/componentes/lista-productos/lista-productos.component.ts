import { Component, OnInit } from '@angular/core';
import { Producto } from "./producto"
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: Producto[] = []

  constructor(private productoServicio: ProductoService) { }

  ngOnInit(): void {
    this.listProducts()
  }
  listProducts() {
    this.productoServicio.getProductList().subscribe(
      data => {
        this.productos = data;
      }
    )
  }

}
