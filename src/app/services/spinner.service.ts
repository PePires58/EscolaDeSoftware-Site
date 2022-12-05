import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private visivel: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public $visivel: Observable<boolean> = this.visivel.asObservable();

  constructor() {
    this.Invisivel();
  }

  public Invisivel(): void {
    this.visivel.next(false);
  }

  public Visivel(): void {
    this.visivel.next(true);
  }
}
