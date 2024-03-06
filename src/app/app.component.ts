import { Component, EventEmitter, OnInit } from '@angular/core';
import { StoreService } from './components/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  expression: boolean = false;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.getData().subscribe(data => {
      this.expression = data;
      console.log(this.expression);
      this.handleStoreValueChange();
    });
  }

  handleStoreValueChange(): void {
  }
}
