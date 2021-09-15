import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramedataComponent } from './framedata.component';

describe('FramedataComponent', () => {
  let component: FramedataComponent;
  let fixture: ComponentFixture<FramedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FramedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FramedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
