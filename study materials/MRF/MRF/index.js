const apiUrl = "https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json"

const fetchData = async(api,cb) =>{
    try {
        let response = await fetch(api)
        let res = await response.json()
        cb(res)
    } catch (error) {
        console.log(error)
    }
}

const Displaydata = (data) =>{
    console.log(data)

    const mapped = data.map((val, ind, arr)=>{
        let obj = {...val}
        delete obj.description
        return obj
    })
    console.log(mapped)

    const filtered = mapped.filter((val, ind, arr)=>{
        return val.year === 2020
    })
    console.log(filtered)

    const reducedVotes = filtered.reduce((acc, val, ind, arr)=>{
        console.log("acc",acc)
        console.log("val", val)
        // console.log(acc, val)
        return acc + val.votes
    },0)
    console.log(reducedVotes)

    const reducedGenre = filtered.reduce((acc, val, ind,arr)=>{
        val.genreIds.forEach(element => {
            if(acc[element]){
                acc[element].push(val)
            }else{
                acc[element] = [val]
            }
        });
        return acc
    },{})
    console.log(reducedGenre)
}

fetchData(apiUrl,Displaydata)

