import { Routes } from '@angular/router';
import { MarcaListComponent } from './components/marca/marca-list/marca-list.component';
import { MarcaFormComponent } from './components/marca/marca-form/marca-form.component';
import { marcaResolver } from './components/marca/resolver/marca-resolver';
import { BateriaCompletaListComponent } from './components/bateriacompleta/bateriacompleta-list/bateriacompleta-list.component';
import { BateriaCompletaFormComponent } from './components/bateriacompleta/bateriacompleta-form/bateriacompleta-form.component';
import { bateriaCompletaResolver } from './components/bateriacompleta/resolver/bateriacompleta-resolver';



export const routes: Routes = [
    { path: 'marcas', component: MarcaListComponent, title: 'Lista de Marcas'},
    { path: 'marcas/new', component: MarcaFormComponent, title: 'Nova Marca'},
    { path: 'marcas/edit/:id', component: MarcaFormComponent, resolve: {marca: marcaResolver}},

    { path: 'bateriasCompleta', component: BateriaCompletaListComponent, title: 'Lista de Municipios'},
    { path: 'bateriasCompleta/new', component: BateriaCompletaFormComponent, title: 'Nova Bateria Completa'},
    { path: 'bateriasCompleta/edit/:id', component: BateriaCompletaFormComponent, resolve: {bateriaCompleta: bateriaCompletaResolver}},
    // { path: 'bateriasCompleta/new', component: BateriaCompletaFormComponent, title: 'Novo Municipio'},
    // { path: 'bateriasCompleta/edit/:id', component: BateriaCompletaFormComponent, resolve: {municipio: municipioResolver}}, 

];
