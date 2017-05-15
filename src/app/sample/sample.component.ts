import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  sampleTitle: string;

  constructor() { }

  ngOnInit() {

  	// @h1-contains-title, set this string to "Sample Component Loaded"
  	this.sampleTitle = "Sample Component Loaded";
  }

}
