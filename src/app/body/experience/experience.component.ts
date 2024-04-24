import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import proyectosData from '../experience/experience.json';
import idiomasData from '../experience/languages.json';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgIf, TranslateModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  mostrar: boolean = false;
  proyectos = proyectosData;
  idiomas = idiomasData;

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
