import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

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


  constructor(private router: Router, private service: TodoService) {}

  
  
  ngOnInit(): void {
    
  }

  create(): void {
    this.formatData();
    this.service.create(this.todo).subscribe((resposta) => {
    this.service.message('to-do criado com sucesso!');
    this.router.navigate(['']);
    },err => {
      this.service.message('falha ao criar Todo-do');
      this.router.navigate(['']);  
    })
  }

  cancel(): void {
    this.router.navigate(['']);
  }

   formatData(): void {
    let data = new Date(this.todo.dataParaFinalizar)
    this.todo.dataParaFinalizar = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
   } 
}
