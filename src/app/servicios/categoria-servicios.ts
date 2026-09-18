import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from '../../../node_modules/rxjs/dist/types/index';
import { getCategoryResponse } from '../interfaces/categorias';

@Service()
export class CategoriaServicios
{
  private http = inject(HttpClient)
  private endPoint = `${environment.apiUrl}/category`

  getAll(): Observable<getCategoryResponse[]> {
    return this.http.get<getCategoryResponse[]>(`${this.endPoint}/getAll`)
  }

}

