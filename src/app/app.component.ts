import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Goldmine Festival');
    this.meta.updateTag({ name: 'description', content: 'A new and exciting country music festival is coming to the mountains!' });
  }
}
