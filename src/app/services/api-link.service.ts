import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiLinkService {
  apiLink:BehaviorSubject<string>=new BehaviorSubject('https://affricano.vercel.app')
  constructor() { 
  }
}
