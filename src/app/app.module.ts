import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule, MatProgressBarModule, MatProgressSpinnerModule} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';


import { Lead } from 'app/app.component';

import { HttpModule } from '@angular/http';
import { MatSnackBarModule } from "@angular/material";
import { ImageCropperModule } from 'ngx-image-cropper';

import { AppRoutingModule } from './app-routing.module';



@NgModule({
    declarations: [
        Lead
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpModule ,
        MatSnackBarModule,
        MatProgressBarModule,
    MatProgressSpinnerModule,
//        RouterModule.forRoot(appRoutes),
   //     AccountModule,
        TranslateModule.forRoot(),
        ImageCropperModule,

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule
        
        ,AppRoutingModule //routing module should be at end
        
        ],
    exports:[MatProgressBarModule,
        MatProgressSpinnerModule],
    providers: [
            MatProgressBarModule,
        MatProgressSpinnerModule
          ],
    bootstrap   :[
        Lead
    ]
})
export class AppModule
{
}
