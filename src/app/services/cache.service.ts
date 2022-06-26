import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import hash from 'hash-it';
import { HttpParams } from '@angular/common/http';

interface Cache {
  [key: string]: {
    expires: Date,
    value: Observable<any>
  }
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  /**
   * cache lifetime
   */
  readonly CACHE_EXPIRATION = 3 * 60_000;

  private cache: Cache = {};

  getValue<T>(obj: any): Observable<T> | null {
    const key = this.obj2cacheKey(obj);
    const item = this.cache[key];

    if (!item) return null;
    if (new Date() > item.expires) {
      delete this.cache[key];
      return null;
    }
    return item.value;
  }

  setValue<T>(obj: any, value: Observable<T>) {
    this.cache[this.obj2cacheKey(obj)] = {
      expires: new Date(Date.now() + this.CACHE_EXPIRATION),
      value,
    };
  }

  clearCache() {
    this.cache = {};
  }

  /**
   * Returns unique hash from object
   * @param obj
   */
  private obj2cacheKey(obj: {url: string, params: HttpParams}): string {
    return hash(obj.url + obj.params.toString()).toString();
  }
}
