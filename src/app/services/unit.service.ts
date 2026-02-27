import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnitUpdatePayload } from '../models/unit.model';

@Injectable({ providedIn: 'root' })
export class UnitService {
  http = inject(HttpClient);

  private readonly baseUrl = '/api/units';

  getUnits() {}
  getUnit(id: number) {}
  updateUnit(id: number, payload: UnitUpdatePayload) {}
}
