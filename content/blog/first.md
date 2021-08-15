+++
title = "My first post"
description = "Introducing Doks, a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
date = 2019-11-27
updated = 2021-05-01T09:19:42+00:00
draft = false
template = "blog/page.html"

[taxonomies]
tags = ["rust", "other"]
+++

This is my first blog post.
```typescript
class Hvaldimir {
    age: number;
    weight: number;
}
```

```typescript
import { LocationInterface, OrientiationInterface } from '../../interfaces/';
import { DialogService, LocationService } from '../../services';
import { CitySelectionDialogComponent } from '../city-selection-dialog/';

@Component({
    selector: 'locations',
    templateUrl: './locations.component.html',
    styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
    public destinationList$: Observable<DestinationInterface[]>;
    public selectedCity: string;

    constructor(
        private dialogService: DialogService,
        private locationService: LocationService,
        private route: ActivatedRoute,
        private titleService: Title,
    ) {}

    public ngOnInit(): void {
        this.destinationList$ = this.destinationCompass();

        this.destinationList$.subscribe(
            (next) => {
                console.log(next);
            },
            /**
             * When there is an error navigate to page-not-found.component
             * by triggering an invalid route
             */
            async (_error) => {
                // await this.router.navigateByUrl('/404');
            },
        );
    }
}