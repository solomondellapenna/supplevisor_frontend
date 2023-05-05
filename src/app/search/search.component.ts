import { Component } from '@angular/core';
import { SupplementsService } from '../supplements.service';
import { Supplement } from '../models/supplement';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  supplementForm = this.formBuilder.group({
    name: ''
  })

  supplement?: Supplement[];

  constructor(
    private supplementsService: SupplementsService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    this.getSupplement();
  }
  
  getSupplement(): void {
    this.supplementsService.getOne(this.supplementForm.value["name"]!)
      .subscribe({
        next: (data) => {
          this.supplement = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
