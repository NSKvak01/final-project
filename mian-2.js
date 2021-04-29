
for (const story of history){
    d = story.date
    t=story.time
    a=story.area
    p = story.pace
    l = story.link
    let jour = $('<div class="j"></div>')
    let da = $(`<div id="da">${d}</div>`)
    let ti = $(`<div id="ti">${t}</div>`)
    let ar = $(`<div id="ar">${a}</div>`)
    let pa = $(`<div id="pa">${p}</div>`)
    let li = $(`<div id="li">${l}</div>`)
    jour.append(da)
    jour.append(ti)
    jour.append(ar)
    jour.append(pa)
    jour.append(li)
    j.append(jour)
}

for (let save of favorite){
    i = save.info
    u = save.url
    let v = $(`<iframe class="my" width="500" height="250" src=${u} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    let div = $("<div class='player'></div>")
    div.append(v)
    let information = $(`<div>${i}</div>`)
    let biggerDiv = $("<div class='biggerDiv'></div>")
    biggerDiv.append(div)
    biggerDiv.append(information)
    $('#saved').append(biggerDiv)
}