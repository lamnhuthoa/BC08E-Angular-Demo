import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-footer',
    template: `
        <div class="bt-footer" style="height: 200px">
            BT Footer
        </div>
    `,
    styles: [`
        .bt-footer{
            background: blue;
        }
    `]
})

export class BTFooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}