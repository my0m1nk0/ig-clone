import { Pipe, PipeTransform } from '@angular/core';
import { POSTACTION } from 'src/app/models/post-action-type';
import { FireStoreUserService } from '../services/fire-store-user.service';

@Pipe({
  name: 'checkReact'
})
export class CheckReactPipe implements PipeTransform {

  constructor(private userService: FireStoreUserService) { }

  transform(value: string[] = []): unknown {
    if (Array.isArray(value)) {
      const user = this.userService.loginUser.getValue()
      return value.some((id) => id === user?.id)
    }
    return false
  }

}
