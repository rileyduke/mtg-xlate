import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'create-deck',
    templateUrl: 'deck.create.html'
})
export class DeckCreate {
    public name: string;
    public description: string;
    constructor(params: NavParams) {
    }

    public createDeck(){
    }
}
