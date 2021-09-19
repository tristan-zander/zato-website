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

  lerpFactor = 50;
  positionToMoveTo: { x: number, y: number } = { x: 0, y: 0 };

  constructor(container: ElementRef<HTMLDivElement>, image: ElementRef<HTMLImageElement>) {
    this.container = container;
    this.image = image;
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

    this.positionToMoveTo = {
      x: this.image.nativeElement.x,
      y: this.image.nativeElement.y
    }

    let interval = setInterval(() => {
      // console.debug("interval!")
      // const lerpX = (this.image.nativeElement.offsetLeft - this.image.nativeElement.width / 2) * (1.0 / this.lerpFactor);
      // const lerpY = (this.image.nativeElement.offsetTop - this.image.nativeElement.height / 2) * (1.0 / this.lerpFactor);

      // TODO: Use requestAnimationFrame instead

      const imageCenterX = this.image.nativeElement.offsetLeft + (this.image.nativeElement.width / 2)
      const imageCenterY = this.image.nativeElement.offsetTop + (this.image.nativeElement.height / 2)


      const deltaX = this.positionToMoveTo.x - imageCenterX;
      const deltaY = this.positionToMoveTo.y - imageCenterY;
      

      this.image.nativeElement.style.setProperty("--x", this.image.nativeElement.x + ( 1.0 / this.lerpFactor) * (deltaX) + "px");
      this.image.nativeElement.style.setProperty("--y", this.image.nativeElement.y + ( 1.0 / this.lerpFactor) * (deltaY) + "px");

    }, 1 / 144)
  }

  parallax(event: MouseEvent) {
    // console.debug(event)
    // console.log(this.image)

    // console.log(event.clientX, event.clientY)
    // console.log(event.x, event.y)

    // const mouseXPos = event.x - this.container.nativeElement.offsetLeft - (this.image.nativeElement.width / 2)
    // const mouseYPos = event.y - this.container.nativeElement.offsetTop - (this.image.nativeElement.height / 2)

    // const lerpX = mouseXPos - (this.image.nativeElement.offsetLeft - this.image.nativeElement.width / 2) * this.lerpFactor;
    // const lerpY = mouseYPos - (this.image.nativeElement.offsetTop - this.image.nativeElement.height / 2) * this.lerpFactor;

    // this.image.nativeElement.style.setProperty("--x", this.image.nativeElement.offsetLeft + lerpX + "px");
    // this.image.nativeElement.style.setProperty("--y", mouseYPos + "px");

    this.positionToMoveTo = {
      x: event.x,
      y: event.y
    }

  }

}
