import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { FormComponent } from "./form/form.component";
import { MonthlyContribComponent } from "./monthly-contrib/monthly-contrib.component";
import { ButtonComponent } from "./button/button.component";
import { RetirementChartComponent } from "./chart/chart.component";
import { AdjustmentComponent } from "./adjustment/adjustment.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, SearchComponent, FormComponent, MonthlyContribComponent, ButtonComponent, RetirementChartComponent,AdjustmentComponent]
})
export class AppComponent {
  title = 'myapp';
  
id:string = 'RPT100';
}
