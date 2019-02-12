import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataResult } from '../../models/DataResult';
import { Card } from '../../models/Card';
import { Database } from '../../database/database';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite';

@Component({
    selector: 'create-card',
    templateUrl: 'card.create.html'
})
export class CardCreate {
    public cardResult: DataResult;
    private createdCard: Card;
    private database: SQLiteObject;

    private front: String[] = ['word'];
    private back: String[] = ['reading'];

    constructor(params: NavParams, 
        private dbase: Database, 
        private sqlite: SQLite) {
            this.createdCard = new Card();
            this.cardResult = params.data.cardResult;
            this.dbase.initialize();
    }

    ionViewDidEnter(){
        console.log("view did enter");    
    }

    public createCard(){
        alert("clicked");
        // this.createdCard.front
        this.createdCard.front = [this.cardResult.japanese[0].word + "[" + this.cardResult.japanese[0].reading + "]"];
        // this.createdCard.back = [this.cardResult.senses]
        this.createdCard.back = [];
        this.cardResult.senses[0].english_definitions.forEach(eng => {
            this.createdCard.back.push(eng);
        });

        console.log(this.cardResult);
        console.log(this.createdCard);
        this.dbase.insertTest(this.createdCard).catch(err => {
            console.log(err);  
        });
    }

    public getCard(){
        this.dbase.getTest().then(x=>{
            console.log("result? ",x);
        }).catch(err => {
            console.log(err);  
        });
    }
}
