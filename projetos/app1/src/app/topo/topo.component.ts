import { Component } from '@angular/core';

@Component({
  selector: 'app-topo',
  // selector: '[app-topo]',
  // selector: '.app-topo',
  templateUrl: './topo.component.html',
  // template: `
  //   <p>
  //     Esse é o componente topo</p>
  //   `
  // styles: [`.exemplo {
  //   color: red
  // }`]
  styleUrls: ['./topo.component.css']
})
export class TopoComponent {
  public titulo: string = 'Aprendendo Inglês'
}
