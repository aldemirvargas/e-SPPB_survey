import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InterceptorService } from './interceptor/interceptor.service';
import { SurveyComponent } from './components/survey/survey.component';
import { PersoInitComponent } from './components/perso-init/perso-init.component';
import { MinimentalTestComponent } from './components/minimental-test/minimental-test.component';
import { DemographicInitComponent } from './components/demographic-init/demographic-init.component';
import { DemographicCronicConditionsComponent } from './components/demographic-cronic-conditions/demographic-cronic-conditions.component';
import { HabitsComponent } from './components/habits/habits.component';
import { PhysicalActivityComponent } from './components/physical-activity/physical-activity.component';
import { LivingSpaceInitComponent } from './components/living-space-init/living-space-init.component';
import { EnviromentBuildComponent } from './components/enviroment-build/enviroment-build.component';
import { PhysicalPerformanceComponent } from './components/physical-performance/physical-performance.component';
import { ElectronicDevicesComponent } from './components/electronic-devices/electronic-devices.component';
import { AgreeComponent } from './components/agree/agree.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { RangeZeroOneComponent } from './components/range-zero-one/range-zero-one.component';
import { RangeZeroThreeComponent } from './components/range-zero-three/range-zero-three.component';
import { RangeZeroFiveComponent } from './components/range-zero-five/range-zero-five.component';
import { RangeZeroTwoComponent } from './components/range-zero-two/range-zero-two.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, NavbarComponent, SurveyComponent, PersoInitComponent, MinimentalTestComponent, DemographicInitComponent, DemographicCronicConditionsComponent, HabitsComponent, PhysicalActivityComponent, LivingSpaceInitComponent, EnviromentBuildComponent, PhysicalPerformanceComponent, ElectronicDevicesComponent, AgreeComponent, PaginatorComponent, RangeZeroOneComponent, RangeZeroThreeComponent, RangeZeroFiveComponent, RangeZeroTwoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
