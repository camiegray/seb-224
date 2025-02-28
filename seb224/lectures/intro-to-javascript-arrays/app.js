console.log("Hello World")




const movies = ["LOTR", "Harry Potter", "The Expanse"]
    // let firstMovie = movies [0]
    movies.pop()
    movies.push ("great", "lets")


    
    // console.log(movies.length)
    // console.log(movies)



    // for (let i = 0; 1 < movies.length; i++)
    //     console.log(movies[2])
    movies.forEach( (movie, index) => {console.log(movie)} )

    let movieString = movies.join(" * ")
        console.log(movieString)
    