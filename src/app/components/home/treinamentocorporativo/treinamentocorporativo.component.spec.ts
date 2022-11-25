import { ServiceModule } from './../../../services/service.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinamentocorporativoComponent } from './treinamentocorporativo.component';
import { EnviarEmailService } from 'src/app/services/enviar-email.service';

describe('TreinamentocorporativoComponent', () => {
  let component: TreinamentocorporativoComponent;
  let fixture: ComponentFixture<TreinamentocorporativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreinamentocorporativoComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule, ServiceModule]
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
