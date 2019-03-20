import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef, ViewChild, ElementRef, ChangeDetectionStrategy, EventEmitter, Input, NgZone, Output, Renderer2, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import App from 'rc-app';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, {
            ngZone,
            setHostDisplay: true
        });
        this.onStateChange = new EventEmitter();
        this.onStateChangeHandler = this.onStateChangeHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngAfterContentInit() { }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @param {?} event
     * @return {?}
     */
    onStateChangeHandler(event) {
        this.onStateChange.emit(event);
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: "calendar-react",
                exportAs: "calendarReact",
                template: `
    <App
      #reactNode
      [mode]="mode"
      [showToday]="showToday"
      [initialState]="initialState"
      [stateChange]="onStateChangeHandler"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </App>
  `,
                //styleUrls: ["./calendar.component.css"],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["react-renderer"]
            }] }
];
CalendarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
CalendarComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ["reactNode",] }],
    mode: [{ type: Input }],
    showToday: [{ type: Input }],
    initialState: [{ type: Input }],
    onStateChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [CalendarComponent];
class CalendarModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CalendarComponent, CalendarModule };

//# sourceMappingURL=react-components.js.map