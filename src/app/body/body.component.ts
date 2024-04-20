import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [AboutComponent, ContactComponent, ExperienceComponent, SkillsComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
