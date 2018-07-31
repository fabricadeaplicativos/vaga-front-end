import { Injectable } from '@angular/core';
import { Comic } from '../class/comic';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  public selectedComic: Comic;
  constructor(private route: Router) { }


  public returnToHome(c?: Comic) {
      this.selectedComic = c;
      this.route.navigate(['/home']);
  }
}

