import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/profile.interface';
import { Observable } from 'rxjs';
import { AdminService } from '../../services/admin.service';
import { TYPE_ADVISER } from 'src/app/shared/constant/comission.constant';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NominaPdfComponent } from './components/nomina-pdf/nomina-pdf.component';

@Component({
  selector: 'app-nomina',
  templateUrl: './nomina.component.html',
  styleUrls: ['./nomina.component.scss'],
})
export class NominaComponent implements OnInit {
  nominaData$: Observable<User[]> = new Observable();

  typeAdviser = TYPE_ADVISER;

  constructor(
    private readonly adminService: AdminService,
    private readonly modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.nominaData$ = this.adminService.getAllNomina();
  }

  downloadNomina(nomina: User): void {
    const modalRef = this.modalService.open(NominaPdfComponent, {
      centered: true,
    });
    modalRef.componentInstance.userData = nomina;
  }
}
