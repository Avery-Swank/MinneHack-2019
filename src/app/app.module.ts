import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToptoolbarComponent } from './toptoolbar/toptoolbar.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TractorsComponent } from './equipment/tractors/tractors.component';
import { PlantingseedingComponent } from './equipment/plantingseeding/plantingseeding.component';
import { AppequipComponent } from './equipment/appequip/appequip.component';
import { HarvestingComponent } from './equipment/harvesting/harvesting.component';
import { TillageComponent } from './equipment/tillage/tillage.component';
import { ListingComponent } from './listing/listing.component';
import { RecentsubmissionsComponent } from './recentsubmissions/recentsubmissions.component';
import { AgmCoreModule } from '@agm/core';

const appRoutes: Routes = [
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
  },
  {path: 'equipment/tillage', component:TillageComponent},
  {path: 'equipment/harvesting', component:HarvestingComponent},
  {path: 'equipment/appequip', component:AppequipComponent},
  {path: 'equipment/plantingseeding', component:PlantingseedingComponent},
  {path: 'equipment/tractors', component:TractorsComponent},
  { path: 'recentsubmissions', component: RecentsubmissionsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'listing', component: ListingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ToptoolbarComponent,
    EquipmentComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TractorsComponent,
    PlantingseedingComponent,
    AppequipComponent,
    HarvestingComponent,
    TillageComponent,
    ListingComponent,
    RecentsubmissionsComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD09KO94KhYoKEkUje9ntOm6RMeXWIwZ7k'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
