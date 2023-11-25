import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './componentes/empresa/empresa.component';

const routes: Routes = [
  { path: "empresas", component: EmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
