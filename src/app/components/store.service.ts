// src/app/store.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private dataSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  setData(data: boolean): void {
    this.dataSubject.next(data);
  }

  getData(): Observable<boolean> {
    return this.dataSubject.asObservable();
  }
}
