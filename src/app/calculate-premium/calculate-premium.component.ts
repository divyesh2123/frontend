import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Occupation } from '../models/Occupation';
import { PremiumInput } from '../models/PremiumInput';
import { PremiumOutput } from '../models/PremiumOutput';
import { PreimumService } from '../services/preimum.service';

@Component({
  selector: 'app-calculate-premium',
  templateUrl: './calculate-premium.component.html',
  styleUrls: ['./calculate-premium.component.css']
})
export class CalculatePremiumComponent implements OnInit {

  form!: FormGroup;
  data!: any;
  issubmit : boolean = false;
  

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
      age: [0],
      occupationId: [1, Validators.required],
      sumInsured: [0, [Validators.required]],
      birthDate: [{year: 2021, month: 7, day: 16},[Validators.required]]
      
  });

 

  }

  getOccupationListInfo()
  {
    this.premium.getAllOccupation().subscribe(y=> {
      this.occpationList = y;
    })

  }

  public bsValueChange(valueData:any) {
    
    console.log(valueData);
  }

  get f() { return this.form.controls; }

    onSubmit() {
       
      this.issubmit =true;
        

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

       console.log(this.form.value);

       let obj = new PremiumInput();

       obj.name = this.form.value.name;
       obj.occupationId = this.form.value.occupationId;
       obj.sumInsured= this.form.value.sumInsured;
       obj.age = (new Date()).getFullYear() - parseInt(this.form.value.birthDate.year)

       this.premium.postPremiumInfo(obj).subscribe(y=> {
        this.data = y;
        console.log(y);
       })
        

      
    }

    


}
