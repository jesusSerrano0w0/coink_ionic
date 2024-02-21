import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CellConfirmPage } from './cell-confirm.page';

describe('CellConfirmPage', () => {
  let component: CellConfirmPage;
  let fixture: ComponentFixture<CellConfirmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CellConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
