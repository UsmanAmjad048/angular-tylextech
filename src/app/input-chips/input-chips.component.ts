import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MDCChipSet } from '@material/chips';

@Component({
  selector: 'app-input-chips',
  templateUrl: './input-chips.component.html',
  styleUrls: ['./input-chips.component.scss']
})
export class InputChipsComponent implements AfterViewInit {
  @ViewChild('chipInput') chipInput!: ElementRef<HTMLInputElement>;
  @ViewChild('chipSet') chipSet!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    new MDCChipSet(this.chipSet.nativeElement);
  }

}