import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenuserComponent } from './examenuser.component';

describe('ExamenuserComponent', () => {
  let component: ExamenuserComponent;
  let fixture: ComponentFixture<ExamenuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
