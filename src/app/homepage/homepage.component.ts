import { Component } from '@angular/core';
import {HomepageheaderComponent} from '../components/homepageheader/homepageheader.component';
import {HomepageservicesComponent } from "../components/homepageservices/homepageservices.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HomepageheaderComponent,HomepageservicesComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
