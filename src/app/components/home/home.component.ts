import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../resources/services/comics.service';
import { Comic } from '../../resources/class/comic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public comics: Array<Comic> = [];
  public offset: number;
  constructor(private comicsService: ComicsService) { }

  ngOnInit() {
    this.offset = 0;
    this.comicsList();
  }

  // public comicsList() {
  //   this.comicsService.listComics()
  //   .subscribe(
  //     payload => {
  //       console.log(payload);
  //     }
  //   );
  // }
  public comicsList() {
    this.comicsService.listComics2()
    .subscribe(
      payload => {
        this.comics = payload;
        console.log('payload', payload);
        console.log('array', this.comics);
      }
    );
  }

  public loadMore() {
    this.offset = this.comics.length;
    console.log(this.offset);
    this.comicsService.listComics2(this.offset)
    .subscribe(
      payload => {
        this.comics = this.comics.concat(payload);
        console.log('carregar mais', this.comics);
      }
    );
  }

}
