import { Component, OnInit } from '@angular/core';
declare const loadCarousel: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {
  /* options = {
    dist: -100,
    shift: -105,
    padding: 400,
  }; */

  constructor() { }

  ngOnInit(): void {
    loadCarousel();
  }
}
