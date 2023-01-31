select "title",
      "releaseYear",
      "genres"."name" as "genres"
  from "films"
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
  where "title" = 'Boogie Amelie';
