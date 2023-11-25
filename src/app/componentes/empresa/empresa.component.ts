import { Component, OnInit } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Empresa } from 'src/app/entidades/empresa';
import { EmpresaService } from 'src/app/servicios/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  public textoBusqueda: String = "";
  public empresas: Empresa[] = [];

  public columnas = [
    { name: 'Nombre', prop: 'nombre' },
    { name: 'Codigo', prop: 'id' },
    { name: 'País', prop: 'pais.nombre' },
  ];

  public tipoSeleccion = SelectionType;
  public modoColumna = ColumnMode;

  constructor(
    private empresaService: EmpresaService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.empresaService.listar().subscribe(
      respuesta => {
        this.empresas = respuesta;
      }
    );
  }

  buscar() {

  }

  agregar() {

  }

  modificar() {

  }

  verificarEliminar() {

  }

  public onActivate(event: any) {
  }

}
