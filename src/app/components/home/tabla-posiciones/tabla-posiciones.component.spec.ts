import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPosicionesComponent } from './tabla-posiciones.component';

describe('TablaPosicionesComponent', () => {
  let component: TablaPosicionesComponent;
  let fixture: ComponentFixture<TablaPosicionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaPosicionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPosicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
