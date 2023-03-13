import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interfaces/Gif';

@Component({
  selector: 'app-gifs-grid',
  templateUrl: './gifs-grid.component.html',
})
export class GifsGridComponent {

  get gifs(): Gif[] {
    return this.gifsService.response;
  }

  constructor(private gifsService: GifsService) {}
}
