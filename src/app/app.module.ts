import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';

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
import { ActivitiesComponent } from './components/activities/activities.component';
import { YesNotDoNotKnowComponent } from './components/yes-not-do-not-know/yes-not-do-not-know.component';
import { YesNotComponent } from './components/yes-not/yes-not.component';
import { FrecuencyComponent } from './components/frecuency/frecuency.component';
import { StepByWeekComponent } from './components/step-by-week/step-by-week.component';
import { HelpOfOtherComponent } from './components/help-of-other/help-of-other.component';
import { ManyOrSomeComponent } from './components/many-or-some/many-or-some.component';
import { ProblemsComponent } from './components/problems/problems.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, NavbarComponent, SurveyComponent, PersoInitComponent, MinimentalTestComponent, DemographicInitComponent, DemographicCronicConditionsComponent, HabitsComponent, PhysicalActivityComponent, LivingSpaceInitComponent, EnviromentBuildComponent, PhysicalPerformanceComponent, ElectronicDevicesComponent, AgreeComponent, PaginatorComponent, RangeZeroOneComponent, RangeZeroThreeComponent, RangeZeroFiveComponent, RangeZeroTwoComponent, ActivitiesComponent, YesNotDoNotKnowComponent, YesNotComponent, FrecuencyComponent, StepByWeekComponent, HelpOfOtherComponent, ManyOrSomeComponent, ProblemsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right',
          distance: 12
        },
        vertical: {
          position: 'top',
          distance: 12,
          gap: 10
        }
      },
      behaviour: {
        autoHide: 5000,
        showDismissButton: true,
        stacking: 4
      },
      animations: {
        enabled: true,
        show: {
          preset: 'slide',
          speed: 300,
          easing: 'ease'
        },
        hide: {
          preset: 'fade',
          speed: 300,
          easing: 'ease',
          offset: 50
        },
        shift: {
          speed: 300,
          easing: 'ease'
        }
      }
    })
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
