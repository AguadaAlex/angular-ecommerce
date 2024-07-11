import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Producto } from '../componentes/lista-productos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl = "http://localhost:8080/api/products";

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Producto[]> {
    return this.httpClient.get<GetRespose>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    )
  }
}

interface GetRespose{
  _embedded: {
    products : Producto[];
  }
}
