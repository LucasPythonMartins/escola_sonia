import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Objeto } from './objeto';

describe('Objeto', () => {
  let component: Objeto;
  let fixture: ComponentFixture<Objeto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Objeto],
    }).compileComponents();

    fixture = TestBed.createComponent(Objeto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
