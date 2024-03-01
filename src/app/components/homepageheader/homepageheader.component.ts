import { Component,ViewEncapsulation } from '@angular/core';
import { ThebuttonComponent } from '../thebutton/thebutton.component'
@Component({
  selector: 'home-page-header',
  standalone: true,
  imports: [ThebuttonComponent],
  templateUrl: './homepageheader.component.html',
  styleUrl: './homepageheader.component.scss',
  encapsulation: ViewEncapsulation.None 
})
export class HomepageheaderComponent {
  dynamicButtonText: string = 'Redefine Your Future';
}
