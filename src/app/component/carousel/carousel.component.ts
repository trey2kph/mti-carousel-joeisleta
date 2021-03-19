import { Component, OnInit } from '@angular/core';
import * as Materialize from '../../../assets/materialize-src/js/bin/materialize.js';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {
  options = {
    dist: -100,
    shift: -105,
    padding: 400,
  };

  constructor() { }

  ngOnInit(): void {
    var elems = document.querySelectorAll('.carousel');
    var instances = Materialize.Carousel.init(elems, this.options);

  }
}
