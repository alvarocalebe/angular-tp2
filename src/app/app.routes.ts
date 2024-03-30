import { Routes } from '@angular/router';
import { ParteBateriaListComponent } from './components/partebateria/partebateria-list/parteBateria-list.component';
import { ParteBateriaFormComponent } from './components/partebateria/partebateria-form/parteBateria-form.component';
import { MarcaListComponent } from './components/marca/marca-list/marca-list.component';
import { MarcaFormComponent } from './components/marca/marca-form/marca-form.component';



export const routes: Routes = [
    { path: 'marcas', component: MarcaListComponent, title: 'Lista de Marcas'},
    { path: 'marcas/new', component: MarcaFormComponent, title: 'Nova Marca'},

    // { path: 'partesbateria/list', component: ParteBateriaListComponent, title: 'Lista de Partes'},
    // { path: 'partesbateria/form', component: ParteBateriaFormComponent, title: 'Lista de Partes'},

    // { path: 'categorias/list', component: CategoriaListComponent, title: 'Lista de Categorias'},
    // { path: 'categorias/form', component: CategoriaFormComponent, title: 'Formulário de Categoria'},

    // { path: 'bateria-completa/list', component: BateriaCompletaListComponent, title: 'Lista de Baterias Completas'},
    // { path: 'bateria-completa/form', component: BateriaCompletaFormComponent, title: 'Formulário de Bateria Completa'},

    // { path: 'acessorio/list', component: AcessorioListComponent, title: 'Lista de Acessórios'},
    // { path: 'acessorio/form', component: AcessorioFormComponent, title: 'Formulário de Acessório'},

    // { path: 'baqueta/list', component: BaquetaListComponent, title: 'Lista de Baquetas'},
    // { path: 'baqueta/form', component: BaquetaFormComponent, title: 'Formulário de Baqueta'},

    // { path: 'tambor-avulso/list', component: TamborAvulsoListComponent, title: 'Lista de Tambores Avulsos'},
    // { path: 'tambor-avulso/form', component: TamborAvulsoFormComponent, title: 'Formulário de Tambor Avulso'},

    // { path: 'cupom-promocional/list', component: CupomPromocionalListComponent, title: 'Lista de Cupons Promocionais'},
    // { path: 'cupom-promocional/form', component: CupomPromocionalFormComponent, title: 'Formulário de Cupom Promocional'}
   
];
