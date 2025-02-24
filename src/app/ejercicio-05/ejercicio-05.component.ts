import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-05',
  imports: [],
  templateUrl: './ejercicio-05.component.html',
  styleUrl: './ejercicio-05.component.css'
})
export class Ejercicio05Component {
  operatingSystems=
  [
    {id: 'win', name: 'Windows'},
    {id: 'mac', name: 'MacOs'},
    {id: 'lin', name: 'Linux'}
  ];
  users = [{
    id: 1, name: 'Lorena'},
    {id:2, name: 'Zyan'},
    {id:3, name: 'Karen'},
    {id:4, name: 'Uriel'},
    {id:5, name: 'Francisco'},
  ]}
