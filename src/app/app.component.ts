import { Component, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { BodyComponent } from './body/body.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { provideTranslation } from './providers/translation';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BodyComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }



}
