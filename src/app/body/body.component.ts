import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SchoolingComponent } from './schooling/schooling.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    AboutComponent,
    ContactComponent,
    SchoolingComponent,
    ExperienceComponent,
    SkillsComponent,
    TranslateModule,
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {}
