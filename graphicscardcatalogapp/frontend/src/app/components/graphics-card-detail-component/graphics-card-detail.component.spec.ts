import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsCardDetailComponent } from './graphics-card-detail.component';

describe('GraphicarddetailcomponentComponent', () => {
  let component: GraphicsCardDetailComponent;
  let fixture: ComponentFixture<GraphicsCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicsCardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
