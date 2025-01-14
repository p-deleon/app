import { Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ChildtwoComponent } from './childtwo/childtwo.component';

export const routes: Routes = [
    {path : "one",component:ChildComponent},
    {path: "two", component:ChildtwoComponent}
];
