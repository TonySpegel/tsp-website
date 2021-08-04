+++
title = 'Objekte in einem Video erkennen mit Tensorflow.js und RxJS'
date = 2021-08-04

[taxonomies]
tags = ['tensorflow', 'rxjs']
+++

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu feugiat sapien. Aenean ligula nunc, laoreet id sem in, interdum bibendum felis. Donec vel dui neque. Praesent ac sem ut justo volutpat rutrum a imperdiet tellus. Nam lobortis massa non hendrerit hendrerit. Vivamus porttitor dignissim turpis, eget aliquam urna tincidunt non. Aliquam et fringilla turpis. Nullam eros est, eleifend in ornare sed, hendrerit eget est. Aliquam tellus felis, suscipit vitae ex vel, fringilla tempus massa. Nulla facilisi. Pellentesque lobortis consequat lectus. Maecenas ac libero elit.

<!-- more -->

```typescript
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';


@Injectable({
    providedIn: 'root',
})
export class UpdateService {
    constructor(private swUpdate: SwUpdate,  private snackbar: MatSnackBar) {
        this.swUpdate.available.subscribe((evt) => {
            const snack = this.snackbar.open('Update Available', 'Reload');

            snack
                .onAction()
                .subscribe(() => {
                    window.location.reload();
                });
        });
    }
}
```