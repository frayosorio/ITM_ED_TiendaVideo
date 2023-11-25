import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../entidades/empresa';

const URL = `${environment.urlAPI}empresas/`;

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(
    private http: HttpClient
  ) { }

  public listar(): Observable<Empresa[]> {
    const urlT = `${URL}listar`;
    return this.http.get<Empresa[]>(urlT);
  }

}
