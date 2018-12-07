import { Component, OnInit } from '@angular/core';

import { LogService  } from '../../services/log.service';

import { Log } from '../../models/log';

@Component({
selector: 'app-logs',
templateUrl: './logs.component.html',
styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
logs: Log [];

constructor(private logService: LogService) { }

ngOnInit() {
  // sync data
  // this.logs = this.logService.getlogs();

  // Async
  this.logService.getlogs()
  .subscribe(logs => {
    this.logs = logs;
  })
}
onSelect(log: Log) {
console.log(log);
this.logService.setFormLog(log);
}
onDelete(log: Log) {
  this.logService.deleteLog(log);
}

}