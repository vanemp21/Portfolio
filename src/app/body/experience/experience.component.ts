import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  mostrar: boolean = false;

  proyectos = [
    { 
      nombre: 'Proyecto Heroes',
      tecnologia: 'ReactJs',
      descripcion: 'Proyecto donde implementé funcionalidades de búsqueda y login. Esta aplicación permite a los usuarios utilizar una búsqueda y descripción avanzada de los héroes, donde se ha utilizado la libreria de Tailwind para los estilos',
      githubUrl: 'https://github.com/vanemp21/Proyecto-heroes--ReactJs',

      mostrado: false
    },
    { 
      nombre: 'Proyecto Calendario',
      tecnologia: 'ReactJs',
      descripcion: 'Proyecto que utiliza Firebase como base de datos, donde implementé consultas de añadir, eliminar y editar elementos dinámicamente. Esta aplicación permite a los usuarios agregar nuevos elementos, eliminar los existentes y actualizar la información de los elementos ya almacenados en la base de datos Firebase, todo en tiempo real, utilizando la libreria de Tailwind para los estilos.',
      githubUrl: 'https://github.com/vanemp21/Proyecto-Calendario--ReacJS',
      mostrado: false
    },
    { 
      nombre: 'Proyecto Agenda',
      tecnologia: 'ReactJs',
      descripcion: 'Proyecto que utiliza Firebase como base de datos, donde implementé consultas de añadir, eliminar y editar elementos dinámicamente. Esta aplicación permite a los usuarios agregar nuevos elementos, eliminar los existentes y actualizar la información de los elementos ya almacenados en la base de datos Firebase, todo en tiempo real, utilizando la libreria de Tailwind para los estilos.',
      githubUrl: 'https://github.com/vanemp21/Proyecto-journal--ReactJs',
      mostrado: false
    },
    {
      nombre: 'Proyecto Calculadora',
      tecnologia: 'Angular',
      descripcion: 'Proyecto para hacer cálculos matemáticos.',
      githubUrl: 'https://github.com/vanemp21/Proyecto-Calculadora--Angular',
      mostrado: false,
    },
    {
      nombre: 'Proyecto Spotify',
      tecnologia: 'Angular',
      descripcion: 'Proyecto de reproducción y búsqueda de música mediante una <a href="https://github.com/vanemp21/Proyecto-Spotify-Api--Angular">API local</a> estilo Spotify, con login y sus respectivas cookies funcionales.',
      githubUrl: 'https://github.com/vanemp21/Proyecto-Spotify--Angular',
      mostrado: false,
    }
    ,
    {
      nombre: 'Proyecto TFG',
      tecnologia: 'PHP',
      descripcion: 'Proyecto de un restaurante para el trabajo fin de curso en el que se realizan consultas de añadir, eliminar o editar en la base de datos MySQL con PHP, además de mostrar el resultado de factura en PDF mediante la librería FPDF.',
      githubUrl: 'https://github.com/vanemp21/Proyecto-TFG--PHP',
      mostrado:false,

    }
    
  ];
  idiomas = [
    { nombre: 'Español', puntuacion: 5 },
    { nombre: 'Inglés', puntuacion: 4 },

    { nombre: 'Valenciano', puntuacion: 5 },
    { nombre: 'Catalán', puntuacion: 5 },
    { nombre: 'Alemán', puntuacion: 2 }
  ];

  generarEstrellas(puntuacion: number): any[] {
    return Array(puntuacion).fill(0).map((x, i) => i);
  }
  mostrarTexto(proyecto: any) {
    proyecto.mostrado = !proyecto.mostrado;
  }
}
