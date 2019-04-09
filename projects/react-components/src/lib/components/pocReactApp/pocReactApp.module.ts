import { registerElement } from "@angular-react/core";
import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import App from "poc-react-app";

import { PocReactAppComponent } from "./pocReactApp.component";

const components = [PocReactAppComponent];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
  schemas: [NO_ERRORS_SCHEMA]
})
export class PocReactAppModule {
  constructor() {
    // Add any React elements to the registry (used by the renderer).
    registerElement("App", () => App);
  }
}
