import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Marca } from '../../../models/marca.model';
import { BateriaCompletaService } from '../../../services/bateriacompleta.service';
import { MarcaService } from '../../../services/marca.service';
import { BateriaCompleta } from '../../../models/bateriacompleta.model';
import { Categoria } from '../../../models/categoria.model';
import { CategoriaService } from '../../../services/categoria.service';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-bateriacompleta-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, MatFormFieldModule,
    MatInputModule, MatButtonModule, MatCardModule, MatToolbarModule, 
    RouterModule, MatSelectModule],
  templateUrl: './bateriacompleta-form.component.html',
  styleUrl: './bateriacompleta-form.component.css'
})
export class BateriaCompletaFormComponent implements OnInit {

  formGroup: FormGroup;
  marcas: Marca[] = [];
  categorias: Categoria[] = [];

  constructor(private formBuilder: FormBuilder,
    private bateriaCompletaService: BateriaCompletaService,
    private marcaService: MarcaService,
    private categoriaService: CategoriaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.formGroup = formBuilder.group({
      id: [null],
      nomeBateria: ['', Validators.required],
      quantTambor: ['', Validators.required],
      descricao: ['', Validators.required],
      preco: ['', Validators.required],
      quantidadeEstoque: ['', Validators.required],
      nomeImagem: ['', Validators.required],
      marca: [null],
      categoria: [null]
    });
  }
  ngOnInit(): void {
    // Realiza ambas as chamadas dos serviços e espera que ambas sejam concluídas antes de inicializar o formulário
    forkJoin([
      this.marcaService.findAll(),
      this.categoriaService.findAll()
    ]).subscribe(([marcas, categorias]) => {
      this.marcas = marcas;
      this.categorias = categorias;
      this.initializeForm();
    });
  }

  initializeForm() {

    const bateriaCompleta: BateriaCompleta = this.activatedRoute.snapshot.data['bateriaCompleta'];

    // selecionando a marca
    const marca = this.marcas
      .find(marca => marca.id === (bateriaCompleta?.marca?.id || null)); 

      const categoria = this.categorias
      .find(categoria => categoria.id === (bateriaCompleta?.categoria?.id || null)); 

      this.formGroup = this.formBuilder.group({
        id: [(bateriaCompleta && bateriaCompleta.id) ? bateriaCompleta.id : null],
        nomeBateria: [(bateriaCompleta && bateriaCompleta.nomeBateria) ? bateriaCompleta.nomeBateria : '', Validators.required],
        quantTambor: [(bateriaCompleta && bateriaCompleta.quantTambor) ? bateriaCompleta.quantTambor : '', Validators.required],
        descricao: [(bateriaCompleta && bateriaCompleta.descricao) ? bateriaCompleta.descricao : '', Validators.required],
        preco: [(bateriaCompleta && bateriaCompleta.preco) ? bateriaCompleta.preco : '', Validators.required],
        quantidadeEstoque: [(bateriaCompleta && bateriaCompleta.quantidadeEstoque) ? bateriaCompleta.quantidadeEstoque : '', Validators.required],
        nomeImagem: [(bateriaCompleta && bateriaCompleta.nomeImagem) ? bateriaCompleta.nomeImagem : '', Validators.required],
        marca: [marca],
        categoria: [categoria]
      });
  }

  salvar() {
    if (this.formGroup.valid) {
      const bateriaCompleta = this.formGroup.value;
      if (bateriaCompleta.id ==null) {
        console.log('Marca selecionada:', this.formGroup.value.marca);
console.log('Categoria selecionada:', this.formGroup.value.categoria);
        this.bateriaCompletaService.insert(bateriaCompleta).subscribe({
          next: (bateriaCompletaCadastrada) => {
            this.router.navigateByUrl('/bateriasCompleta');
          },
          error: (err) => {
            console.log('Erro ao Incluir' + JSON.stringify(err));
          }
        });
      } else {
        this.bateriaCompletaService.update(bateriaCompleta).subscribe({
          next: (bateriaCompletaAlterada) => {
            this.router.navigateByUrl('/bateriasCompleta');
          },
          error: (err) => {
            console.log('Erro ao Editar' + JSON.stringify(err));
          }
        });
      }
    }
  }

  excluir() {
    if (this.formGroup.valid) {
      const bateriaCompleta = this.formGroup.value;
      if (bateriaCompleta.id != null) {
        this.bateriaCompletaService.delete(bateriaCompleta).subscribe({
          next: () => {
            this.router.navigateByUrl('/bateriascompleta');
          },
          error: (err) => {
            console.log('Erro ao Excluir' + JSON.stringify(err));
          }
        });
      }
    }
  }

}