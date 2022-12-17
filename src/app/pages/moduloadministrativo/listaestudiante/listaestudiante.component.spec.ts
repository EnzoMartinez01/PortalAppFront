import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaestudianteComponent } from './listaestudiante.component';

describe('ListaestudianteComponent', () => {
  let component: ListaestudianteComponent;
  let fixture: ComponentFixture<ListaestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaestudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
