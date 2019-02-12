import { Injectable } from '@angular/core'; 
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
 
import { GLOBALS } from '../helper/global';
import { KeywordResult } from '../models/KeywordResult';
import { Card } from '../models/Card';
 
@Injectable()
export class Database {
    // database object
    private db: SQLiteObject;

    // options
    private options: any;

    constructor(private globals: GLOBALS, private sqlite: SQLite) { 
        this.initialize();
    }

    // initialize database object. it can be accessed later.
    public initialize():void {
        this.options  = {
            name: this.globals.getDatabaseName(),
            location: 'default',
            createFromLocation: 1,
            androidDatabaseImplementation: 2
        };
        this.sqlite.create(this.options).then((dbb: SQLiteObject) => {
            console.log("db initializing");
            this.db = dbb;
            var sql = 'create table IF NOT EXISTS `user` (username VARCHAR(255), password VARCHAR(255)); ';

            // init db
            this.db.executeSql(sql, {}).catch(e => "Error: " + JSON.stringify(e));

            this.db.executeSql("truncate table user;",{}).catch(e => "Error: " + JSON.stringify(e));
            console.log("db initialized");
        }).catch(e => JSON.stringify(e));
    }

    public insertTest(card: Card) {
        //alert("test");
        return new Promise((resolve, reject) => {
            let balanceQuery = "insert into user values (?1,?2)";
            var get_back = card.get_back();
            var get_front = card.get_front();
            console.log(get_back);
            console.log(get_front);
            // this.db.executeSql('INSERT INTO user VALUES (?1,?2)', ['Betty', 202]);
            this.db.executeSql(balanceQuery, [get_back,get_front]).then((data) => {
            }).catch((err)=>{ 
                alert(err); 
                reject(err);
            }); // we deal with errors etc
        })
    }

    public getTest():Promise<void> {
        return new Promise((resolve, reject) => {
            let balanceQuery = "select * from user where username <> 'test'";
            this.db.executeSql(balanceQuery, []).then((data) => {
                let balance = data.rows.item(0);
                // if we successfully obtain data - we resolve it, means it can be available via callback
                resolve(balance)
            }).catch((err)=>{ console.log(err); reject(err)}) // we deal with errors etc
        })
    
    }
}