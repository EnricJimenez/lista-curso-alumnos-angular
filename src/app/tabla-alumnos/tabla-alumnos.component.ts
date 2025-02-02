import { Component, OnInit } from '@angular/core';
import { alumnos } from './mock';
import { Alumno } from '../models/alumno-to';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrl: './tabla-alumnos.component.css'
})
export class TablaAlumnosComponent implements OnInit {

  public alumnos?: Alumno[]

  ngOnInit(): void{
    this.alumnos = alumnos
  }
}
