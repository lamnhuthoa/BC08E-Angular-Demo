import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-slider',
    template: `
        <div class="bt-slider" style="height: 300px">
            BT Slider
        </div>
    `,
    styles: [`
        .bt-slider{
            background: yellow;
        }
    `]
})

export class BTSliderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}