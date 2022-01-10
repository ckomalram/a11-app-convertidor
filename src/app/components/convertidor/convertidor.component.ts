import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  cantidad: number = 0;
  tengo: string = 'USD';
  quiero: string = 'EUR';
  total: number = 0;

  monedas: string[] = ['USD', 'EUR', 'LIBRAS'];



  constructor() { }

  ngOnInit(): void {
  }

  convertir() {
    // console.log('Llamando metodo convertir..');

    switch (this.tengo) {
      case 'USD':
        if (this.quiero === 'USD') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.88;
        }
        if (this.quiero === 'LIBRAS') {
          this.total = this.cantidad * 0.74;
        }

        break;
      case 'EUR':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.14;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'LIBRAS') {
          this.total = this.cantidad * 0.84;
        }
        break;
      case 'LIBRAS':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.36;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 1.20;
        }
        if (this.quiero === 'LIBRAS') {
          this.total = this.cantidad;
        }
        break;

      default:
        break;
    }
  }

}
