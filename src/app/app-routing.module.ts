import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EthicsComponent } from './component/ethics/ethics.component';

import { ProductComponent } from './component/product/product.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ServicesComponent } from './component/services/services.component';
import { TeamComponent } from './component/team/team.component';

const routes: Routes = [
  {path : '' , component :AppComponent},
  {path :'teams',component : TeamComponent},
  {path : 'service',component :ServicesComponent},
  {path :'projects',component : ProjectsComponent},
  {path :'ethics',component : EthicsComponent},
  {path : 'products',component : ProductComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
