import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component {
  checked = false;
  indeterminate = false;
  labelPosition: 'Media' | 'Alta' = 'Alta';
  disabled = false;
}
