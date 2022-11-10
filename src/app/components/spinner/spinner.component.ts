import { Observable } from 'rxjs';
import { SpinnerService } from './../../services/spinner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor(spinnerService: SpinnerService) {
  }

  ngOnInit(): void {
  }

}
