import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html'
})
export class SearchComponent {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;
  @ViewChild('alert') alert!: ElementRef<HTMLDivElement>;

  constructor(private gifsService: GifsService) {}

  searchGif(searchTerm: string): void {
    if (searchTerm.trim().length === 0) {
      return;
    }
    this.gifsService.searchGifs(searchTerm);
    this.txtSearch.nativeElement.value = '';
  }
}
