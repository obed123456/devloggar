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

 selectedLog = this.logSource.asObservable();

  constructor() { 
    this.logs = [
      { id: '1', text : 'Generated components', date: new Date('12/03/2017 12:54:23')},
      { id: '2', text : 'Added Generated components', date: new Date('12/04/2017 12:54:23')},
      { id: '2', text : 'Added log components', date: new Date('12/05/2017 12:54:23')}
    ]
  }

  getlogs(): Observable<Log[]> {
    return of(this.logs);
    }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log){
    this.logs.unshift(log);
  }

  updateLog(log: Log){
    //delete old log
    this.logs.forEach((curr, index) =>{
      if(log.id == curr.id){
        this.logs.splice(index, 1);
      }
    }); 
    //add new log.
    this.logs.unshift(log);
  }

  deleteLog(log: Log){
    this.logs.forEach((curr, index) =>{
      if(log.id == curr.id){
        this.logs.splice(index, 1);
      }
    }); 
  }

} 
