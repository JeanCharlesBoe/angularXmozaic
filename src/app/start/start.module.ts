import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { StartPageComponent } from "./components/start-page/start-page.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[
        StartPageComponent
    ],
    imports:[
        CommonModule,
        SharedModule
    ],
    exports:[
        StartPageComponent
    ]

})
export class StartModule{}