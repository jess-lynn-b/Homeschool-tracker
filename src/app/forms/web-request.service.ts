import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable ({
  providedIn: 'root'
})

export class WebResquestService {

  constructor(private http: HttpClient) {
  }
  onRecievePost(getData: { title: string; content: string}) {
    this.http
      .get('https://homeschooling-to-dreams-default-rtdb.firebaseio.com/get.json')
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
  onCreatePost(postData: { title: string; content: string}) {
    this.http
      .post('https://homeschooling-to-dreams-default-rtdb.firebaseio.com/posts.json', postData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  path(url: string, payload: Object){
    return this.http.patch(`$(this.ROOT_URL)/$(url)`, payload);
  }
  delete(url: string) {
    return this.http.delete(`$(this.ROOT_URL)/$(url)`);
  }
}
