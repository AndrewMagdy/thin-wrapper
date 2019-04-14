import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnInit, Renderer2, AfterContentInit, OnDestroy } from "@angular/core";
import { ReactWrapperComponent } from "@angular-react/core";
interface IPocReactAppComponent {
    mode: "time" | "date" | "month" | "year" | "decade";
    showToday: boolean;
    angularTestProp: any;
}
export declare class PocReactAppComponent extends ReactWrapperComponent<IPocReactAppComponent> implements OnInit, AfterContentInit, OnDestroy {
    protected reactNodeRef: ElementRef;
    angularTestProp?: IPocReactAppComponent["angularTestProp"];
    onStateChange: EventEmitter<{}>;
    angularNavigateTo: EventEmitter<{}>;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
    onStateChangeHandler(event: any): void;
    angularNavigateToHandler(event: any): void;
}
export {};
