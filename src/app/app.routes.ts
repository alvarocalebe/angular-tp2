import { Routes } from '@angular/router';
import { ParteBateriaListComponent } from './components/partebateria/partebateria-list/parteBateria-list.component';
import { ParteBateriaFormComponent } from './components/partebateria/partebateria-form/parteBateria-form.component';



export const routes: Routes = [
    { path: 'partesbateria/list', component: ParteBateriaListComponent, title: 'Lista de Partes'},
    { path: 'partesbateria/form', component: ParteBateriaFormComponent, title: 'Lista de Partes'}

   
];
