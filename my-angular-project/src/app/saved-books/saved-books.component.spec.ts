import { ComponentFixture, TestBed } from '@angular/core/testing';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { SavedBooksComponent } from './saved-books.component';

describe('SavedBooksComponent', () => {
  let component: SavedBooksComponent;
  let fixture: ComponentFixture<SavedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
