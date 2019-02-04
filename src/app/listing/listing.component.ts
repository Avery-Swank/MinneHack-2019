import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  currentImage: string = "https://www.deere.co.uk/assets/images/region-2/products/tractors/large/9r-series/01_r2c012135_large_58dde237409ce62076610e303ce93b39b524faa4.png"

  constructor() { }

  ngOnInit() {
  }

  changeImage(imgName) {
    console.log("changing image")
    this.currentImage = imgName;
  }
}
