import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RihtContainerComponent } from './right-container.component';

describe('RihtContainerComponent', () => {
  let component: RihtContainerComponent;
  let fixture: ComponentFixture<RihtContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RihtContainerComponent ]
    })
    .compileComponents();
  }));

  // objectchange(){

  // }
  beforeEach(() => {
    fixture = TestBed.createComponent(RihtContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
