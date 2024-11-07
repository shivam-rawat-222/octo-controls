import { Component } from '@angular/core';

import { fromEvent } from 'rxjs';
import { TranslatorService } from './shared/translator/translator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slica';
  constructor(private translate: TranslatorService) {

  }
  ngOnInit() {

    fromEvent(window, 'load').subscribe(() => document.querySelector('#glb-loader')?.classList.remove('loaderShow'));
  }

}
