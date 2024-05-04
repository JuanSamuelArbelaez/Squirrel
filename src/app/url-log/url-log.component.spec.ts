import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlLogComponent } from './url-log.component';

describe('UrlLogComponent', () => {
  let component: UrlLogComponent;
  let fixture: ComponentFixture<UrlLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlLogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UrlLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
