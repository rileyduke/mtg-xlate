import { Component } from '@angular/core';
import { Renderer } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard';
import { NavController, LoadingController } from 'ionic-angular';
import { GLOBALS } from '../../helper/global';

import { SearchService } from './search.service';

import { CardCreate } from '../card/card.create';

import { KeywordResult } from '../../models/KeywordResult';
import { DataResult } from '../../models/DataResult';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [GLOBALS, SearchService]
})
export class SearchPage {
  searchTerm: string;
  returnJSON: KeywordResult;

  constructor(public navCtrl: NavController, 
    private globals: GLOBALS,
    private searchService: SearchService,
    private keyboard: Keyboard,
    private renderer: Renderer,
    private loadingController: LoadingController) {
      this.returnJSON = {
        data: []
      } as KeywordResult;
  }

  searchJisho(event, term){
    let loading = this.loadingController.create({
      content: 'Searching...'
    });
  
    loading.present();
  
    this.renderer.invokeElementMethod(event.target, 'blur');
    this.keyboard.close();
    this.searchService.getJishoTerm(term).subscribe(result => {
      loading.dismiss();
      this.returnJSON = result;
    });
  }

  createCard(dataResult: DataResult){
    this.navCtrl.push(CardCreate, { cardResult: dataResult });
  }

  closeKeyboard(){
    this.keyboard.close();
  }

}
