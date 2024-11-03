import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FixerApiService {
    private urlBase: string = "http://data.fixer.io/api/"
    private apiKey: string = "2d9f8011b576dd6ad1ef814a06b063da"

  //   public apiResult: BehaviorSubject<any> = new BehaviorSubject(null);
  //   public symbolsResult: BehaviorSubject<any> = new BehaviorSubject(null);
   public symbols: any;
    public apiArrayRates: any;

    constructor(private http: HttpClient) {
    }
    ngOnInit(): void {
      console.log(this.symbols);
    }
  async getApiRate() {
      this.http.get(`${this.urlBase}latest?access_key=${this.apiKey}`).subscribe(
        (returnedValue: any) => {
          // Extraindo as taxas e transformando-as em uma array de objetos
          const ratesArray = Object.entries(returnedValue.rates).map(([currency, rate]) => ({
            currency,
            rate
          }));

          this.apiArrayRates = ratesArray;
        },
      );
    }

    getApiSymbols() {
      this.http.get(`${this.urlBase}symbols?access_key=${this.apiKey}`).subscribe(
        (returnedValue: any) => {
          const symbolsArray = Object.entries(returnedValue.symbols).map(([symbol, description]) => ({
            symbol,
            description
          }));
          return symbolsArray;
        },
      );
    }

    saveApi(){
      this.symbols = this.getApiSymbols();
      return this.symbols;
    }
  // async getApi(): Promise<any[]> {
  //   const url = 'https://data.fixer.io/api/symbols?access_key=' + this.apiKey;
  //   const options = {
  //     method: 'GET',
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const resultText = await response.text();
  //     const result = JSON.parse(resultText);

  //     const symbolsArray = Object.entries(result.symbols).map(([symbol, description]) => ({
  //       symbol,
  //       description
  //     }));

  //     return symbolsArray;

  //   } catch (error) {
  //     console.error(error);
  //     return [];
  //   }
  // }

}
