import { Controller, Get, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('/search')
  search(@Query('movieName') movieName: string) {
    return this.moviesService.search(movieName);
  }
}
