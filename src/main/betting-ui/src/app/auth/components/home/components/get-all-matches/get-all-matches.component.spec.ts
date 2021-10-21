import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllMatchesComponent } from './get-all-matches.component';

describe('GetAllMatchesComponent', () => {
  let component: GetAllMatchesComponent;
  let fixture: ComponentFixture<GetAllMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
