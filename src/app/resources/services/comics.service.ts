import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Md5} from 'ts-md5/dist/md5';
import {map} from 'rxjs/operators';
import { Comic } from '../class/comic';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  private apiKey = '0ef71d2bc73812aa5a704d6f92927f5e';
  private privateKey = 'e441acfe782ae687bc72f1f310db972edec666c6';
  private url = 'https://gateway.marvel.com:443';
  private hash = Md5.hashStr(`${this.privateKey}${this.apiKey}`);

  constructor(private http: HttpClient) { }

  // public listComics(): Observable<Comic[]> {
  //   // tslint:disable-next-line:max-line-length
  //   return this.http.get<Comic[]>(`${this.url}/v1/public/comics?format=magazine&limit=10&apikey=${this.apiKey}&hash=${this.hash}`);
  // }

  public listComics2(offset?: number): Observable<Comic[]> {
    if (!offset) {
      offset = 0;
    }
    return this.http.get<Array<any>>(`
      ${this.url}/v1/public/comics?noVariants=true&orderBy=title&limit=5&offset=${offset}&apikey=${this.apiKey}&hash=${this.hash}`
    )
    .pipe(
      map((payload: any) => {
        return payload.data.results.map(item => new Comic(item));
      })
    );
  }


}
