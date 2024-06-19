import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
 


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
 
}
