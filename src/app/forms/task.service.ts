import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { WebResquestService } from "./web-request.service";

@Injectable ({
  providedIn: 'root'
})

export class TaskService {
  constructor(private webReqService: WebResquestService) {}

  createList(title: string){
    // send web request to create a list
   this.createList
  }

}
