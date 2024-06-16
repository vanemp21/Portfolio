import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import projectsData from '../experience/experience.json';


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


   
  mostrarTexto(proyecto: any) {
    proyecto.mostrado = !proyecto.mostrado;
  }


}
