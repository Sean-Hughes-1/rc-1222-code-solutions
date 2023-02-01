select "genres"."name" as "genre",
    count("filmGenre".*) as "numFilms"
    from "actors"
    join "castMembers" using ("actorId")
    join "films" using ("filmId")
    join "filmGenre" using ("filmId")
    join "genres" using ("genreId")
    where "actorId" = 178
    group by "genreId";
