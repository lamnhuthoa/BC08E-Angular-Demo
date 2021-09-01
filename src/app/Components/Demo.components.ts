import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo',
    //template là nội dung của thẻ
    template: `
        <div>
            Demo Component Angular
        </div>
        `
})

export class DemoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}