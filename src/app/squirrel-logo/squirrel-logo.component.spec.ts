import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquirrelLogoComponent } from './squirrel-logo.component';

describe('SquirrelLogoComponent', () => {
  let component: SquirrelLogoComponent;
  let fixture: ComponentFixture<SquirrelLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquirrelLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SquirrelLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
