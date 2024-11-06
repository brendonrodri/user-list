import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IActiveOptions } from 'src/app/interfaces/filter/active-otions.interface';
import { IFilterOptions } from 'src/app/interfaces/filter/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})

export class FilterComponent {
  @Output() $filterOptionsEmitter: EventEmitter<IFilterOptions> = new EventEmitter<IFilterOptions>;
  public filterOptions: IFilterOptions = {} as IFilterOptions;
  public activeOptions: IActiveOptions[] = [
    {value: true, viewValue: 'Ativo'},
    {value: false, viewValue: 'Inativo'},
  ];
  public selectControl = new FormControl(Validators.required);

  getFilterOptions(){
    this.$filterOptionsEmitter.emit(this.filterOptions);
  }
}
