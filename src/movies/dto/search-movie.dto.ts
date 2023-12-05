export class SearchMovieDto {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;

  constructor(entity: SearchMovieDto) {
    this.title = entity.title;
    this.year = entity.year;
    this.imdbID = entity.imdbID;
    this.type = entity.type;
    this.poster = entity.poster;
  }
}
