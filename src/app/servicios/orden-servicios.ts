
import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from '../../../node_modules/rxjs/dist/types/index';
import { CreateOrderRequest, GetOrderResponse } from '../interfaces/ordenes';

@Service()
export class OrdenServicios {
  private http = inject(HttpClient)
  private endPoint = `${environment.apiUrl}/order`

  create(request: CreateOrderRequest): Observable<number> {
    return this.http.post<number>(`${this.endPoint}/create`,request)

  }

  getAll(): Observable<GetOrderResponse[]> {
    return this.http.get<GetOrderResponse[]>(`${this.endPoint}/getAll`)
  }
}
