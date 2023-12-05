import { Injectable } from '@nestjs/common';

import { map } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { SearchMovieDto } from './dto/search-movie.dto';

@Injectable()
export class MoviesService {
  constructor(private readonly httpService: HttpService) {}
  search(name: string) {
    return this.httpService
      .get(`https://www.omdbapi.com/?s=${name}&apikey=${process.env.API_KEY}`)
      .pipe(
        map((response) => {
          return response.data.Search.map(
            (movie) =>
              new SearchMovieDto({
                title: movie.Title,
                year: movie.Year,
                imdbID: movie.imdbID,
                type: movie.Type,
                poster: movie.Poster,
              }),
          );
        }),
      );
  }
}
