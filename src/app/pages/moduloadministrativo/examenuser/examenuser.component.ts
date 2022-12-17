import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ExamenService } from 'src/app/service/examen.service';
import { ListaestudianteService } from 'src/app/service/listaestudiante.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-examenuser',
  templateUrl: './examenuser.component.html',
  styleUrls: ['./examenuser.component.css']
})
export class ExamenuserComponent implements OnInit {
  estudiantes:any;
  animalControl = new FormControl<any | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  examenes : any;
  examenControl = new FormControl('');

  constructor(private estudiantelista:ListaestudianteService, private examservice: ExamenService, private userservice: UserService) { }

  ngOnInit(): void {

    this.estudiantelista.listarEstudiantes().subscribe(
      (dato:any) => {
        this.estudiantes = dato;
        console.log(this.estudiantes)
      }
    )

    this.examservice.listarExamen().subscribe(
      (dato:any) => {
        this.examenes=dato;
        console.log(this.examenes)
      }
    )
  }

  asignarUsuarios(): void {
    console.log(this.animalControl)
    console.log(this.examenControl)
  }
}

