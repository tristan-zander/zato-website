import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {

  // Undefined until ngOnInit
  @ViewChild("image") image: ElementRef<HTMLImageElement>;

  @ViewChild("container") container: ElementRef<HTMLDivElement>;

  lerpFactor = 5;
  positionToMoveTo: { x: number, y: number } | undefined;

  updateInterval: any;

  constructor(container: ElementRef<HTMLDivElement>, image: ElementRef<HTMLImageElement>) {
    this.container = container;
    this.image = image;
  }
  ngOnDestroy(): void {
    // clearInterval(this.updateInterval)
  }

  ngOnInit(): void {
    // this.updateInterval = setInterval(() => {

    //   if (this.positionToMoveTo === undefined) {
    //     return;
    //   }

    //   // const lerpX = (this.image.nativeElement.offsetLeft - this.image.nativeElement.width / 2) * (1.0 / this.lerpFactor);
    //   // const lerpY = (this.image.nativeElement.offsetTop - this.image.nativeElement.height / 2) * (1.0 / this.lerpFactor);

    //   // TODO: Use requestAnimationFrame instead

    //   const imageCenterX = this.image.nativeElement.offsetLeft + (this.image.nativeElement.width / 2)
    //   const imageCenterY = this.image.nativeElement.offsetTop + (this.image.nativeElement.height / 2)


    //   const deltaX = this.positionToMoveTo.x - imageCenterX;
    //   const deltaY = this.positionToMoveTo.y - imageCenterY;


    //   this.image.nativeElement.style.setProperty("--x", this.image.nativeElement.x + (1.0 / this.lerpFactor) * (deltaX) + "px");
    //   this.image.nativeElement.style.setProperty("--y", this.image.nativeElement.y + (1.0 / this.lerpFactor) * (deltaY) + "px");

    // }, 1000 / 60)

    let last: DOMHighResTimeStamp, deltaTime = 0;

    const lerp = (timestamp: DOMHighResTimeStamp) => {
      console.debug("running")
      deltaTime = (timestamp - last) / 1000;
      last = timestamp;
      if (this.positionToMoveTo === undefined) {
        window.requestAnimationFrame(lerp)
      } else {

        const imageCenterX = this.image.nativeElement.offsetLeft + (this.image.nativeElement.width / 2)
        const imageCenterY = this.image.nativeElement.offsetTop + (this.image.nativeElement.height / 2)


        const deltaX = this.positionToMoveTo.x - imageCenterX;
        const deltaY = this.positionToMoveTo.y - imageCenterY;


        this.image.nativeElement.style.setProperty("--x", this.image.nativeElement.x + (this.lerpFactor) * (deltaX) * deltaTime  + "px");
        this.image.nativeElement.style.setProperty("--y", this.image.nativeElement.y + (this.lerpFactor) * (deltaY) * deltaTime  + "px");

        window.requestAnimationFrame(lerp)
      }
    }

    window.requestAnimationFrame(lerp.bind(this))
  }

  parallax(event: MouseEvent) {
    this.positionToMoveTo = {
      x: event.x,
      y: event.y
    }
  }

  mouseExit(event: MouseEvent) {
    this.positionToMoveTo = {
      x: this.container.nativeElement.clientWidth / 2
      , y: this.container.nativeElement.clientHeight / 2
    }
  }

}
