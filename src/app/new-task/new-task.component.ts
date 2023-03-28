import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import {
  taskModule
} from '../shared/task.module';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  title = 'to-do-list-app';
  myTask: FormGroup;
  @ViewChild('taskInput', {
    static: false
  }) taskInputRef: ElementRef;
  @Output() taskAdd = new EventEmitter < taskModule > ();

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.myTask = this.fb.group({
      inputTask: ''
    })
    this.myTask.valueChanges.subscribe(console.log)
  }
  onAddItem() {
    const task = this.taskInputRef.nativeElement.value;
    if (!task) {
      return
    }
    const newTask = new taskModule(task);
    this.taskAdd.emit(newTask);
    this.myTask = this.fb.group({
      inputTask: ''
    })
  }
}
