import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SaleSimulatorComponent } from './components/sale-simulator/sale-simulator.component';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  private users: Record<string, string>[] = [];

  allSales: Record<string, string | number>[] = [];

  firstLoad: boolean = false;

  constructor(
    private readonly modalService: NgbModal,
    private readonly adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.getAllDataUser();
  }

  private getAllDataUser(): void {
    this.adminService.getAllUsers().subscribe({
      next: (res) => {
        if (!this.firstLoad)
          this.users = res.map((user) => ({
            name: user.name,
            id: user.id,
          }));
        this.allSales = res.map((user) => ({
          name: user.name,
          sales: user.sales
            .map((sale) => sale.price)
            .reduce((sum, num) => {
              return +sum + +num;
            }, 0),
        }));
        this.firstLoad = true;
      },
    });
  }

  openSaleSimulator(): void {
    const modalRef = this.modalService.open(SaleSimulatorComponent, {
      centered: true,
    });
    modalRef.componentInstance.users = this.users;
    modalRef.closed.subscribe({
      next: () => {
        this.getAllDataUser();
      },
    });
  }
}
