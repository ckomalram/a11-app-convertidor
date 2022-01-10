import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertidorComponent } from './convertidor.component';

describe('ConvertidorComponent', () => {
  let component: ConvertidorComponent;
  let fixture: ComponentFixture<ConvertidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
