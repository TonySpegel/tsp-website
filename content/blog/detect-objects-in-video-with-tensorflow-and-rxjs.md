+++
title = 'Objekte in einem Video erkennen mit Tensorflow.js und RxJS'
date = 2021-08-04
description = 'Beliebige Objekte in einem Videostream erkennen'

[taxonomies]
tags = ['tensorflow', 'rxjs']
+++

Beliebige Objekte in einem Videostream erkennen
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