import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios';
import { DataService } from '../data.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MDCChipSet } from '@material/chips';
import { MDCTopAppBar } from '@material/top-app-bar';
import { ElementRef } from '@angular/core';
import { MDCMenu } from '@material/menu';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { inject } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatSidenavModule } from '@angular/material/sidenav';

interface Sidenav {
  name: string;
  expandable?: boolean;
  childrens?: Sidenav[];
  url?: string;
  icon?: string;
  click?: (value: any, event?: any) => void;
}

export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-angular-practice',
  standalone: true,
  providers: [provideNativeDateAdapter()],

  imports: [
    FormsModule,MatSidenavModule,
    MatButtonToggleModule, MatMenuModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatBadgeModule, MatCardModule,
    MatInputModule, MatExpansionModule, MatPaginatorModule, CommonModule,
    MatAutocompleteModule, MatChipsModule, MatDividerModule, MatProgressSpinnerModule,
    ReactiveFormsModule, MatListModule, MatGridListModule, MatProgressBarModule, CdkDropList, CdkDrag,
    AsyncPipe, MatFormFieldModule, MatChipsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule
  ],
  templateUrl: './angular-practice.component.html',
  styleUrl: './angular-practice.component.scss',
  viewProviders: [DataService],

  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('5000ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('5000ms', style({ opacity: 0 }))
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularPracticeComponent {

  public slides = [
    { src: "assets/home/aboutusLight.webp" },
    { src: "assets/home/aboutusLight.webp" },
    { src: "assets/home/aboutusLight.webp" },
    { src: "assets/home/aboutusLight.webp "},
  ];

  currentSlide = 0;



  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  public autoPlay: Boolean = true;
  // slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});



  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
  items: string[] = []; // Initialize with an empty array

  // Pagination variables
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageSize: number = 10;
  currentPage: number = 0;

  // Method to handle page changes
  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  // Method to generate items (you can replace this with your own data retrieval logic)
  generateItems() {
    this.items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  }
  panelOpenState = false;
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  selectedColor!: string;
  saveSelectedColor(event: any) {
    this.selectedColor = event.value;
  }
  constructor(private dataService: DataService) {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  ngOnInit() {

    this.dataService.fetchData()
      .then(data => {
        // Handle the data received from the server
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  }

  private _value: string = 'usman';
  inputValue: string = '';

  get value(): string {
    return this._value;
  }

  set value(newValue: string) {
    this._value = newValue;
  }

  setValue() {
    this.value = this.inputValue;
    this.inputValue = '';
  }
  onEnterKeyPressed() {
    this.setValue();
  }
  @ViewChild('topAppBarElement') topAppBarElement!: ElementRef;
  ngAfterViewInit() {
    const menuElement = document.querySelector('.mdc-menu');
    if (menuElement) {
      const menu = new MDCMenu(menuElement);
      menu.open = true; // Open the menu
    } else {
      console.error('Menu element not found');
    }
    const topAppBar = new MDCTopAppBar(this.topAppBarElement.nativeElement);
    const element = document.querySelector('.mdc-evolution-chip-set') as HTMLElement;
    if (element) {
      const chipset = new MDCChipSet(element);
    } else {
      console.error('Element with class .mdc-evolution-chip-set not found.');
    }
  }
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];

  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.fruits.push({ name: value });
    }

    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }
  sidenavMode: 'side' | 'over' = window.innerWidth > 600 ? 'side' : 'over';

  toggleSideNavList(index: number) {
    this.sidenavs[index].expandable = !this.sidenavs[index].expandable;
  }
  sidenavs: Sidenav[] = [
    {
      name: 'MADBot 101',
      expandable: true,
      childrens: [
        {
          name: 'Video Tutorials',
          icon: 'icon-glasses',
          url: '/community/tutorial'
        },
        {
          name: 'Info & FAQ',
          icon: 'icon-info',
          url: '/community/faq'
        }
      ]
    },
    {
      name: 'MADBot Features',
      expandable: true,
      childrens: [
        {
          name: 'Feature updates',
          icon: 'icon-announcement',
          url: '/community/feature-update'
        },
        {
          name: 'Request a feature',
          icon: 'icon-feedback',
          url: '/community/feature-request'
        }
      ]
    },
    {
      name: 'Report a bug',
      icon: 'icon-flag',
      url: '/community/report-bug'
    },
    {
      name: 'Schedule a Demo',
      icon: 'icon-arrow-diagonal',
      click: (value, event) => this.openScheduleDemo(event),
    },
  ];
  
  openScheduleDemo(event: any) {
    event.stopPropagation();
    window.location.href = "https://calendly.com/madbotai";
  }

}
