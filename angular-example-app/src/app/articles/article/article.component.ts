import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bx-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()
  article;
  @Output()
  addEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  voteUp(votes): boolean {
    let currentVotes = +votes;
    currentVotes += 1;
    this.article.votes = currentVotes;
    this.addEvent.emit(currentVotes);
    return false;
  }

  voteDown(votes): boolean {
    let currentVotes = +votes;
    currentVotes -= 1;
    this.article.votes = currentVotes;
    return false;
  }
  // domain() is a utility function that extracts
    // the domain from a URL, which we'll explain shortly
    domain(link): string {
      try {
        // e.g. http://foo.com/path/to/bar
        const domainAndPath: string = link.split('//')[1];
        // e.g. foo.com/path/to/bar
        return domainAndPath.split('/')[0];
      } catch (err) {
        return null;
      }
    }

}
