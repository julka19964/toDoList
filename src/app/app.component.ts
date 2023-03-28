import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import {
  taskModule
} from './shared/task.module';
import {
  UserService
} from './services/user-service';
import {
  SingleTaskStatus
} from './domain/single-task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tasks: taskModule[] = [];
  taskForm: FormGroup;
  allStatuses: SingleTaskStatus[];

  onTaskAdded(task: taskModule) {
    this.tasks.push(task);
  }

  constructor(private formBuilder: FormBuilder, private userService: UserService) {}
  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      taskSingleStatus: [null, [Validators.required]]
    })
    this.allStatuses = this.userService.getSingleStatus();

  }
  get taskSingleStatus() {
    return this.taskForm.get('taskSingleStatus');
  }
  onStatusChange() {
    let taskSingleStatus: SingleTaskStatus = this.taskSingleStatus.value;
    console.log('Status Changed: ' + taskSingleStatus.sgStatus);
  }

}
