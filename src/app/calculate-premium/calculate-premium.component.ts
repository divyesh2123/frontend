import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Occupation } from '../models/Occupation';
import { PreimumService } from '../services/preimum.service';

@Component({
  selector: 'app-calculate-premium',
  templateUrl: './calculate-premium.component.html',
  styleUrls: ['./calculate-premium.component.css']
})
export class CalculatePremiumComponent implements OnInit {

  form!: FormGroup;

  occpationList! : Occupation[]

  constructor(
    private formBuilder: FormBuilder,
    private premium : PreimumService
  )
  {
    
  }

  ngOnInit() {

    this.getOccupationListInfo();
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      age: [0, Validators.required],
      occupationId: [0, Validators.required],
      sumInsured: [0, [Validators.required]],
      
      
  });

  }

  getOccupationListInfo()
  {
    this.premium.getAllOccupation().subscribe(y=> {
      this.occpationList = y;
    })

  }

  get f() { return this.form.controls; }

    onSubmit() {
       

        

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

      
    }

    


}
