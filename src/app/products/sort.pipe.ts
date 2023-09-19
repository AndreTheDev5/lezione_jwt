import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'sort',
  pure: false
})

export class SortPipe implements PipeTransform {

  transform(value: Product[]): Product[] {  // La funzione transform è tipica delle PIPE 
    // si sta assegnando al valore value la definizione dell'array products =[] mediante la tipizzazione forte di TypeScript
    // che inizializza l'array come  products:Product[] = []. 
    // Dopo i due punti si scrive il risultato della "transform"

    if(value)
    {
      return value.sort((a:Product, b:Product) => {
        if(a.price < b.price) //"cetrioli" < "zucchero" -> "c" < "z" -> 99 < 122 
        {
          return -1;
        }
        else if(b.price < a.price)
        {
          return 1;
        }
        return 0;
      });
    }

    return [];
  }

}