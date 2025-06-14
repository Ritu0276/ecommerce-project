import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Seller } from '../services/seller';
import { Router } from '@angular/router';
import { SignUp } from '../data-types';


@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule],
  templateUrl: './seller-auth.html',
  styleUrl: './seller-auth.css'
})
export class SellerAuth {
constructor(private seller:Seller, private router:Router){

}
   ngOnInit(): void {}

    signUp(data:SignUp):void{
      console.warn(data);
    this.seller.userSignUp(data).subscribe((result)=>{
      console.warn(result)
      if(result){
        this.router.navigate(['seller-home']);

      }
      
    });
 
    }

  }


