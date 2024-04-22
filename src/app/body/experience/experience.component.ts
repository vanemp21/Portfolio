import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgIf, TranslateModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent{
  mostrar: boolean = false;
  proyectos = [
    {
      id: 'proyectoHeroes',
      nombre: 'Proyecto Héroes',
      tecnologia: 'ReactJs',
      descripcionKey: 'proyectoHeroesDescripcion',
      githubUrl: 'https://github.com/vanemp21/Proyecto-heroes--ReactJs',
      etiquetas: ['ReactJs','CSS','HTML','Firebase','Tailwind','JavaScript'],
      mostrado: false,
    },
    {
      id: 'proyectoCalendario',
      nombre: 'Proyecto Calendario',
      tecnologia: 'ReactJs',
      descripcionKey: 'proyectoCalendarioDescripcion',
      githubUrl: 'https://github.com/vanemp21/Proyecto-Calendario--ReacJS',
      etiquetas: ['ReactJs','CSS','HTML','Tailwind','JavaScript','Firebase'],
      mostrado: false,
    },
    {
      id: 'proyectoAgenda',
      nombre: 'Proyecto Agenda',
      tecnologia: 'ReactJs',
      descripcionKey: 'proyectoAgendaDescripcion',
      githubUrl: 'https://github.com/vanemp21/Proyecto-journal--ReactJs',
      etiquetas: ['ReactJs','CSS','HTML','Tailwind','JavaScript','Firebase'],
      mostrado: false,
    },
    {
      id: 'proyectoCalculadora',
      nombre: 'Proyecto Calculadora',
      tecnologia: 'Angular',
      descripcionKey: 'proyectoCalculadoraDescripcion',
      githubUrl: 'https://github.com/vanemp21/Proyecto-Calculadora--Angular',
      etiquetas: ['Angular','TypeScript','Bootstrap','CSS','HTML'],
      mostrado: false,
    },
    {
      id: 'proyectoSpotify',
      nombre: 'Proyecto Spotify',
      tecnologia: 'Angular',
      descripcionKey: 'proyectoSpotifyDescripcion',
      githubUrl: 'https://github.com/vanemp21/Proyecto-Spotify--Angular',
      etiquetas: ['Angular','TypeScript','Bootstrap','CSS','HTML'],
      mostrado: false,
    },
    {
      id: 'proyectoTfg',
      nombre: 'Proyecto TFG',
      tecnologia: 'PHP',
      descripcionKey: 'proyectoTfgDescripcion',
      githubUrl: 'https://github.com/vanemp21/Proyecto-TFG--PHP',
      etiquetas: ['PHP','JavaScript','Bootstrap','CSS','HTML','MySQL'],
      mostrado: false,
    },
  ];
  idiomas = [
    { nombre: 'Español', puntuacion: 5 },
    { nombre: 'Inglés', puntuacion: 4 },
    { nombre: 'Valenciano', puntuacion: 5 },
    { nombre: 'Catalán', puntuacion: 5 },
    { nombre: 'Alemán', puntuacion: 2 },
  ];

  generarEstrellas(puntuacion: number): any[] {
    return Array(puntuacion)
      .fill(0)
      .map((x, i) => i);
  }
  mostrarTexto(proyecto: any) {
    proyecto.mostrado = !proyecto.mostrado;
  }

  
  constructor(private translateService: TranslateService) {}
}
