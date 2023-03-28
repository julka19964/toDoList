import {
  Injectable
} from '@angular/core';
import {
  SingleTaskStatus
} from '../domain/single-task';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  getSingleStatus(): SingleTaskStatus[] {
    let singleStatus = [
      new SingleTaskStatus('done'),
      new SingleTaskStatus('in progress'),
      new SingleTaskStatus('not done yet')
    ]
    return singleStatus;
  }
}
