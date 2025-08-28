import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaList } from './vaga-list';

describe('VagaList', () => {
  let component: VagaList;
  let fixture: ComponentFixture<VagaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VagaList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagaList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
