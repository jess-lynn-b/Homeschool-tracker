import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent {
  constructor(private taskService: TaskService) {}

  createList(title: string){
    this.taskService.createList(title).subscribe((response: any) => {
      console.log(response);
      // Now to redirect back to the /hourForm..._id
    }
  )};
}
