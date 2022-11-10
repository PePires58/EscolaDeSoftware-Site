import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public $visivel: Observable<boolean>;

  constructor() {
    this.$visivel = new Observable((obs) =>
      obs.next(false));
  }

  public Invisivel(): void {
    this.$visivel = new Observable((obs) => {
      obs.next(false);
    })
  }

  public Visivel(): void {
    this.$visivel = new Observable((obs) => {
      obs.next(true);
    })
  }
}
