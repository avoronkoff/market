import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const phones = [
      {
        id: 1,
        phone: 'Смартфон Apple iPhone SE',
        img: './assets/iphone.jpg',
        price: '59100',
        counts: '0'
      },
      {
        id: 2,
        phone: 'Смартфон HTC Desire 628',
        img: './assets/htc.jpg',
        price: '50100',
        counts: '0'
      },
      {
        id: 3,
        phone: 'Смартфон Sony Xperia',
        img: './assets/sony.jpg',
        price: '60100',
        counts: '0'
      },
      {
        id: 4,
        phone: 'Смартфон Samsung Galaxy',
        img: './assets/samsung.jpg',
        price: '9100',
        counts: '0'
      },
      {
        id: 5,
        phone: 'Nokia 5',
        img: './assets/nokia.jpg',
        price: '5100',
        counts: '0'
      },
      {
        id: 6,
        phone: 'Смартфон Alcatel Shine Lite',
        img: './assets/alcatel.jpg',
        price: '14100',
        counts: '0'
      }
    ];
    return {phones};
  }
}
