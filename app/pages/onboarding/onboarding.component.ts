import { Component } from "@angular/core";
import { Page } from 'tns-core-modules/ui/page';

@Component({
    selector: "rs-onboarding",
    templateUrl: "pages/onboarding/onboarding.html",
    styleUrls: ["pages/onboarding/onboarding-common.css"],
})
export class OnboardingComponent{
    constructor(private page: Page){
        page.actionBarHidden = true;
    }
}