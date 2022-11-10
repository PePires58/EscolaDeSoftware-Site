import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinamentocorporativoComponent } from './treinamentocorporativo.component';

describe('TreinamentocorporativoComponent', () => {
  let component: TreinamentocorporativoComponent;
  let fixture: ComponentFixture<TreinamentocorporativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinamentocorporativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinamentocorporativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
