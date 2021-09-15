import { Component, OnInit } from '@angular/core';
import Framedata from './framedata.interface';

@Component({
  selector: 'app-framedata',
  templateUrl: './framedata.component.html',
  styleUrls: ['./framedata.component.scss']
})
export class FramedataComponent implements OnInit {

  framedata: Framedata[] = [
    {
      imageUrl: "",
      moveTitle: "5P",
      description: "A stupid abare move",
      activeFrames: 2,
      startupFrames: 5,
      recoveryFrames: 12,
      onBlockFrames: -5
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
