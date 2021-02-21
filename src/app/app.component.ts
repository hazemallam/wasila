import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app.component.css']
 
})
export class AppComponent {
  title = 'wasila-angular';

  constructor(public translate: TranslateService){

  }
}
