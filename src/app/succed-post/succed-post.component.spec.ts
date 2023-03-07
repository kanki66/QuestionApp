import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccedPostComponent } from './succed-post.component';

describe('SuccedPostComponent', () => {
  let component: SuccedPostComponent;
  let fixture: ComponentFixture<SuccedPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccedPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
