import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowByDefaultComponent } from './show-by-default.component';

describe('ShowByDefaultComponent', () => {
  let component: ShowByDefaultComponent;
  let fixture: ComponentFixture<ShowByDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowByDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowByDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
