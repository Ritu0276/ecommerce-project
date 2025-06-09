import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Home } from './home/home';
import { SellerAuth } from './seller-auth/seller-auth';
import { HttpClientModule } from '@angular/common/http';
import { SellerHome } from './seller-home/seller-home';
import { authGuard } from './auth-guard';

export const routes: Routes = [

   { path: '', component: Home},
    { path: 'seller-auth', component: SellerAuth },
    { path: 'seller-home', component: SellerHome, canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}