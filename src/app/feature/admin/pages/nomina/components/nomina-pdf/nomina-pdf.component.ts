import { Component, Input } from '@angular/core';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/feature/admin/interfaces/profile.interface';
import { TYPE_ADVISER } from 'src/app/shared/constant/comission.constant';

@Component({
  selector: 'app-nomina-pdf',
  templateUrl: './nomina-pdf.component.html',
  styleUrls: ['./nomina-pdf.component.scss'],
})
export class NominaPdfComponent {
  @Input() userData!: User;

  ASSETS_LOGO: string = environment.ASSETS_LOGO;

  typeAdviser = TYPE_ADVISER;

  date = new Date();

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('nomina.pdf');
    });
  }
}
