import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import projectsData from '../experience/experience.json';
import languagesData from '../experience/languages.json';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  mostrar: boolean = false;
  proyectos = projectsData;
  idiomas = languagesData;

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
