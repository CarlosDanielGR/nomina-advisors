import { Component, OnInit } from '@angular/core';

import { Alert } from '../../interfaces/alert.interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  alerts: Alert[] = [
    {
      type: 'danger',
      message: 'This is a message',
    },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.close(this.alerts.at(-1) || this.alerts[0]);
    }, 2500);
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
