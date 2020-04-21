import { Component, EventEmitter, Output, OnInit, OnDestroy} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styles:[`
    a{
        cursor:pointer
    }
    `]
})
export class HeaderComponent implements OnInit,OnDestroy{

    /*
  @Output() featureSelected=new EventEmitter<string>();

    onSelect(feature:string){
        this.featureSelected.emit(feature);
    }*/
    constructor(private dataStorageService:DataStorageService,private authService:AuthService){}

        isAuthenticated=false;
    private userSub:Subscription;

    ngOnInit(){
            this.userSub=this.authService.user.subscribe(user=>{
                this.isAuthenticated=!user?false:true
                console.log(this.isAuthenticated)
                
            })
    }
    onSaveData(){

        this.dataStorageService.storeRecipes()

    }
    onFetchData(){

        this.dataStorageService.fetchRecipes().subscribe()

    }

    ngOnDestroy(){
        this.userSub.unsubscribe()
    }

    onLogout(){
        console.log("logout is clicked")
        this.authService.logout()
    }
        
    
}