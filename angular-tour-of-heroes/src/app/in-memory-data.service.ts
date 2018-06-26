import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Dumbo' },
      { id: 14, name: 'Celery Man' },
      { id: 15, name: 'Rubber Duck' },
      { id: 16, name: 'Large Building' },
      { id: 17, name: 'Nice Old Man' },
      { id: 18, name: 'Smart Guy' },
      { id: 19, name: 'Higher Than Normal Temperature Guy' },
      { id: 20, name: 'Slightly Cold Woman' }
    ];
    return { heroes };
  }
}