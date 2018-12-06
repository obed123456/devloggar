import { Injectable } from '@angular/core';
import { Log } from '../models/log';

import {  BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs/Observable'; 
import { of } from 'rxjs/Observable/of'

@Injectable({
  providedIn: 'root'
})
export class LogService {
 logs: Log[];

 private logSource =  new BehaviorSubject<Log>({id: null, text:null, date:null}); 

 selectLog = this.logSource.asObservable();

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

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

} 
