import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Unit } from '../models/unit.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UnitService {
  http = inject(HttpClient);

  private readonly baseUrl = '/api/units';

  getUnits(): Observable<Unit[]> {}
  getUnit(id: number): Observable<Unit> {}
  updateUnit(id: number, payload: Unit): Observable<Unit> {}
}
