import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thebutton',
  standalone: true,
  imports: [],
  templateUrl: './thebutton.component.html',
  styleUrl: './thebutton.component.scss'
})
export class ThebuttonComponent {
  @Input() buttonText!: string;
  @Input() urls!:string;
 }
