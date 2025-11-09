import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTitle } from './list-title';

describe('ListTitle', () => {
  let component: ListTitle;
  let fixture: ComponentFixture<ListTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
