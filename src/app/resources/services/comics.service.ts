import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Md5} from 'ts-md5';
import {map} from 'rxjs/operators';
import { Comic } from '../class/comic';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  private apiKey = '0ef71d2bc73812aa5a704d6f92927f5e';
  private privateKey = 'e441acfe782ae687bc72f1f310db972edec666c6';
  private url = 'https://gateway.marvel.com/v1/public/comics';
  private hash = Md5.hashStr(`${this.privateKey}${this.apiKey}`);

  constructor(private http: HttpClient) { }

  public listComics( offset?: number, limit?: number): Observable<Comic[]> {
    if (!limit) {
      limit = 10;
    }
    if (!offset) {
      offset = 0;
    }
    return this.http.get<Array<any>>(`
      ${this.url}?format=comic&formatType=comic&noVariants=true&orderBy=title&limit=${limit}
      &offset=${offset}&apikey=${this.apiKey}&hash=${this.hash}`
    )
    .pipe(
      map((payload: any) => {
        return payload.data.results.map(item => new Comic(item));
      })
    );
  }
}
