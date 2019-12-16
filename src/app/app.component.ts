import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private titleValue = 'Goldmine Festival';
  private description = 'Country music has found a new home at Big Bear Mountain. Goldmine Festival will debut in Fall 2021 with big country music stars.';
  constructor(private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.title.setTitle(this.titleValue);
    this.meta.addTags([
      { name: 'description', content: this.description },
      { name: 'keywords', content: 'Country, Country Music, Festival, Big Bear, Big Bear Mountain, Goldmine, Goldmine Country Music Festival, Goldmine Festival' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: this.titleValue },
      { name: 'date', content: '12-15-2019', scheme: 'MM-DD-YYYY' },
      { name: 'og:image', content: 'https://goldminefestival.com/assets/mountain-bg.png' },
      { name: 'og:image:alt', content: this.titleValue },
      { name: 'og:image:width', content: '1200' },
      { name: 'og:image:height', content: '630' },
      { charset: 'UTF-8' }
    ]);
    const canonical: HTMLLinkElement = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', document.URL);
    document.head.appendChild(canonical);
  }
}
