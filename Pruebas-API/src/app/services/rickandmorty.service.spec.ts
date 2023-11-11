import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RickandmortyService } from './rickandmorty.service';


// import { Personaje } from './interfaces/rickandmorty.interfaces';

describe('RickandmortyService', () => {
  let service: RickandmortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(RickandmortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return Morty when calling obtenerUnPersonaje(2)',
  (done:DoneFn)/*Esto es para que termine de cargar la consulta*/ =>{ 
    const id =2;
    service.getUnPersonaje(id).subscribe((morty)=>{
      console.log(morty); 
      expect(morty.name).toBe('Morty Smith');
      done();
    })
  });


});
