import { Routes } from '@angular/router';
import { MarcaListComponent } from './components/marca/marca-list/marca-list.component';
import { MarcaFormComponent } from './components/marca/marca-form/marca-form.component';
import { marcaResolver } from './components/marca/resolver/marca-resolver';
import { BateriaCompletaListComponent } from './components/bateriacompleta/bateriacompleta-list/bateriacompleta-list.component';
import { BateriaCompletaFormComponent } from './components/bateriacompleta/bateriacompleta-form/bateriacompleta-form.component';
import { bateriaCompletaResolver } from './components/bateriacompleta/resolver/bateriacompleta-resolver';
import { CategoriaListComponent } from './components/categoria/categoria-list/categoria-list.component';
import { categoriaResolver } from './components/categoria/resolver/categoria-resolver';
import { CategoriaFormComponent } from './components/categoria/categoria-form/categoria-form.component';
import { AcessorioListComponent } from './components/acessorio/acessorio-list/acessorio-list.component';
import { AcessorioFormComponent } from './components/acessorio/acessorio-form/acessorio-form.component';
import { acessorioResolver } from './components/acessorio/resolver/acessorio-resolver';



export const routes: Routes = [
    { path: 'marcas', component: MarcaListComponent, title: 'Lista de Marcas'},
    { path: 'marcas/new', component: MarcaFormComponent, title: 'Nova Marca'},
    { path: 'marcas/edit/:id', component: MarcaFormComponent, resolve: {marca: marcaResolver}},

    { path: 'bateriasCompleta', component: BateriaCompletaListComponent, title: 'Lista de Municipios'},
    { path: 'bateriasCompleta/new', component: BateriaCompletaFormComponent, title: 'Nova Bateria Completa'},
    { path: 'bateriasCompleta/edit/:id', component: BateriaCompletaFormComponent, resolve: {bateriaCompleta: bateriaCompletaResolver}},

    { path: 'categorias', component: CategoriaListComponent, title: 'Lista de Categorias'},
    { path: 'categorias/new', component: CategoriaFormComponent, title: 'Nova Categoria'},
    { path: 'categorias/edit/:id', component: CategoriaFormComponent, resolve: {categoria: categoriaResolver}},

    { path: 'acessorios', component: AcessorioListComponent, title: 'Lista de Acessorios'},
    { path: 'acessorios/new', component: AcessorioFormComponent, title: 'Nova Acessorio'},
    { path: 'acessorios/edit/:id', component: AcessorioFormComponent, resolve: {acessorio: acessorioResolver}},
    
    // { path: 'bateriasCompleta/new', component: BateriaCompletaFormComponent, title: 'Novo Municipio'},
    // { path: 'bateriasCompleta/edit/:id', component: BateriaCompletaFormComponent, resolve: {municipio: municipioResolver}}, 

];
