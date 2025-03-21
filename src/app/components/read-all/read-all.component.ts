import { Todo } from './../../models/todo';
import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TodoService } from '../../services/todo.service';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-read-all',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule,CommonModule,MatBadgeModule, MatSnackBarModule,RouterLink],
  templateUrl: './read-all.component.html',
  styleUrl: './read-all.component.css'
})
export class ReadAllComponent implements OnInit{
  
  closed = 0;
  list: Todo[] = [];
  listFinished: Todo[] = [];
  
  constructor(private service: TodoService, private router: Router){}
  
  
  ngOnInit(): void { 
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach (todo => {
        if(todo.finalizado) {
          this.listFinished.push(todo);
        } else {
          this.list.push(todo)
        }
      })
      
      this.closed = this.listFinished.length
    })
  }

  finalizar(item: Todo): void {
    item.finalizado = true;
    this.service.update(item).subscribe(() => {
      this.service.message('Tarefa finalizada com sucesso!');
      this.list = this.list.filter(todo => todo.id !== item.id);
    })
  }

delete(id: any):void {
  this.service.delete(id).subscribe((resposta) => {
    if(resposta === null) {
      this.service.message('Tarefa deletada com sucesso!');
      this.list = this.list.filter(todo => todo.id !== id);
    }
  })
}

navegarParaFinalizados(): void {
this.router.navigate(['finalizados'])
}

}
