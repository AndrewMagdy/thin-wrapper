/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { registerElement } from "@angular-react/core";
import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import App from "rc-app";
import { CalendarComponent } from "./calendar.component";
/** @type {?} */
const components = [CalendarComponent];
export class CalendarModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement("App", (/**
         * @return {?}
         */
        () => App));
    }
}
CalendarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA]
            },] }
];
CalendarModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmVhY3QtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9saWIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzRCxPQUFPLEdBQUcsTUFBTSxRQUFRLENBQUM7QUFFekIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O01BRW5ELFVBQVUsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0FBUXRDLE1BQU07SUFDSjtRQUNFLGlFQUFpRTtRQUNqRSxlQUFlLENBQUMsS0FBSzs7O1FBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBVkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJAYW5ndWxhci1yZWFjdC9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCBBcHAgZnJvbSBcInJjLWFwcFwiO1xuXG5pbXBvcnQgeyBDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gXCIuL2NhbGVuZGFyLmNvbXBvbmVudFwiO1xuXG5jb25zdCBjb21wb25lbnRzID0gW0NhbGVuZGFyQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50cyxcbiAgZXhwb3J0czogY29tcG9uZW50cyxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gQWRkIGFueSBSZWFjdCBlbGVtZW50cyB0byB0aGUgcmVnaXN0cnkgKHVzZWQgYnkgdGhlIHJlbmRlcmVyKS5cbiAgICByZWdpc3RlckVsZW1lbnQoXCJBcHBcIiwgKCkgPT4gQXBwKTtcbiAgfVxufVxuIl19