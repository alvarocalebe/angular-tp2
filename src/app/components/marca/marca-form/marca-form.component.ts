import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { MarcaService } from '../../../services/marca.service';

@Component({
  selector: 'app-marca-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './marca-form.component.html',
  styleUrl: './marca-form.component.css'
})
export class MarcaFormComponent {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private marcaService: MarcaService,
              private router: Router) {

    this.formGroup = formBuilder.group({
      nomeMarca: ['', Validators.required],
      paisOrigem: ['', Validators.required]
    });

  }

  onSubmit() {
    if (this.formGroup.valid) {
      const novaMarca = this.formGroup.value;
      this.marcaService.salvar(novaMarca).subscribe({
        next: (marcaCadastrado) => {
          this.router.navigateByUrl('/marcas');
        },
        error: (err) => {
          console.log('Erro ao salvar' + JSON.stringify(err));
        }
      });
    }
  }
}