import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { ReadAllComponent } from './components/read-all/read-all.component';
import { RouterOutlet } from '@angular/router';
import { FinalizadosComponent } from './components/finalizados/finalizados.component';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl:'app.component.html',
  imports: [HeaderComponent,FooterComponent,ReadAllComponent,RouterOutlet,FinalizadosComponent ],
 
})
export class AppComponent {

  title = 'todo';
}
