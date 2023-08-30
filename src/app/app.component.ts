import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AlertService } from './shared/services/alert.service';
import { Subscription } from 'rxjs';
import { AlertComponent } from './core/components/alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  @ViewChild(AlertComponent) alertRef!: AlertComponent;

  constructor(private readonly alertService: AlertService) {}

  ngOnInit(): void {
    this.subscription = this.alertService.alert$.subscribe({
      next: (res) => {
        this.alertRef.alerts.push(res);
        setTimeout(() => {
          this.alertRef.close(res);
        }, 2500);
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
