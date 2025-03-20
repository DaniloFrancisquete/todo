import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule,MatInputModule, MatDatepickerModule,MatNativeDateModule,MatButtonModule ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{
  
  todo: Todo = {
    titulo:'',
    descricao:'',
    dataParaFinalizar:new Date(),
    finalizado:false
  }


  constructor(private router: Router) {

  }
  
  ngOnInit(): void {
    
  }

  cancel(): void {
    this.router.navigate(['']);
  }

}
