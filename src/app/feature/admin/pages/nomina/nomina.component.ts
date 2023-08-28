import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/profile.interface';
import { Observable } from 'rxjs';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-nomina',
  templateUrl: './nomina.component.html',
  styleUrls: ['./nomina.component.scss'],
})
export class NominaComponent implements OnInit {
  nominaData$: Observable<User[]> = new Observable();

  constructor(private readonly adminService: AdminService) {}

  ngOnInit(): void {
    this.nominaData$ = this.adminService.getAllNomina();
  }
}
