// the front and back of a card will store
// a github-style markdown string which
// will be used to display the card.
export class Card {
    constructor(){
        this.back = [];
        this.front = [];
    }

    get_front(){
        var ret_front = '';
        this.front.forEach(x => {
            ret_front += x;
        });
        return ret_front;   
    };
    get_back(): String{
        var ret_back = '';
        this.back.forEach(x => {
            ret_back += x; 
        });
        return ret_back;
    };

    front: string[];
    back: string[];

    card: Card;

    // getFront: 
}