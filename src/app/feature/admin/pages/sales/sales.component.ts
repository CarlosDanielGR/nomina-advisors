import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SaleSimulatorComponent } from './components/sale-simulator/sale-simulator.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  constructor(private readonly modalService: NgbModal) {}

  ngOnInit(): void {}

  openSaleSimulator(): void {
    this.modalService.open(SaleSimulatorComponent, { centered: true });
  }
}
