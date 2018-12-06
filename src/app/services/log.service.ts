import { Injectable } from '@angular/core';
import { Log } from '../models/log';

import {  BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LogService {
 logs: Log[];
  constructor() { 
    this.logs = [
      { id: '1', text : 'Generated components', date: new Date('12/03/2017 12:54:23')},
      { id: '2', text : 'Added Generated components', date: new Date('12/04/2017 12:54:23')},
      { id: '2', text : 'Added log components', date: new Date('12/05/2017 12:54:23')}

    ]
  }

  getlogs() {
    return this.logs;
    
  }
} 
