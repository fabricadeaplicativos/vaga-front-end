import { Component, OnInit, Input } from '@angular/core';
import { ComicsService } from '../../resources/services/comics.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Comic } from '../../resources/class/comic';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() id: number;
  public selectedComic: Comic;

  constructor(
    private comicsService: ComicsService,
  ) { }

  ngOnInit() {
    this.comicDetail(this.id);
  }

  public comicDetail(id: number) {
    this.selectedComic = undefined;
    this.comicsService.getComic(id)
    .subscribe(
      payload => {
        this.selectedComic = payload[0];
        console.log('detalhes', this.selectedComic);
      }, (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

}
