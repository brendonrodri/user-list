import { Component, EventEmitter, Output } from '@angular/core';
import { IStatusOption } from 'src/app/interfaces/filter/active-otions.interface';
import { IFilterOptions } from 'src/app/interfaces/filter/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})

export class FilterComponent {
  @Output('$onFilter') $onFilterEmitt: EventEmitter<IFilterOptions> = new EventEmitter<IFilterOptions>;
  public filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined
  };
  public statusOptions: IStatusOption[] = [
    {value: true, description: 'Ativo'},
    {value: false, description: 'Inativo'},
  ];

  getFilterOptions(){
    this.$onFilterEmitt.emit(this.filterOptions);
  }
}
