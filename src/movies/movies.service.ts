import { Injectable } from '@nestjs/common';

import { map } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { SearchMovieDto } from './dto/search-movie.dto';
import { FindMovieByIdDto } from './dto/find-movie-by-id.dto';

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

  findOne(id: string) {
    return this.httpService
      .get(`https://www.omdbapi.com/?i=${id}&apikey=${process.env.API_KEY}`)
      .pipe(
        map((response) => {
          // eslint-disable-next-line prefer-const
          let key,
            keys = Object.keys(response.data);
          let n = keys.length;
          const newObj = {};
          while (n--) {
            key = keys[n];
            newObj[key.toLowerCase()] = response.data[key];
          }
          return new FindMovieByIdDto(newObj);
        }),
      );
  }
}
