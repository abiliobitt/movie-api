export class FindMovieByIdDto {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
  rated?: string;
  released?: string;
  runtime?: string;
  genre?: string;
  director?: string;
  writer?: string;
  actors?: string;
  plot?: string;
  language?: string;
  country?: string;
  awards?: string;
  metascore?: string;
  imdbrating?: string;
  imdbvotes?: string;
  dvd?: string;
  boxoffice?: string;
  production?: string;
  website?: string;
  response?: string;
  ratings?: [{ source: string; value: string }];

  constructor(entity: any) {
    this.title = entity.title;
    this.year = entity.year;
    this.imdbID = entity.imdbid;
    this.type = entity.type;
    this.poster = entity.poster;
    this.rated = entity.rated;
    this.released = entity.released;
    this.runtime = entity.runtime;
    this.genre = entity.genre;
    this.director = entity.director;
    this.writer = entity.writer;
    this.actors = entity.actors;
    this.plot = entity.plot;
    this.language = entity.language;
    this.country = entity.country;
    this.awards = entity.awards;
    this.metascore = entity.metascore;
    this.imdbrating = entity.imdbrating;
    this.imdbvotes = entity.imdbvotes;
    this.dvd = entity.dvd;
    this.boxoffice = entity.boxoffice;
    this.production = entity.production;
    this.website = entity.website;
    this.response = entity.response;
    this.ratings = entity.ratings;
  }
}
