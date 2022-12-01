import { Component, OnInit } from '@angular/core';
import { PreguntadosService } from 'src/app/shared/services/preguntados.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'app-preguntados-page',
  templateUrl: './preguntados-page.component.html',
  styleUrls: ['./preguntados-page.component.css']
})
export class PreguntadosPageComponent implements OnInit {

  characterImg: any;
  characterName: any;
  dummy1: any;
  dummy2: any;
  dummy3: any;
  array = [];
  points: number = 0;


  constructor(private toastr: ToastrService,
    private service: PreguntadosService,
    public auth: AuthService,
    public spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.getQuestionCharacter();
  }

  getQuestionCharacter() {
    return new Promise((resolve, reject) => {
      this.service.getRandomCharacter().subscribe((data: any) => {
        this.characterImg = data[0].image;
        this.characterName = data[0].character;
        this.dummy1 = data[1].character;
        this.dummy2 = data[2].character;
        this.dummy3 = data[3].character;
        this.array.push(this.characterName);
        this.array.push(this.dummy1);
        this.array.push(this.dummy2);
        this.array.push(this.dummy3);
        this.randomizeArray();
        console.log(this.array);
        console.log(this.characterImg);
        resolve(data);
      });
    });
  }

  randomizeArray() {
    for (let i = this.array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
    }
  }

  checkAnswer(answer) {
    if (answer === this.characterName) {
      this.toastr.success('Right!', '', {
        timeOut: 3000,
        positionClass: 'toast-center-center',
      });
      this.points++;
    } else {
      this.auth.SetScore("preguntados", this.points);
      this.toastr.warning('Points: ' + this.points,
        'Wrong!' + ' ' + 'The right answer is:' + ' ' + this.characterName, {
        timeOut: 3000,
        positionClass: 'toast-center-center',
      });

      this.points = 0;
    }
    this.array = [];
    this.getQuestionCharacter();
  }
}
