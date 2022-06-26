import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private cacheService: CacheService,
  ) { }

  /**
   *
   * @param url - url to be requested as a GET
   * @param params - additional HTTP-params
   */
  public get<T>(url: string, params = {}): Observable<T> {
    const cached = this.cacheService.getValue<T>({url, params});

    // TODO: fix caching stuff
    // if (cached) return cached;

    const req$ = this.http.get<T>(url, { params }).pipe(
      // NOTE: makes observable HOT
      //       that means that any new subscription will get the last emitted value
      //       and request will not be performed multiple times
      shareReplay(1)
    );
    // NOTE: we put observable into cache to replay last emitted values without performing requests
    this.cacheService.setValue<T>({url, params}, req$);
    return req$;
  }
}
