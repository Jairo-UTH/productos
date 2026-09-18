import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { CreateProductRequest, GetProductResponse, ReturnProductRequest } from '../interfaces/produc';
import { Observable } from '../../../node_modules/rxjs/dist/types/index';

@Service()
export class ProductoServicios {

  private http = inject(HttpClient)
  private endPoint = `${environment.apiUrl}/product`

  create(request: CreateProductRequest): Observable<number> {
    const formData = new FormData();
    formData.append('categoryId', request.categoryId.toString())
    formData.append('name', request.name)
    formData.append('price', request.price.toString())
    formData.append('stockQuantity', request.stockQuantity.toString())

    if (request.image) formData.append('image', request.image)

    return this.http.post<number>(`${this.endPoint}/create`, formData)

  }


  getAll(request: ReturnProductRequest): Observable<GetProductResponse[]>{
    return this.http.get<GetProductResponse[]>
      (`${this.endPoint}/getAll?categoryId=${request.categoryId}`)
  }
  
}
