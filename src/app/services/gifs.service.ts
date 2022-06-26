import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

interface GifSearchParams {
  type: string,
  offset: string,
  api_key: string,
  s?: string,
  q?: string,
}

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  paths = {
    search: `/${environment.GIPHY_API_VERSION}/gifs/search`,
    translate: `/${environment.GIPHY_API_VERSION}/gifs/translate`,
  };

  searchParams: GifSearchParams = {
    type: "gif",
    offset: "0",
    api_key: environment.GIPHY_API_KEY,
  };


  constructor(private http: HttpService) { }

  translate(verb: string) {
    const url = new URL(environment.GIPHY_API_URL);
    url.pathname = this.paths.translate;
    this.searchParams.s = verb;
    return this.http.get(url.toString(), this.searchParams);
  }
}
