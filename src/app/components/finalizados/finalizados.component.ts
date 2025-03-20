import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';
import { Router } from '@angular/router';




@Component({
  selector: 'app-finalizados',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule,CommonModule,MatBadgeModule, MatSnackBarModule],
  templateUrl: './finalizados.component.html',
  styleUrl: './finalizados.component.css'
})
export class FinalizadosComponent {
  listFinished: Todo[] = [];
    
    constructor(private service: TodoService, private router: Router ){}
    
    
    ngOnInit(): void { 
      this.findAll();
    }
  
    findAll(): void {
      this.service.findAll().subscribe((resposta) => {
        resposta.forEach (todo => {
          if(todo.finalizado) {
            this.listFinished.push(todo);
          } 
        })
        
      })
    }
  
    voltar(): void {
      this.router.navigate([''])
    }

}
