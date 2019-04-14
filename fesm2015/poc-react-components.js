import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef, ViewChild, ElementRef, ChangeDetectionStrategy, EventEmitter, Input, NgZone, Output, Renderer2, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import App from 'poc-react-app';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PocReactAppComponent extends ReactWrapperComponent {
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
        this.angularNavigateTo = new EventEmitter();
        this.onStateChangeHandler = this.onStateChangeHandler.bind(this);
        this.angularNavigateToHandler = this.angularNavigateToHandler.bind(this);
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
    /**
     * @param {?} event
     * @return {?}
     */
    angularNavigateToHandler(event) {
        this.angularNavigateTo.emit(event);
    }
}
PocReactAppComponent.decorators = [
    { type: Component, args: [{
                selector: "poc-app-react",
                exportAs: "pocAppReact",
                template: `
    <App
      #reactNode
      [angularTestProp]="angularTestProp"
      [stateChange]="onStateChangeHandler"
      [angularNavigateTo]="angularNavigateToHandler"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </App>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["react-renderer"]
            }] }
];
PocReactAppComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
PocReactAppComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ["reactNode",] }],
    angularTestProp: [{ type: Input }],
    onStateChange: [{ type: Output }],
    angularNavigateTo: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [PocReactAppComponent];
class PocReactAppModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement("App", (/**
         * @return {?}
         */
        () => App));
    }
}
PocReactAppModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA]
            },] }
];
PocReactAppModule.ctorParameters = () => [];

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

export { PocReactAppComponent, PocReactAppModule };

//# sourceMappingURL=poc-react-components.js.map