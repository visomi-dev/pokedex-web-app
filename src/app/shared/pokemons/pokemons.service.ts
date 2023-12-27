import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private readonly httpClient = inject(HttpClient)

  readonly pokemons = signal<{ name: string, url: string }[]>([])

  async getAllPokemons()  {
    const {
      results
    } = await lastValueFrom(
      this.httpClient.get<{
        count: number,
        next: string,
        previous: string,
        results: { name: string, url: string }[]
      }>('https://pokeapi.co/api/v2/pokemon')
    )

    this.pokemons.set(results);
  }
}
