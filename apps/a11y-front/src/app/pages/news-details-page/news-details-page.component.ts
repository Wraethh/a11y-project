import {Component, inject, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {News, NewsService} from "../news-page/news.service";
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {Observable} from "rxjs";

@Component({
  selector: 'a11y-news-details-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './news-details-page.component.html',
  styleUrls: ['./news-details-page.component.scss'],
})
export class NewsDetailsPageComponent implements OnInit {
  private readonly newsService = inject(NewsService);
  @Input() id: string = '';

  news$: Observable<News> | undefined

  ngOnInit() {
    this.news$= this.newsService.getNewsById(this.id)
  }
}
