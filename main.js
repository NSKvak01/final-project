const timeOptions = document.querySelectorAll('.time')
const areaOptions = document.querySelectorAll('.area')
const paceOptions = document.querySelectorAll('.pace')

function click(options, param){
    for (const option of options){
        option.addEventListener('click', ()=>{
            for (const otherOption of options){
                if (otherOption.classList.contains('gradientClicked')){
                otherOption.classList.remove('gradientClicked')
                }
            }
            option.classList.add('gradientClicked')
            if(param === time){
                time = option.innerText
                time = time.split(' ')
                time = time[0]
                return time
            } else if(param === areas){
                areas = option.innerText
                areas = areas.toLowerCase()
                return areas
            } else if(param === pace){
                pace = option.innerText
                pace = pace.toLowerCase()
                return pace
            }
        })
    }
}

click(timeOptions,time)
click(areaOptions,areas)
click(paceOptions,pace)

findVideo.addEventListener('click', ()=>{
    for(const video of VIDEOS){
        if(video.time === time && video.zone === areas && video.pace === pace){
            workout.push(video.url)
        }
    }
    console.log(workout)
    link = workout[Math.floor((Math.random()*workout.length))]
    // const link = 'https://www.youtube.com/embed/NCzNpWHIvTE?autoplay=0&controls=1&enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"'
    console.log(link)
    window.open('index2.html')
})



