import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  

  quotes: Quote[] = [
    new Quote('Do your best until your good is better and your better is best', 'Rex Hans', 'Faith',0,1),
    new Quote('Every master was once a Bigginer', 'Ali Mohammed', 'Fadhul',0,2),
    new Quote('Everyone is born intelligent.It takes hardwork to die a fool', 'Lucy Serwa', 'Ian',0,3),
  ];

  delete(i) {
    this.quotes.splice(i, 1)
  }

  addNewQuote(quote){
    let quoteLength= this.quotes.length;
    quote.text=quote.text;
    quote.author=quote.author;
    quote.submitter=quote.submitter;
    quote.upvotes=quote.upvotes;
    quote.downvotes=quote.downvotes


    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}

