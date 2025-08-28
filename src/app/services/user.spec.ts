import { TestBed } from '@angular/core/testing';

// Importe o serviço, não a interface
import { UserService } from './user';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // Altere aqui para injetar o serviço
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
