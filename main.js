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
                time=time[0]
            } else if(param === areas){
                areas=option.innerText
                areas=areas.toLowerCase()
            } else if(param === pace){
                pace=option.innerText
                pace=pace.toLowerCase()
            }
            
            console.log(param)
            return param
        })
    }
}

click(timeOptions,time)
click(areaOptions,areas)
click(paceOptions,pace)

findVideo.addEventListener('click', ()=>{
    for(const video of VIDEOS){
        if(video.time === time.toString() && video.zone === areas.toLowerCase() && video.pace === pace.toLowerCase()){
            workout.push(video.url)
        }
    }
    const link = workout[Math.floor((Math.random()*workout.length))]
    console.log(link)
    youtube.src=link
    videos.classList.remove('hidden')
})



