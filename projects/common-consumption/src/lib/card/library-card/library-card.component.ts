import { IContent, LibraryCardTypes, ICardClick } from './../models';
import { Component, Input, OnInit, EventEmitter, Output, TemplateRef, AfterViewInit } from '@angular/core';
import { staticContent } from './library-card.data';

@Component({
    selector: 'sb-library-card',
    templateUrl: './library-card.component.html',
    styleUrls: ['./library-card.component.scss']
})
export class LibraryCardComponent implements OnInit, AfterViewInit {

    @Input() content: IContent|any;
    @Input() isMobile = false;
    @Input() isOffline = false;
    @Input() cardImg = '';
    @Input() type: LibraryCardTypes = LibraryCardTypes.DESKTOP_TEXTBOOK;
    @Input() moreInfoLabel = 'Medium';
    @Input() section = '';
    @Input() isLoading:boolean;
    @Input('hover-template') gridTemplate: TemplateRef<any>;
    @Input() btnlabel = '';
    @Input() btnicon = '';
    @Input() isMenu: boolean = false;

    @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();
    @Output() menuClick: EventEmitter<ICardClick> = new EventEmitter();

    get LibraryCardTypes() { return LibraryCardTypes; }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
    }

    onClick(event: MouseEvent) {
        console.log("Sharath Got Clicked");
        this.cardClick.emit({ event: event, data: this.content });
    }
    onMenuClick(event: MouseEvent) {
        console.log("Sharath's Daugther Got Clicked");
        this.menuClick.emit({ event: event, data: this.content });
    }

    test() {

    }
}
