import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidaterService {
  constructor() {}
//
 // Method to validate if the input character is a numeric value
ValidateNumber(value: any): boolean {   
  if (value.charCode >= 48 && value.charCode < 58) {
    return true; // Return true if the character is a number
  } else {
    return false; // Return false if the character is not a number
  }
}
}
