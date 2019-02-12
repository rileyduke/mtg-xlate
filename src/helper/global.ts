import { Injectable } from '@angular/core';

@Injectable()
export class GLOBALS {
  private JISHO_URL: string = "https://jisho.org/api/v1/search/";
  private JISHO_WORD_SEARCH: string = "words?keyword=";
  private DATABASE_NAME: string = "pisho.db";

  public getWordSearchURL = function(searchTerm):string {
      return this.JISHO_URL + this.JISHO_WORD_SEARCH + searchTerm;
  }

  public getDatabaseName = function():string {
    return this.DATABASE_NAME;
  }

}