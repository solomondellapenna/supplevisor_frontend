import { Component, OnInit } from '@angular/core';
import { SupplementsService } from '../supplements.service';
import { Supplement } from '../models/supplement';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {

  supplements?: Supplement[];
  columns: string[] = ["name", "healthBenefits", "healthRisks", "ideal_dosage_mg", "toxic_dosage_mg", "ideal_time"]
  // columns: string[] = ["name", "healthBenefits", "healthRisks", "ideal_dosage_mg", "toxic_dosage_mg", "ideal_time", "references"]
  constructor(private supplementsService: SupplementsService) {
  }

  ngOnInit() {
    this.retrieveSupplements();
    console.log(this.supplements);
  }

  retrieveSupplements(): void {
    this.supplementsService.getAll()
      .subscribe({
        next: (data) => {
          this.supplements = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
