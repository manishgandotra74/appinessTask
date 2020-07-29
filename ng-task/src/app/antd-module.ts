import {NgModule} from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule, NzAvatarModule, NzDrawerModule, NzFormModule, NzInputModule, NzSelectModule, NzSkeletonModule, NzEmptyModule, NzSpinComponent, NzSpinModule } from 'ng-zorro-antd';

import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  exports: [
    NzTableModule,
    NzDividerModule,
    NzUploadModule,
    NzModalModule,
    NzAvatarModule,
    NzDrawerModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzListModule,
    NzSkeletonModule,
    NzEmptyModule,
    NzSpinModule
  ]
})
export class AntdModule {}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */