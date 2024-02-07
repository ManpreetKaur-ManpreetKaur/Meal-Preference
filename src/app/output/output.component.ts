import { Component } from '@angular/core';
import {MealPreferenceService} from "../meal-preference.service";
import {UserPreference} from "../user-preference";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {

  userPreference: UserPreference;
  constructor(private service: MealPreferenceService) {
    this.userPreference = service.userPreference;
  }
}
