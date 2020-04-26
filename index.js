fetch('https://shrouded-tor-09389.herokuapp.com/all').then((res)=>{
    return res.json()
}).then((json)=>{
    let stringHTML =""
    json.forEach((heroe)=>{
        
        stringHTML=`${stringHTML}
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
        <img src="${heroe['images/sm']}" loading="lazy"/>
        <div class="card-body">
            <p class="card-text">${heroe.name}</p>
            <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small class="text-muted">9 mins</small>
            </div>
        </div>
        </div>
        </div>`
    
    })
    document.querySelector('.row').innerHTML=stringHTML
    
})

