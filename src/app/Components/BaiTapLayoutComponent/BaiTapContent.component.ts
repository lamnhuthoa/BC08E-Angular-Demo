import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-content',
    template: `
        <div class="bt-content" style="height: 300px">
            BT Content
        </div>
    `,
    styles: [`
        .bt-content{
            background: green;
        }
    `]
})

export class BTContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}