import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { Alert } from 'src/app/core/interfaces/alert.interface';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertObs$: Subject<Alert> = new Subject();

  constructor() {}

  get alert$(): Observable<Alert> {
    return this.alertObs$.asObservable();
  }

  set newAlert(alert: Alert) {
    this.alertObs$.next(alert);
  }
}
