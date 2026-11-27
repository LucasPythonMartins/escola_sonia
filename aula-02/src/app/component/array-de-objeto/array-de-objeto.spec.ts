import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArrayDeObjeto } from './array-de-objeto';

describe('ArrayDeObjeto', () => {
  let component: ArrayDeObjeto;
  let fixture: ComponentFixture<ArrayDeObjeto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayDeObjeto],
    }).compileComponents();

    fixture = TestBed.createComponent(ArrayDeObjeto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
