import { registerElement } from "@angular-react/core";
import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import App from "rc-app";

import { CalendarComponent } from "./calendar.component";

const components = [CalendarComponent];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
  schemas: [NO_ERRORS_SCHEMA]
})
export class CalendarModule {
  constructor() {
    // Add any React elements to the registry (used by the renderer).
    registerElement("App", () => App);
  }
}
