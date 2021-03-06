import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryCardComponent } from './library-card.component';
import { By } from '@angular/platform-browser';

describe('LibraryCardComponent', () => {
  let component: LibraryCardComponent;
  let fixture: ComponentFixture<LibraryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryCardComponent);
    component = fixture.componentInstance;
    component.isMenu = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    const libraryCard = fixture.debugElement.query(By.css('.sb--card__img'));
    libraryCard.nativeElement.click();
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const menu = fixture.debugElement.query(By.css('.menu'));
    menu.nativeElement.click();
    fixture.detectChanges();
    
    expect(component).toBeTruthy();
  });
});
