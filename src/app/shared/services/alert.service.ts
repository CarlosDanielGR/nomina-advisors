import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { Alert } from 'src/app/core/interfaces/alert.interface';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertObs$: Subject<Alert> = new Subject();

  constructor() {}

  alertError(error: HttpErrorResponse): void {
    const { message } = error.error;
    this.newAlert = {
      type: 'danger',
      message:
        typeof message === 'string'
          ? message
          : (message as Array<string>)?.length
          ? message[0]
          : 'Unexpected error',
    };
  }

  get alert$(): Observable<Alert> {
    return this.alertObs$.asObservable();
  }

  set newAlert(alert: Alert) {
    this.alertObs$.next(alert);
  }
}
