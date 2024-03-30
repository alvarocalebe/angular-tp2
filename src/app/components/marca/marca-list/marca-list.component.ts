import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Marca } from '../../../models/marca.model';
import { MarcaService } from '../../../services/marca.service';

@Component({
  selector: 'app-marca-list',
  standalone: true,
  imports: [NgFor, MatTableModule],
  templateUrl: './marca-list.component.html',
  styleUrl: './marca-list.component.css'
})



export class MarcaListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nomeMarca', 'paisOrigem'];
  marcas: Marca[] = [];

  constructor(private marcaService: MarcaService) {

  }

  ngOnInit(): void {
    this.marcaService.getMarcas().subscribe(data => {
      this.marcas = data;
    })
  }
  }