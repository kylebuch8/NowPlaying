(function() {
	'use strict';

	/*global angular, localStorage*/
	angular.module('NowPlayingApp')
		.service('NowPlayingSvc', ['$q', '$http', function NowPlayingSvc($q, $http) {
			var movies = [],
				savedMovies = [];

			function getSavedMovies() {
    			savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    			return savedMovies;
			}

    		return {
    			getMovies: function() {
    				var deferred = $q.defer();

					if (movies.length === 0) {
						return $http
	    					.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?callback=JSON_CALLBACK&apikey=723yhcv78vu2ut757tp63yjg')
	    					.success(function(data) {
	    						/*
	    						 * let's check to see if there are any saved movies.
	    						 * if there are, we'll want to indicate that the movie
	    						 * has been saved
	    						 */
	    						savedMovies = getSavedMovies();

	    						if (savedMovies.length > 0) {
		    						angular.forEach(data.movies, function(movie) {
		    							angular.forEach(savedMovies, function(savedMovie) {
		    								if (movie.title === savedMovie.title) {
		    									movie.saved = true;
		    								}
		    							});
		    						});
	    						}

	    						movies = data;
	    						return movies;
	    					});
					}

					deferred.resolve({
    					data: movies
    				});

    				return deferred.promise;
       			},
    			saveMovie: function(movie) {
    				movie.saved = true;
    				/*
    				 * push the movie to the front of the array
    				 */
    				savedMovies.unshift(movie);
    				localStorage.setItem('savedMovies', JSON.stringify(savedMovies));

    				return savedMovies;
    			},
    			getSavedMovies: getSavedMovies,
    			removeSavedMovie: function(movie) {
    				var i = 0,
    					length = savedMovies.length;

    				for (i; i < length; i += 1) {
    					if (savedMovies[i].title === movie.title) {
    						movie.saved = false;
    						savedMovies.splice(i, 1);
    						break;
    					}
    				}

    				localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    			},
    			data: {
				    "total": 122,
				    "movies": [
				        {
				            "id": "771245727",
				            "title": "Despicable Me 2",
				            "year": 2013,
				            "mpaa_rating": "PG",
				            "runtime": 98,
				            "critics_consensus": "It may not be as inspired as its predecessor, but Despicable Me 2 offers plenty of eye-popping visual inventiveness and a number of big laughs.",
				            "release_dates": {
				                "theater": "2013-07-03"
				            },
				            "ratings": {
				                "critics_rating": "Certified Fresh",
				                "critics_score": 76,
				                "audience_rating": "Upright",
				                "audience_score": 89
				            },
				            "synopsis": "Universal Pictures and Illumination Entertainment's worldwide blockbuster Despicable Me entertained audiences around the globe in 2010, grossing more than $540 million and becoming the 10th-biggest animated motion picture in U.S. history. In summer 2013, get ready for more Minion madness in Despicable Me 2. (c) Universal",
				            "posters": {
				                "thumbnail": "http://content8.flixster.com/movie/11/17/21/11172174_mob.jpg",
				                "profile": "http://content8.flixster.com/movie/11/17/21/11172174_pro.jpg",
				                "detailed": "http://content8.flixster.com/movie/11/17/21/11172174_det.jpg",
				                "original": "http://content8.flixster.com/movie/11/17/21/11172174_ori.jpg"
				            },
				            "abridged_cast": [
				                {
				                    "name": "Steve Carell",
				                    "id": "162652665",
				                    "characters": [
				                        "Gru"
				                    ]
				                },
				                {
				                    "name": "Kristen Wiig",
				                    "id": "770670481",
				                    "characters": [
				                        "Lucy"
				                    ]
				                },
				                {
				                    "name": "Benjamin Bratt",
				                    "id": "162653200",
				                    "characters": [
				                        "Eduardo/El Macho"
				                    ]
				                },
				                {
				                    "name": "Miranda Cosgrove",
				                    "id": "404566882",
				                    "characters": [
				                        "Margo"
				                    ]
				                },
				                {
				                    "name": "Russell Brand",
				                    "id": "770683602",
				                    "characters": [
				                        "Dr. Nefario"
				                    ]
				                }
				            ],
				            "alternate_ids": {
				                "imdb": "1690953"
				            },
				            "links": {
				                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771245727.json",
				                "alternate": "http://www.rottentomatoes.com/m/despicable_me_2/",
				                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771245727/cast.json",
				                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771245727/clips.json",
				                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771245727/reviews.json",
				                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771245727/similar.json"
				            }
				        },
				        {
				            "id": "771238418",
				            "title": "Monsters University",
				            "year": 2013,
				            "mpaa_rating": "G",
				            "runtime": 95,
				            "critics_consensus": "It doesn't scale the heights of Pixar's finest efforts, but Monsters University is still funny and thoughtful family entertainment for viewers of any age.",
				            "release_dates": {
				                "theater": "2013-06-21"
				            },
				            "ratings": {
				                "critics_rating": "Certified Fresh",
				                "critics_score": 78,
				                "audience_rating": "Upright",
				                "audience_score": 87
				            },
				            "synopsis": "Mike Wazowski and James P. Sullivan are an inseparable pair, but that wasn't always the case. From the moment these two mismatched monsters met they couldn't stand each other. \"Monsters University\" unlocks the door to how Mike and Sulley overcame their differences and became the best of friends. -- (C) Walt Disney",
				            "posters": {
				                "thumbnail": "http://content6.flixster.com/movie/11/16/99/11169964_mob.jpg",
				                "profile": "http://content6.flixster.com/movie/11/16/99/11169964_pro.jpg",
				                "detailed": "http://content6.flixster.com/movie/11/16/99/11169964_det.jpg",
				                "original": "http://content6.flixster.com/movie/11/16/99/11169964_ori.jpg"
				            },
				            "abridged_cast": [
				                {
				                    "name": "Billy Crystal",
				                    "id": "162655707",
				                    "characters": [
				                        "Mike"
				                    ]
				                },
				                {
				                    "name": "John Goodman",
				                    "id": "162655706",
				                    "characters": [
				                        "Sullivan"
				                    ]
				                },
				                {
				                    "name": "Steve Buscemi",
				                    "id": "162652875",
				                    "characters": [
				                        "Randy"
				                    ]
				                },
				                {
				                    "name": "Helen Mirren",
				                    "id": "162662871",
				                    "characters": [
				                        "Dean Hardscrabble"
				                    ]
				                },
				                {
				                    "name": "Peter Sohn",
				                    "id": "770673194",
				                    "characters": [
				                        "Squishy"
				                    ]
				                }
				            ],
				            "alternate_ids": {
				                "imdb": "1453405"
				            },
				            "links": {
				                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771238418.json",
				                "alternate": "http://www.rottentomatoes.com/m/monsters_university/",
				                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771238418/cast.json",
				                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771238418/clips.json",
				                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771238418/reviews.json",
				                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771238418/similar.json"
				            }
				        },
				        {
				            "id": "770785616",
				            "title": "World War Z",
				            "year": 2013,
				            "mpaa_rating": "PG-13",
				            "runtime": 115,
				            "critics_consensus": "It's uneven and diverges from the source book, but World War Z still brings smart, fast-moving thrills and a solid performance from Brad Pitt to the zombie genre.",
				            "release_dates": {
				                "theater": "2013-06-21"
				            },
				            "ratings": {
				                "critics_rating": "Fresh",
				                "critics_score": 67,
				                "audience_rating": "Upright",
				                "audience_score": 77
				            },
				            "synopsis": "The story revolves around United Nations employee Gerry Lane (Pitt), who traverses the world in a race against time to stop a pandemic that is toppling armies and governments and threatening to decimate humanity itself. (C) Paramount",
				            "posters": {
				                "thumbnail": "http://content8.flixster.com/movie/11/17/17/11171734_mob.jpg",
				                "profile": "http://content8.flixster.com/movie/11/17/17/11171734_pro.jpg",
				                "detailed": "http://content8.flixster.com/movie/11/17/17/11171734_det.jpg",
				                "original": "http://content8.flixster.com/movie/11/17/17/11171734_ori.jpg"
				            },
				            "abridged_cast": [
				                {
				                    "name": "Brad Pitt",
				                    "id": "162652627",
				                    "characters": [
				                        "Gerry Lane"
				                    ]
				                },
				                {
				                    "name": "Mireille Enos",
				                    "id": "770770988",
				                    "characters": [
				                        "Karin Lane"
				                    ]
				                },
				                {
				                    "name": "Daniella Kertesz",
				                    "id": "771448280",
				                    "characters": [
				                        "Segen"
				                    ]
				                },
				                {
				                    "name": "James Badge Dale",
				                    "id": "359854267",
				                    "characters": [
				                        "Capt. Speke"
				                    ]
				                },
				                {
				                    "name": "Ludi Boeken",
				                    "id": "326433563",
				                    "characters": [
				                        "Warmbrumm"
				                    ]
				                }
				            ],
				            "alternate_ids": {
				                "imdb": "0816711"
				            },
				            "links": {
				                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/770785616.json",
				                "alternate": "http://www.rottentomatoes.com/m/world-war-z/",
				                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/770785616/cast.json",
				                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/770785616/clips.json",
				                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/770785616/reviews.json",
				                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/770785616/similar.json"
				            }
				        },
				        {
				            "id": "770678819",
				            "title": "Man of Steel",
				            "year": 2013,
				            "mpaa_rating": "PG-13",
				            "runtime": 148,
				            "critics_consensus": "Superman's return to the big screen is mostly successful, as Man of Steel provides enough exhilarating action and spectacle to overcome its occasional detours into generic blockbuster territory.",
				            "release_dates": {
				                "theater": "2013-06-14"
				            },
				            "ratings": {
				                "critics_rating": "Rotten",
				                "critics_score": 56,
				                "audience_rating": "Upright",
				                "audience_score": 78
				            },
				            "synopsis": "A young boy learns that he has extraordinary powers and is not of this Earth. As a young man, he journeys to discover where he came from and what he was sent here to do. But the hero in him must emerge if he is to save the world from annihilation and become the symbol of hope for all mankind. -- (C) Warner Bros",
				            "posters": {
				                "thumbnail": "http://content6.flixster.com/movie/11/17/13/11171304_mob.jpg",
				                "profile": "http://content6.flixster.com/movie/11/17/13/11171304_pro.jpg",
				                "detailed": "http://content6.flixster.com/movie/11/17/13/11171304_det.jpg",
				                "original": "http://content6.flixster.com/movie/11/17/13/11171304_ori.jpg"
				            },
				            "abridged_cast": [
				                {
				                    "name": "Henry Cavill",
				                    "id": "341817917",
				                    "characters": [
				                        "Clark Kent/Kal-El"
				                    ]
				                },
				                {
				                    "name": "Amy Adams",
				                    "id": "162653029",
				                    "characters": [
				                        "Lois Lane"
				                    ]
				                },
				                {
				                    "name": "Michael Shannon",
				                    "id": "368451324",
				                    "characters": [
				                        "General Zod"
				                    ]
				                },
				                {
				                    "name": "Diane Lane",
				                    "id": "162652926",
				                    "characters": [
				                        "Martha Kent"
				                    ]
				                },
				                {
				                    "name": "Russell Crowe",
				                    "id": "162652569",
				                    "characters": [
				                        "Jor-El"
				                    ]
				                }
				            ],
				            "alternate_ids": {
				                "imdb": "0770828"
				            },
				            "links": {
				                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/770678819.json",
				                "alternate": "http://www.rottentomatoes.com/m/superman_man_of_steel/",
				                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/770678819/cast.json",
				                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/770678819/clips.json",
				                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/770678819/reviews.json",
				                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/770678819/similar.json"
				            }
				        },
				        {
				            "id": "771017189",
				            "title": "The Lone Ranger",
				            "year": 2013,
				            "mpaa_rating": "PG-13",
				            "runtime": 149,
				            "critics_consensus": "Armie Hammer and Johnny Depp make for an appealing pair of leads, but they're not enough to make up for The Lone Ranger's bland script, bloated length, and blaring action overkill.",
				            "release_dates": {
				                "theater": "2013-07-03"
				            },
				            "ratings": {
				                "critics_rating": "Rotten",
				                "critics_score": 25,
				                "audience_rating": "Upright",
				                "audience_score": 68
				            },
				            "synopsis": "From producer Jerry Bruckheimer and director Gore Verbinski, the filmmaking team behind the blockbuster \"Pirates of the Caribbean\" franchise, comes Disney/ Jerry Bruckheimer Films' \"The Lone Ranger,\" a thrilling adventure infused with action and humor, in which the famed masked hero is brought to life through new eyes. Native American spirit warrior Tonto (Johnny Depp) recounts the untold tales that transformed John Reid (Armie Hammer), a man of the law, into a legend of justice-taking the audience on a runaway train of epic surprises and humorous friction as the two unlikely heroes must learn to work together and fight against greed and corruption. (c) Disney",
				            "posters": {
				                "thumbnail": "http://content9.flixster.com/movie/11/17/21/11172175_mob.jpg",
				                "profile": "http://content9.flixster.com/movie/11/17/21/11172175_pro.jpg",
				                "detailed": "http://content9.flixster.com/movie/11/17/21/11172175_det.jpg",
				                "original": "http://content9.flixster.com/movie/11/17/21/11172175_ori.jpg"
				            },
				            "abridged_cast": [
				                {
				                    "name": "Johnny Depp",
				                    "id": "162652817",
				                    "characters": [
				                        "Tonto"
				                    ]
				                },
				                {
				                    "name": "Armie Hammer",
				                    "id": "770805003",
				                    "characters": [
				                        "John Reid/The Lone Ranger",
				                        "The Lone Ranger"
				                    ]
				                },
				                {
				                    "name": "Tom Wilkinson",
				                    "id": "162653769",
				                    "characters": [
				                        "Latham Cole"
				                    ]
				                },
				                {
				                    "name": "William Fichtner",
				                    "id": "162652209",
				                    "characters": [
				                        "Butch Cavendish"
				                    ]
				                },
				                {
				                    "name": "Barry Pepper",
				                    "id": "162671262",
				                    "characters": [
				                        "Fuller"
				                    ]
				                }
				            ],
				            "alternate_ids": {
				                "imdb": "1210819"
				            },
				            "links": {
				                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771017189.json",
				                "alternate": "http://www.rottentomatoes.com/m/the_lone_ranger/",
				                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771017189/cast.json",
				                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771017189/clips.json",
				                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771017189/reviews.json",
				                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771017189/similar.json"
				            }
				        },
				        {
				            "id": "771307102",
				            "title": "White House Down",
				            "year": 2013,
				            "mpaa_rating": "PG-13",
				            "runtime": 137,
				            "critics_consensus": "White House Down benefits from Channing Tatum and Jamie Foxx's sharp comedic chemistry, but director Roland Emmerich smothers it with narrative cliches and relentless, choppily edited action.",
				            "release_dates": {
				                "theater": "2013-06-28"
				            },
				            "ratings": {
				                "critics_rating": "Rotten",
				                "critics_score": 47,
				                "audience_rating": "Upright",
				                "audience_score": 73
				            },
				            "synopsis": "The White House is under siege in this action thriller from Independence Day director Roland Emmerich and The Amazing Spider-Man's writer James Vanderbilt in this Sony Pictures release. Channing Tatum stars. ~ Jeremy Wheeler, Rovi",
				            "posters": {
				                "thumbnail": "http://content8.flixster.com/movie/11/17/21/11172158_mob.jpg",
				                "profile": "http://content8.flixster.com/movie/11/17/21/11172158_pro.jpg",
				                "detailed": "http://content8.flixster.com/movie/11/17/21/11172158_det.jpg",
				                "original": "http://content8.flixster.com/movie/11/17/21/11172158_ori.jpg"
				            },
				            "abridged_cast": [
				                {
				                    "name": "Channing Tatum",
				                    "id": "162661835",
				                    "characters": [
				                        "Cale"
				                    ]
				                },
				                {
				                    "name": "Jamie Foxx",
				                    "id": "162652975",
				                    "characters": [
				                        "President Sawyer"
				                    ]
				                },
				                {
				                    "name": "Maggie Gyllenhaal",
				                    "id": "162663906",
				                    "characters": [
				                        "Finnerty"
				                    ]
				                },
				                {
				                    "name": "Jason Clarke",
				                    "id": "359854726",
				                    "characters": [
				                        "Stenz"
				                    ]
				                },
				                {
				                    "name": "Richard Jenkins",
				                    "id": "317606141",
				                    "characters": [
				                        "Raphelson"
				                    ]
				                }
				            ],
				            "alternate_ids": {
				                "imdb": "2334879"
				            },
				            "links": {
				                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771307102.json",
				                "alternate": "http://www.rottentomatoes.com/m/white_house_down/",
				                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771307102/cast.json",
				                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771307102/clips.json",
				                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771307102/reviews.json",
				                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771307102/similar.json"
				            }
				        },
				        {
				            "id": "771308691",
				            "title": "The Heat",
				            "year": 2013,
				            "mpaa_rating": "R",
				            "runtime": 117,
				            "critics_consensus": "The Heat is predictable, but Melissa McCarthy is reliably funny and Sandra Bullock proves a capable foil.",
				            "release_dates": {
				                "theater": "2013-06-28"
				            },
				            "ratings": {
				                "critics_rating": "Fresh",
				                "critics_score": 63,
				                "audience_rating": "Upright",
				                "audience_score": 78
				            },
				            "synopsis": "Uptight FBI Special Agent Sarah Ashburn (Sandra Bullock) and foul-mouthed Boston cop Shannon Mullins (Melissa McCarthy) couldn't be more incompatible. But when they join forces to bring down a ruthless drug lord, they become the last thing anyone expected: buddies. From Paul Feig, director of \"Bridesmaids.\" (c) Fox",
				            "posters": {
				                "thumbnail": "http://content8.flixster.com/movie/11/17/16/11171690_mob.jpg",
				                "profile": "http://content8.flixster.com/movie/11/17/16/11171690_pro.jpg",
				                "detailed": "http://content8.flixster.com/movie/11/17/16/11171690_det.jpg",
				                "original": "http://content8.flixster.com/movie/11/17/16/11171690_ori.jpg"
				            },
				            "abridged_cast": [
				                {
				                    "name": "Sandra Bullock",
				                    "id": "162652205"
				                },
				                {
				                    "name": "Melissa McCarthy",
				                    "id": "528361348"
				                },
				                {
				                    "name": "Kaitlin Olson",
				                    "id": "770781052"
				                },
				                {
				                    "name": "Taran Killam",
				                    "id": "395113361"
				                },
				                {
				                    "name": "Raw Leiba",
				                    "id": "771412530"
				                }
				            ],
				            "alternate_ids": {
				                "imdb": "2404463"
				            },
				            "links": {
				                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771308691.json",
				                "alternate": "http://www.rottentomatoes.com/m/the_heat/",
				                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771308691/cast.json",
				                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771308691/clips.json",
				                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771308691/reviews.json",
				                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771308691/similar.json"
				            }
				        },
				        {
				            "id": "771303549",
				            "title": "This Is the End",
				            "year": 2013,
				            "mpaa_rating": "R",
				            "runtime": 119,
				            "critics_consensus": "Energetic, self-deprecating performances and enough guffaw-inducing humor make up for the flaws in This Is the End loosely written script.",
				            "release_dates": {
				                "theater": "2013-06-12"
				            },
				            "ratings": {
				                "critics_rating": "Certified Fresh",
				                "critics_score": 84,
				                "audience_rating": "Upright",
				                "audience_score": 82
				            },
				            "synopsis": "The comedy This Is The End follows six friends trapped in a house after a series of strange and catastrophic events devastate Los Angeles. As the world unravels outside, dwindling supplies and cabin fever threaten to tear apart the friendships inside. Eventually, they are forced to leave the house, facing their fate and the true meaning of friendship and redemption. (c) Sony",
				            "posters": {
				                "thumbnail": "http://content9.flixster.com/movie/11/16/82/11168267_mob.jpg",
				                "profile": "http://content9.flixster.com/movie/11/16/82/11168267_pro.jpg",
				                "detailed": "http://content9.flixster.com/movie/11/16/82/11168267_det.jpg",
				                "original": "http://content9.flixster.com/movie/11/16/82/11168267_ori.jpg"
				            },
				            "abridged_cast": [
				                {
				                    "name": "James Franco",
				                    "id": "162653202",
				                    "characters": [
				                        "James Franco"
				                    ]
				                },
				                {
				                    "name": "Jonah Hill",
				                    "id": "326297850",
				                    "characters": [
				                        "Jonah Hill"
				                    ]
				                },
				                {
				                    "name": "Seth Rogen",
				                    "id": "162653310",
				                    "characters": [
				                        "Seth Rogen"
				                    ]
				                },
				                {
				                    "name": "Jay Baruchel",
				                    "id": "259260120",
				                    "characters": [
				                        "Jay Baruchel"
				                    ]
				                },
				                {
				                    "name": "Danny McBride",
				                    "id": "770672019",
				                    "characters": [
				                        "Danny McBride"
				                    ]
				                }
				            ],
				            "alternate_ids": {
				                "imdb": "1245492"
				            },
				            "links": {
				                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771303549.json",
				                "alternate": "http://www.rottentomatoes.com/m/this_is_the_end/",
				                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771303549/cast.json",
				                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771303549/clips.json",
				                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771303549/reviews.json",
				                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771303549/similar.json"
				            }
				        },
				        {
				            "id": "771245005",
				            "title": "Now You See Me",
				            "year": 2013,
				            "mpaa_rating": "PG-13",
				            "runtime": 116,
				            "critics_consensus": "Now You See Me's thinly sketched characters and scattered plot rely on sleight of hand from the director to distract audiences.",
				            "release_dates": {
				                "theater": "2013-05-31"
				            },
				            "ratings": {
				                "critics_rating": "Rotten",
				                "critics_score": 48,
				                "audience_rating": "Upright",
				                "audience_score": 74
				            },
				            "synopsis": "NOW YOU SEE ME pits an elite FBI squad in a game of cat and mouse against \"The Four Horsemen\", a super-team of the world's greatest illusionists. \"The Four Horsemen\" pull off a series of daring heists against corrupt business leaders during their performances, showering the stolen profits on their audiences while staying one step ahead of the law. (c) Summit/Lionsgate",
				            "posters": {
				                "thumbnail": "http://content6.flixster.com/movie/11/17/04/11170496_mob.jpg",
				                "profile": "http://content6.flixster.com/movie/11/17/04/11170496_pro.jpg",
				                "detailed": "http://content6.flixster.com/movie/11/17/04/11170496_det.jpg",
				                "original": "http://content6.flixster.com/movie/11/17/04/11170496_ori.jpg"
				            },
				            "abridged_cast": [
				                {
				                    "name": "Jesse Eisenberg",
				                    "id": "162654393",
				                    "characters": [
				                        "J. Daniel Atlas"
				                    ]
				                },
				                {
				                    "name": "Mark Ruffalo",
				                    "id": "162653904",
				                    "characters": [
				                        "Dylan Rhodes"
				                    ]
				                },
				                {
				                    "name": "Woody Harrelson",
				                    "id": "162654250",
				                    "characters": [
				                        "Merritt McKinney"
				                    ]
				                },
				                {
				                    "name": "Isla Fisher",
				                    "id": "162652839",
				                    "characters": [
				                        "Henley Reeves"
				                    ]
				                },
				                {
				                    "name": "Dave Franco",
				                    "id": "770703179",
				                    "characters": [
				                        "Jack Wilder"
				                    ]
				                }
				            ],
				            "alternate_ids": {
				                "imdb": "1670345"
				            },
				            "links": {
				                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771245005.json",
				                "alternate": "http://www.rottentomatoes.com/m/now_you_see_me/",
				                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771245005/cast.json",
				                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771245005/clips.json",
				                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771245005/reviews.json",
				                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771245005/similar.json"
				            }
				        },
				        {
				            "id": "771324610",
				            "title": "Kevin Hart: Let Me Explain",
				            "year": 2013,
				            "mpaa_rating": "R",
				            "runtime": 75,
				            "release_dates": {
				                "theater": "2013-07-03"
				            },
				            "ratings": {
				                "critics_rating": "Fresh",
				                "critics_score": 70,
				                "audience_rating": "Upright",
				                "audience_score": 95
				            },
				            "synopsis": "From Summit Entertainment, KEVIN HART: LET ME EXPLAIN captures the laughter, energy and mayhem from Hart's 2012 \"Let Me Explain\" concert tour, which spanned 10 countries and 80 cities, and generated over $32 million in ticket sales.",
				            "posters": {
				                "thumbnail": "http://content6.flixster.com/movie/11/17/04/11170424_mob.jpg",
				                "profile": "http://content6.flixster.com/movie/11/17/04/11170424_pro.jpg",
				                "detailed": "http://content6.flixster.com/movie/11/17/04/11170424_det.jpg",
				                "original": "http://content6.flixster.com/movie/11/17/04/11170424_ori.jpg"
				            },
				            "abridged_cast": [
				                {
				                    "name": "Kevin Hart",
				                    "id": "770671077"
				                }
				            ],
				            "alternate_ids": {
				                "imdb": "2609912"
				            },
				            "links": {
				                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771324610.json",
				                "alternate": "http://www.rottentomatoes.com/m/kevin_hart_let_me_explain/",
				                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771324610/cast.json",
				                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771324610/clips.json",
				                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771324610/reviews.json",
				                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771324610/similar.json"
				            }
				        },
				        {
				            "id": "771190753",
				            "title": "Star Trek Into Darkness",
				            "year": 2013,
				            "mpaa_rating": "PG-13",
				            "runtime": 129,
				            "critics_consensus": "Visually spectacular and suitably action packed, Star Trek Into Darkness is a rock-solid installment in the venerable sci-fi franchise, even if it's not as fresh as its predecessor.",
				            "release_dates": {
				                "theater": "2013-05-16"
				            },
				            "ratings": {
				                "critics_rating": "Certified Fresh",
				                "critics_score": 87,
				                "audience_rating": "Upright",
				                "audience_score": 92
				            },
				            "synopsis": "In Summer 2013, pioneering director J.J. Abrams will deliver an explosive action thriller that takes 'Star Trek Into Darkness.' When the crew of the Enterprise is called back home, they find an unstoppable force of terror from within their own organization has detonated the fleet and everything it stands for, leaving our world in a state of crisis. With a personal score to settle, Captain Kirk leads a manhunt to a war-zone world to capture a one man weapon of mass destruction. As our heroes are propelled into an epic chess game of life and death, love will be challenged, friendships will be torn apart, and sacrifices must be made for the only family Kirk has left: his crew. (c) Paramount",
				            "posters": {
				                "thumbnail": "http://content7.flixster.com/movie/11/17/12/11171241_mob.jpg",
				                "profile": "http://content7.flixster.com/movie/11/17/12/11171241_pro.jpg",
				                "detailed": "http://content7.flixster.com/movie/11/17/12/11171241_det.jpg",
				                "original": "http://content7.flixster.com/movie/11/17/12/11171241_ori.jpg"
				            },
				            "abridged_cast": [
				                {
				                    "name": "Chris Pine",
				                    "id": "326393041",
				                    "characters": [
				                        "Kirk"
				                    ]
				                },
				                {
				                    "name": "Zachary Quinto",
				                    "id": "770678894",
				                    "characters": [
				                        "Spock"
				                    ]
				                },
				                {
				                    "name": "Zoe Saldana",
				                    "id": "162660050",
				                    "characters": [
				                        "Uhura"
				                    ]
				                },
				                {
				                    "name": "Karl Urban",
				                    "id": "162654704",
				                    "characters": [
				                        "Bones"
				                    ]
				                },
				                {
				                    "name": "Simon Pegg",
				                    "id": "162684057",
				                    "characters": [
				                        "Scotty"
				                    ]
				                }
				            ],
				            "alternate_ids": {
				                "imdb": "1408101"
				            },
				            "links": {
				                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771190753.json",
				                "alternate": "http://www.rottentomatoes.com/m/star_trek_into_darkness/",
				                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771190753/cast.json",
				                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771190753/clips.json",
				                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771190753/reviews.json",
				                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771190753/similar.json"
				            }
				        },
				        {
				            "id": "771246668",
				            "title": "Fast & Furious 6",
				            "year": 2013,
				            "mpaa_rating": "PG-13",
				            "runtime": 130,
				            "critics_consensus": "With high-octane humor and terrific action scenes, Fast & Furious 6 builds upon the winning blockbuster formula that made Fast 5 a critical and commercial success.",
				            "release_dates": {
				                "theater": "2013-05-24"
				            },
				            "ratings": {
				                "critics_rating": "Certified Fresh",
				                "critics_score": 70,
				                "audience_rating": "Upright",
				                "audience_score": 86
				            },
				            "synopsis": "Vin Diesel, Paul Walker and Dwayne Johnson lead the returning cast of all-stars as the global blockbuster franchise built on speed races to its next continent in Fast & Furious 6. Reuniting for their most high-stakes adventure yet, fan favorites Jordana Brewster, Michelle Rodriguez, Tyrese Gibson, Sung Kang, Gal Gadot, Chris \"Ludacris\" Bridges and Elsa Pataky are joined by badass series newcomers Luke Evans and Gina Carano. Since Dom (Diesel) and Brian's (Walker) Rio heist toppled a kingpin's empire and left their crew with $100 million, our heroes have scattered across the globe. But their inability to return home and living forever on the lam have left their lives incomplete. Meanwhile, Hobbs (Johnson) has been tracking an organization of lethally skilled mercenary drivers across 12 countries, whose mastermind (Evans) is aided by a ruthless second-in-command revealed to be the love Dom thought was dead, Letty (Rodriguez). The only way to stop the criminal outfit is to outmatch them at street level, so Hobbs asks Dom to assemble his elite team in London. Payment? Full pardons for all of them so they can return home and make their families whole again. Building on the worldwide blockbuster success of Fast Five and taking the action, stunts and narrative to even greater heights, Fast & Furious 6 sees director Justin Lin back behind the camera for the fourth time. He is supported by longtime producers Neal H. Moritz and Vin Diesel, who welcome producer Clayton Townsend back to the series. (c) Fox",
				            "posters": {
				                "thumbnail": "http://content8.flixster.com/movie/11/16/92/11169222_mob.jpg",
				                "profile": "http://content8.flixster.com/movie/11/16/92/11169222_pro.jpg",
				                "detailed": "http://content8.flixster.com/movie/11/16/92/11169222_det.jpg",
				                "original": "http://content8.flixster.com/movie/11/16/92/11169222_ori.jpg"
				            },
				            "abridged_cast": [
				                {
				                    "name": "Vin Diesel",
				                    "id": "162652472",
				                    "characters": [
				                        "Dominic Toretto"
				                    ]
				                },
				                {
				                    "name": "Paul Walker",
				                    "id": "162654234",
				                    "characters": [
				                        "Brian O'Conner"
				                    ]
				                },
				                {
				                    "name": "Dwayne \"The Rock\" Johnson",
				                    "id": "770893686",
				                    "characters": [
				                        "Hobbs"
				                    ]
				                },
				                {
				                    "name": "Jordana Brewster",
				                    "id": "162662313",
				                    "characters": [
				                        "Mia"
				                    ]
				                },
				                {
				                    "name": "Michelle Rodriguez",
				                    "id": "162668831",
				                    "characters": [
				                        "Letty"
				                    ]
				                }
				            ],
				            "alternate_ids": {
				                "imdb": "1905041"
				            },
				            "links": {
				                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771246668.json",
				                "alternate": "http://www.rottentomatoes.com/m/fast_and_furious_6/",
				                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771246668/cast.json",
				                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771246668/clips.json",
				                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771246668/reviews.json",
				                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771246668/similar.json"
				            }
				        },
				        {
				            "id": "771249677",
				            "title": "Epic",
				            "year": 2013,
				            "mpaa_rating": "PG",
				            "runtime": 104,
				            "critics_consensus": "Though its narrative themes are all too familiar, Epic is beautifully animated and crafted with just enough flair to make for solid family entertainment.",
				            "release_dates": {
				                "theater": "2013-05-24"
				            },
				            "ratings": {
				                "critics_rating": "Fresh",
				                "critics_score": 63,
				                "audience_rating": "Upright",
				                "audience_score": 67
				            },
				            "synopsis": "EPIC is a 3D CG adventure comedy that reveals a fantastical world unlike any other. From the creators of ICE AGE and RIO, EPIC tells the story of an ongoing battle between the forces of good, who keep the natural world alive, and the forces of evil, who wish to destroy it. When a teenage girl finds herself magically transported into this secret universe, she teams up with an elite band of warriors and a crew of comical, larger-than-life figures, to save their world...and ours. -- (C) Fox",
				            "posters": {
				                "thumbnail": "http://content7.flixster.com/movie/11/17/15/11171541_mob.jpg",
				                "profile": "http://content7.flixster.com/movie/11/17/15/11171541_pro.jpg",
				                "detailed": "http://content7.flixster.com/movie/11/17/15/11171541_det.jpg",
				                "original": "http://content7.flixster.com/movie/11/17/15/11171541_ori.jpg"
				            },
				            "abridged_cast": [
				                {
				                    "name": "Beyonce Knowles",
				                    "id": "326395404",
				                    "characters": [
				                        "Queen Tara"
				                    ]
				                },
				                {
				                    "name": "Colin Farrell",
				                    "id": "162665297",
				                    "characters": [
				                        "Ronin"
				                    ]
				                },
				                {
				                    "name": "Josh Hutcherson",
				                    "id": "162654356",
				                    "characters": [
				                        "Nod"
				                    ]
				                },
				                {
				                    "name": "Amanda Seyfried",
				                    "id": "364614826",
				                    "characters": [
				                        "M.K.",
				                        "Mary Katherine"
				                    ]
				                },
				                {
				                    "name": "Christoph Waltz",
				                    "id": "770738334",
				                    "characters": [
				                        "Mandrake"
				                    ]
				                }
				            ],
				            "links": {
				                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771249677.json",
				                "alternate": "http://www.rottentomatoes.com/m/epic_2013/",
				                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771249677/cast.json",
				                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771249677/clips.json",
				                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771249677/reviews.json",
				                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771249677/similar.json"
				            }
				        },
				        {
				            "id": "771308218",
				            "title": "The Internship",
				            "year": 2013,
				            "mpaa_rating": "PG-13",
				            "runtime": 119,
				            "critics_consensus": "The Internship weighs down Vince Vaughn and Owen Wilson's comic charisma with a formulaic script and padded running time that leans heavily on its stars' easygoing interplay.",
				            "release_dates": {
				                "theater": "2013-06-07"
				            },
				            "ratings": {
				                "critics_rating": "Rotten",
				                "critics_score": 36,
				                "audience_rating": "Upright",
				                "audience_score": 66
				            },
				            "synopsis": "Billy (Vince Vaughn) and Nick (Owen Wilson) are salesmen whose careers have been torpedoed by the digital world. Trying to prove they are not obsolete, they defy the odds by talking their way into a coveted internship at Google, along with a battalion of brilliant college students. But, gaining entrance to this utopia is only half the battle. Now they must compete with a group of the nation's most elite, tech-savvy geniuses to prove that necessity really is the mother of re-invention. (c) Fox",
				            "posters": {
				                "thumbnail": "http://content9.flixster.com/movie/11/17/17/11171759_mob.jpg",
				                "profile": "http://content9.flixster.com/movie/11/17/17/11171759_pro.jpg",
				                "detailed": "http://content9.flixster.com/movie/11/17/17/11171759_det.jpg",
				                "original": "http://content9.flixster.com/movie/11/17/17/11171759_ori.jpg"
				            },
				            "abridged_cast": [
				                {
				                    "name": "Vince Vaughn",
				                    "id": "162652630",
				                    "characters": [
				                        "Billy McMahon"
				                    ]
				                },
				                {
				                    "name": "Owen Wilson",
				                    "id": "162652836",
				                    "characters": [
				                        "Nick Campbell"
				                    ]
				                },
				                {
				                    "name": "Josh Gad",
				                    "id": "770683794",
				                    "characters": [
				                        "Headphones"
				                    ]
				                },
				                {
				                    "name": "Dylan O'Brien",
				                    "id": "771375271",
				                    "characters": [
				                        "Stuart"
				                    ]
				                },
				                {
				                    "name": "Max Minghella",
				                    "id": "162652282",
				                    "characters": [
				                        "Graham"
				                    ]
				                }
				            ],
				            "alternate_ids": {
				                "imdb": "2234155"
				            },
				            "links": {
				                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771308218.json",
				                "alternate": "http://www.rottentomatoes.com/m/the_internship_2013/",
				                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771308218/cast.json",
				                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771308218/clips.json",
				                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771308218/reviews.json",
				                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771308218/similar.json"
				            }
				        },
				        {
				            "id": "771268395",
				            "title": "The Hangover Part III",
				            "year": 2013,
				            "mpaa_rating": "R",
				            "runtime": 100,
				            "critics_consensus": "Less a comedy than an angrily dark action thriller, The Hangover Part III diverges from the series' rote formula but offers nothing compelling in its place.",
				            "release_dates": {
				                "theater": "2013-05-23"
				            },
				            "ratings": {
				                "critics_rating": "Rotten",
				                "critics_score": 20,
				                "audience_rating": "Spilled",
				                "audience_score": 46
				            },
				            "synopsis": "\"The Hangover Part III\" is the third and final film in director Todd Phillips' record-shattering comedy franchise. This time, there's no wedding. No bachelor party. What could go wrong, right? But when the Wolfpack hits the road, all bets are off. (c) WB",
				            "posters": {
				                "thumbnail": "http://content8.flixster.com/movie/11/17/08/11170890_mob.jpg",
				                "profile": "http://content8.flixster.com/movie/11/17/08/11170890_pro.jpg",
				                "detailed": "http://content8.flixster.com/movie/11/17/08/11170890_det.jpg",
				                "original": "http://content8.flixster.com/movie/11/17/08/11170890_ori.jpg"
				            },
				            "abridged_cast": [
				                {
				                    "name": "Bradley Cooper",
				                    "id": "351525448",
				                    "characters": [
				                        "Phil"
				                    ]
				                },
				                {
				                    "name": "Ed Helms",
				                    "id": "770691762",
				                    "characters": [
				                        "Stu"
				                    ]
				                },
				                {
				                    "name": "Zach Galifianakis",
				                    "id": "162655230",
				                    "characters": [
				                        "Alan"
				                    ]
				                },
				                {
				                    "name": "Justin Bartha",
				                    "id": "162659095",
				                    "characters": [
				                        "Doug"
				                    ]
				                },
				                {
				                    "name": "Ken Jeong",
				                    "id": "770692484",
				                    "characters": [
				                        "Mr. Chow"
				                    ]
				                }
				            ],
				            "alternate_ids": {
				                "imdb": "1951261"
				            },
				            "links": {
				                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268395.json",
				                "alternate": "http://www.rottentomatoes.com/m/the_hangover_part_iii/",
				                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268395/cast.json",
				                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268395/clips.json",
				                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268395/reviews.json",
				                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268395/similar.json"
				            }
				        },
				        {
				            "id": "771268396",
				            "title": "After Earth",
				            "year": 2013,
				            "mpaa_rating": "PG-13",
				            "runtime": 100,
				            "critics_consensus": "After Earth is dull, ploddingly paced exercise in sentimental sci-fi -- and the latest setback for director M. Night Shyamalan's once-promising career.",
				            "release_dates": {
				                "theater": "2013-05-31"
				            },
				            "ratings": {
				                "critics_rating": "Rotten",
				                "critics_score": 11,
				                "audience_rating": "Spilled",
				                "audience_score": 43
				            },
				            "synopsis": "A crash landing leaves teenager Kitai Raige (Jaden Smith) and his legendary father Cypher (Will Smith) stranded on Earth, 1,000 years after cataclysmic events forced humanity's escape. With Cypher critically injured, Kitai must embark on a perilous journey to signal for help, facing uncharted terrain, evolved animal species that now rule the planet, and an unstoppable alien creature that escaped during the crash. Father and son must learn to work together and trust one another if they want any chance of returning home. (c) Sony",
				            "posters": {
				                "thumbnail": "http://content6.flixster.com/movie/11/17/10/11171008_mob.jpg",
				                "profile": "http://content6.flixster.com/movie/11/17/10/11171008_pro.jpg",
				                "detailed": "http://content6.flixster.com/movie/11/17/10/11171008_det.jpg",
				                "original": "http://content6.flixster.com/movie/11/17/10/11171008_ori.jpg"
				            },
				            "abridged_cast": [
				                {
				                    "name": "Will Smith",
				                    "id": "162659361"
				                },
				                {
				                    "name": "Jaden Smith",
				                    "id": "364618979"
				                },
				                {
				                    "name": "Zoe Kravitz",
				                    "id": "770695268"
				                },
				                {
				                    "name": "Sophie Okonedo",
				                    "id": "162683687"
				                }
				            ],
				            "alternate_ids": {
				                "imdb": "1815862"
				            },
				            "links": {
				                "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268396.json",
				                "alternate": "http://www.rottentomatoes.com/m/after_earth/",
				                "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268396/cast.json",
				                "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268396/clips.json",
				                "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268396/reviews.json",
				                "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771268396/similar.json"
				            }
				        }
				    ],
				    "links": {
				        "self": "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?page_limit=16&country=us&page=1",
				        "next": "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?page_limit=16&country=us&page=2",
				        "alternate": "http://www.rottentomatoes.com/movie/in_theaters.php"
				    },
				    "link_template": "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?page_limit={results_per_page}&page={page_number}&country={country-code}"
				} 
    		};
		}]);
}());