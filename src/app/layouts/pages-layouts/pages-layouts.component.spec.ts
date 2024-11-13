import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesLayoutsComponent } from './pages-layouts.component';

describe('PagesLayoutsComponent', () => {
  let component: PagesLayoutsComponent;
  let fixture: ComponentFixture<PagesLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesLayoutsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
