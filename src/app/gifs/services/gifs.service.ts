import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifResponse } from '../interfaces/Gif';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _giftApiKey: string = 'di6yrPIM8cWzdib3FxaSSFM96boUxPV3';
  private URL_SERVICE: string = 'https://api.giphy.com/v1/gifs';
  private _searchHistory: string[] = [];
  public response: Gif[] = [];

  get getSearchHistory(): string[] {
    return [ ...this._searchHistory ];
  }

  constructor(private http: HttpClient) {
    this.setGifFromLocalStorage();
  }

  searchGifs(query: string = ''): void {
    query = query.toLocaleLowerCase();

    if (!this._searchHistory.includes(query)) {
      this._searchHistory.unshift(query);
      this._searchHistory = this._searchHistory.splice(0, 10);
      localStorage.setItem('hisroty', JSON.stringify(this._searchHistory));
    }

    const params = new HttpParams()
      .set('api_key', this._giftApiKey)
      .set('limit', 10)
      .set('q', query)

    this.http.get<GifResponse>(`${this.URL_SERVICE}/search`, { params })
      .subscribe(response => {
        this.response = response.data;
        localStorage.setItem('lastSearch', JSON.stringify(this.response));
      });
  }

  private setGifFromLocalStorage(): void {
    this._searchHistory = JSON.parse(localStorage.getItem('hisroty')!) || [];
    this.response = JSON.parse(localStorage.getItem('lastSearch')!);
  }

}
