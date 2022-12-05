import { Observable } from 'rxjs';
import { SpinnerService } from './../../services/spinner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  isLoading: boolean;

  constructor(private spinnerService: SpinnerService) {
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.spinnerService.$visivel.subscribe((value) => {
      this.isLoading = value;
    })
  }

}
