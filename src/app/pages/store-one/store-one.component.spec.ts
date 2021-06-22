import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreOneComponent } from './store-one.component';

describe('StoreOneComponent', () => {
  let component: StoreOneComponent;
  let fixture: ComponentFixture<StoreOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
