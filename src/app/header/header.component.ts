import { Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styles:[`
    a{
        cursor:pointer
    }
    `]
})
export class HeaderComponent{

    /*
  @Output() featureSelected=new EventEmitter<string>();

    onSelect(feature:string){
        this.featureSelected.emit(feature);
    }*/
}