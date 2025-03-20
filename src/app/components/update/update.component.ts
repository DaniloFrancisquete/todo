import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule,MatInputModule, MatDatepickerModule, MatNativeDateModule,MatButtonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {

  todo: Todo = {
    titulo:'',
    descricao:'',
    dataParaFinalizar:new Date(),
    finalizado:false
  }


  constructor(private router: Router, private service: TodoService, private route: ActivatedRoute) {}

  
  
  ngOnInit(): void {
    this.todo.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  update(): void {
    this.service.update(this.todo).subscribe((resposta) => {
      this.service.message('Informações atualizadas com sucesso!');
      this.router.navigate(['']);
    }, error => {
      this.service.message('Falha ap atualizar To-do!');
      this.router.navigate(['']);
    })
  }

  findById(): void {
    this.service.FinById(this.todo.id).subscribe((resposta) => {
      this.todo = resposta;
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
