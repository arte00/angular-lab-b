import {Component, Input, OnInit} from '@angular/core';
import {RandomService} from "../random.service";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  public randomNumber!: number;

  @Input()
    max = 10;

  constructor(private randomNumberService: RandomService) {
  }

  ngOnInit(): void {
    this.randomNumber = this.randomNumberService.randomNumber(this.max);
  }


  public onClick() {
    this.randomNumber = this.randomNumberService.randomNumber(this.max);
  }

  public isSmallerThanHalf(): boolean {
    return this.randomNumber <= this.max / 2;
  }

}
