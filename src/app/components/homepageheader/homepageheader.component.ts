import { Component } from '@angular/core';
import {ThebuttonComponent} from '../thebutton/thebutton.component'
@Component({
  selector: 'home-page-header',
  standalone: true,
  imports: [ThebuttonComponent],
  templateUrl: './homepageheader.component.html',
  styleUrl: './homepageheader.component.scss'
})
export class HomepageheaderComponent {
  dynamicButtonText: string = 'Redefine Your Future';

}
