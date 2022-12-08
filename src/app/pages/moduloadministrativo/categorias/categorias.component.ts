import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias:any[]

  constructor(private catService:CategoriaService) { }

  ngOnInit(): void {
    this.catService.listarCategoria().subscribe(
      (dato:any) => {
        this.categorias = dato;
        
      }
    )
  }

}
