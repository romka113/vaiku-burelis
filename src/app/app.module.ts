import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChildrenFormComponent } from './components/children-form/children-form.component';
import { DirectiveDirective } from './directive.directive';
import { YearsDirective } from './directive/years.directive';
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationEditComponent } from './components/registration-edit/registration-edit.component';
import { AuthComponent } from './component/auth/auth.component';
const routes: Routes = [
  {
    path: '',
    component: RegistrationListComponent,
  },
  { path: 'registrationNew', component: ChildrenFormComponent },
  { path: 'registrationEdit/:id', component: RegistrationEditComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ChildrenFormComponent,
    DirectiveDirective,
    YearsDirective,
    RegistrationListComponent,
    RegistrationEditComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
