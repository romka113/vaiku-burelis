import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ChildrenFormComponent } from './components/children-form/children-form.component';
import { DirectiveDirective } from './directive.directive';
import { YearsDirective } from './directive/years.directive';
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationEditComponent } from './components/registration-edit/registration-edit.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: RegistrationListComponent,
  },
  {
    path: 'registrationNew',
    component: ChildrenFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'registrationEdit/:id',
    component: RegistrationEditComponent,
    canActivate: [AuthGuard],
  },
  { path: 'register', component: AuthComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'changePassword',
    component: ChangePasswordComponent,
    canActivate: [AuthGuard],
  },
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
    LoginComponent,
    NavigationComponent,
    FooterComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
