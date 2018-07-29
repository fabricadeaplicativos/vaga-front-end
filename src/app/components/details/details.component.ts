import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComicsService } from '../../resources/services/comics.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Comic } from '../../resources/class/comic';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() selectedComic: Comic;
  @Output() reset = new EventEmitter;

  constructor(
    private comicsService: ComicsService,
  ) { }

  ngOnInit() {

  }

  public close() {
    this.selectedComic = undefined;
    this.reset.emit(this.selectedComic);
  }

}
