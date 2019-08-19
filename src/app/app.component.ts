import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template1';
  constructor(private titleService: Title, private meta: Meta){
    titleService.setTitle('Hello there')
    meta.addTag({name: 'description', content: ''})
  }
}
