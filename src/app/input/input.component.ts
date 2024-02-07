import { Component } from '@angular/core';
import {MealPreferenceService} from "../meal-preference.service";
import {UserPreference} from "../user-preference";
import {MealChoice} from "../meal-choice";
import {Router} from "@angular/router";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  userPreference: UserPreference = new UserPreference();

  constructor(private service: MealPreferenceService, private router: Router) {
  }

  protected readonly MealChoice = MealChoice;

  onSubmit(): void {
    this.userPreference.userName = this.userPreference.userName.trim();
    this.service.submitUserPreference(this.userPreference);
    this.router.navigate(["/output"]);
  }
}
