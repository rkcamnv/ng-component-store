import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTwoComponent } from './store-two.component';

describe('StoreTwoComponent', () => {
  let component: StoreTwoComponent;
  let fixture: ComponentFixture<StoreTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
