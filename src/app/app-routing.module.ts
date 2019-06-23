import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './settings/history/history.component';
import { ProductsComponent } from './settings/products/products.component';
import { DentistsComponent } from './settings/dentists/dentists.component';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'history', component: HistoryComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'dentists', component: DentistsComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
