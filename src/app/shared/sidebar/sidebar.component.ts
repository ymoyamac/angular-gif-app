import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  get history(): string[] {
    return this.gifsService.getSearchHistory;
  }

  constructor (private gifsService: GifsService) {}

  searchGifWithHistory(query: string): void {
    this.gifsService.searchGifs(query);
  }
}
