import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  elements!: string[];
  inputText!: string;

  ngOnInit(): void {
    this.inputText = '';
    this.elements = [];
  }

  public readInput(): void {
    this.elements.push(this.inputText);
    this.inputText = '';
  }

  public removeItem(index: number): void {
    this.elements.splice(index, 1);
  }

}
