import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { GifsPageComponent } from "./gifs-page/gifs-page.component";
import { SearchComponent } from "./search/search.component";
import { GifsGridComponent } from './gifs-grid/gifs-grid.component';
import { GifsService } from "./services/gifs.service";

@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    GifsGridComponent,
  ],
  exports: [
    GifsPageComponent,
    SearchComponent,
    GifsGridComponent,
  ],
  imports: [ CommonModule ],
  providers: [ GifsService ],
})
export class GifsModule {}
