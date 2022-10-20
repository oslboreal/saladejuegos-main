import { Component, OnInit } from '@angular/core';
import { MayorMenorService } from 'src/app/shared/services/mayor-menor.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'app-mayor-menor-page',
  templateUrl: './greater-or-less-page.component.html',
  styleUrls: ['./greater-or-less-page.component.css'],
})
export class MayorMenorPageComponent implements OnInit {

  cardValue: number;
  oldCardValue: number;
  cardImage: any;
  oldCardImage: any;
  result = null;
  points: number = 0;

  constructor(private toastr: ToastrService,
    private service: MayorMenorService,
    public auth: AuthService,
    public spinnerService: SpinnerService) { }


  ngOnInit(): void {
    this.getRandomCard();
  }

  getRandomCard() {
    return new Promise((resolve, reject) => {
      this.service.getRandomCard().subscribe((data: any) => {
        this.storeCard(data)
        resolve(data);
      });
    });
  }

  storeCard(data) {
    if (data.cards[0].value === 'JACK') {
      this.cardValue = 11;
    } else if (data.cards[0].value === 'QUEEN') {
      this.cardValue = 12;
    } else if (data.cards[0].value === 'KING') {
      this.cardValue = 13;
    } else if (data.cards[0].value === 'ACE') {
      this.cardValue = 1;
    } else {
      this.cardValue = parseInt(data.cards[0].value);
    }
    this.cardImage = data.cards[0].image;
  }

  chosenOption(option) {
    this.oldCardValue = this.cardValue;
    this.oldCardImage = this.cardImage;
    this.getRandomCard().then(() => {
      console.log(this.oldCardValue);
      console.log(this.cardValue);
      if (option === 'greater') {
        if (this.cardValue > this.oldCardValue) {
          this.win();
        } else if (this.cardValue < this.oldCardValue) {
          this.lose();
        }
      }
      if (option === 'lower') {
        if (this.cardValue < this.oldCardValue) {
          this.win();
        } else if (this.cardValue > this.oldCardValue) {
          this.lose();
        }
      }
    });
  }

  win() {
    this.result = true;
    this.points++;
  }

  lose() {
    this.auth.SetScore("greater-or-lower", this.points);
    this.result = false;
    this.showResult();
    this.points = 0;
  }

  showResult() {
    this.toastr.warning('Puntuación final: ' + this.points + ' points', 'GAME OVER...', {
      timeOut: 3000,
      positionClass: 'toast-center-center',
    });
  }
}
