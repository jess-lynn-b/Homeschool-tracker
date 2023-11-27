import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TaskService } from './task.service';

@Component({
  selector: 'app-mission',
  templateUrl: './hourForm.component.html',
  styleUrls: ['./hourForm.component.css']
})

export class HourFormComponent {
  constructor(private taskService: TaskService){}


}

