import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector:'[appHolderDirective]'
})

export class PlaceholderDirective{

    constructor(public viewContainerRef:ViewContainerRef){}

}