import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditblogpostComponent } from './editblogpost.component';

describe('EditblogpostComponent', () => {
  let component: EditblogpostComponent;
  let fixture: ComponentFixture<EditblogpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditblogpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditblogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
