import { Component } from '@angular/core';
import {MealPreferenceService} from "../meal-preference.service";
import {UserPreference} from "../user-preference";
import {MealChoice} from "../meal-choice";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  userPreference: UserPreference;

  constructor(private service: MealPreferenceService) {
    service.reset();
    this.userPreference = service.userPreference;
  }

  protected readonly MealChoice = MealChoice;

  setMealChoice(choice: MealChoice): void {
    this.userPreference.mealChoice = choice;
  }

  onSubmit(userName: string): void {
    this.userPreference.userName = userName;
  }
}
