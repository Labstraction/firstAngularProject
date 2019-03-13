import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Court } from "../model/Court";
import { CourtsService } from "../model/courts.service";

@Component({
  selector: 'app-insert-court-reactive',
  templateUrl: './insert-court-reactive.component.html',
  styleUrls: ['./insert-court-reactive.component.css']
})
export class InsertCourtReactiveComponent implements OnInit {
  newCourtForm: FormGroup;
  court = new Court();

  constructor(private fb: FormBuilder, private courtService : CourtsService) { }


  ngOnInit() {
    this.newCourtForm = this.fb.group({
      name:['', [Validators.required, Validators.minLength(3)]],
      price: [0.00, [Validators.required, priceRange(1, 100)]],
      sport: ['', [Validators.required]],
      terrain: ['', [Validators.required]]

      // firstName: ['', [Validators.required, Validators.minLength(3)]],
      // lastName: ['', [Validators.required, Validators.maxLength(50)]],
      // emailGroup: this.fb.group({
      //   email: ['', [Validators.required, Validators.email]],
      //   confirmEmail: ['', Validators.required],
      // }, {validator: emailMatcher}),
      // phone: '',
      // notification: 'email',
      // rating: [null, ratingRange(1, 5)],
      // sendCatalog: true
    });
  }

  

  populateTestData(): void {
    this.newCourtForm.patchValue({
      courtName: "Nicoletta's field",
      price: 30
    });
  }

  save() {
    console.log(this.newCourtForm);
    console.log('Saved: ' + JSON.stringify(this.newCourtForm.value));
    if (this.newCourtForm.valid) {
      this.court= this.newCourtForm.value;
    }
    this.courtService.addCourt(this.court).subscribe();
  }

  // setNotification(notifyVia: string): void {
  //   const phoneControl = this.customerForm.get('phone');
  //   if (notifyVia === 'text') {
  //     phoneControl.setValidators(Validators.required);
  //   } else {
  //     phoneControl.clearValidators();
  //   }
  //   phoneControl.updateValueAndValidity();
  // }



}

function priceRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { 'range': true };
    }
    return null;
  };
}


// function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
//   const emailControl = c.get('email');
//   const confirmControl = c.get('confirmEmail');

//   if (emailControl.pristine || confirmControl.pristine) {
//     return null;
//   }

//   if (emailControl.value === confirmControl.value) {
//     return null;
//   }
//   return { 'match': true };
// }

// function ratingRange(min: number, max: number): ValidatorFn {
//   return (c: AbstractControl): { [key: string]: boolean } | null => {
//     if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
//       return { 'range': true };
//     }
//     return null;
//   };
// }


