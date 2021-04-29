
function clicking(options, param){
    for (const filter of options){
        let option=$(filter)
        option.click(function(){
            for (const otherOptions of options){
                let otherOption = $(otherOptions)
                if (otherOption.hasClass('gradientClicked')){
                otherOption.removeClass('gradientClicked')
                }
            }
            option.addClass('gradientClicked')
            if(param === 'time'){
                time = option.text()
                time = time.split(' ')
                time = time[0]
                console.log(time)
                return time
            } else if(param === 'areas'){
                areas = option.text()
                areas = areas.toLowerCase()
                console.log(areas)
                return areas
            } else if(param === 'pace'){
                pace = option.text()
                pace = pace.toLowerCase()
                console.log(pace)
                return pace
            }
            
        })
    }
    
}

timeOptions.click(clicking(timeOptions,'time'))
areaOptions.click(clicking(areaOptions,'areas'))
paceOptions.click(clicking(paceOptions,'pace'))


// ====================================================
// ====================================================
// ====================================================
function disableAll(){
    for (const filter of $('.option')){
        let option=$(filter)
        if(option.hasClass('gradientClicked')){
            option.removeClass('gradientClicked')
        }
    }
}

// ====================================================
// ====================================================
// ====================================================


if(findVideo !== null){
    findVideo.addEventListener('click',()=>{
        for(const video of VIDEOS){
            if(video.time === time && video.zone === areas && video.pace === pace){
                workout.push(video.url)
                info = `${time} min ${areas} workout with ${pace} pace`
                $('#info').text(info)
            }
        }
        if(workout.length !==0){
            console.log(workout)
            link = workout[Math.floor((Math.random()*workout.length))]
            console.log(link)
            journal.date = today
            journal.area = areas
            journal.time = time
            journal.pace = pace
            journal.link = link
            history.push(journal)
            console.log(history)
            history = JSON.stringify(history)
            localStorage.setItem('history', history)
            console.log(history)
            workout=[]

        } else {
            findVideo.off('click')
        }
        
        disableAll()


        $('iframe').attr('src', link)
        $('#outer').removeClass('hidden')
        $('#outer').addClass('showed')
        $('.showed').css('width', width)
        $('#filters').removeClass('filterShow')
        $('#filters').addClass('hidden')
        if (window.matchMedia('(max-width:700px)').matches){
            $('#filters').css('display','none')
            $('#main').css('flex-direction', 'column')
            $('.showed').css('width', '700px')
            $('#outer').css('margin-top', '20px')
            $('#outer').css('padding-top', '0px')


        }

    })
}
    // ====================================================
    // ====================================================
    // ====================================================
        

$('#outer').on ('click', (function(e) {
    if (!($('iframe').hasClass('hidden'))){
            let playerClicked = $(e.target).is($('#outer'));  // clicked element
            let playerClicked3 = $(e.target).is($('img'));  // clicked element
            let playerClicked4 = $(e.target).is($('#save'));  // clicked element
            if (!playerClicked && !playerClicked3 && !playerClicked4) {

                $('#info').css('font-size', '24px')
                $('#back-to-option').css('display', 'none')
                $('#filters').removeClass('hidden')
                $('#filters').css('display', 'flex')
                $('#filters').css('flex-direction', 'column')
                $('iframe').attr('width', '700px')
                $('iframe').attr('height', '500px')
                $('#outer').css('margin-left','10px')
                $('#outer').css('margin-top','10px')
                $('#outer').css('height','587px')
                $('#outer').css('width','700px')
                $('#main').css('flex-direction', 'row')
                $('#main').css('align-items', 'flex-start')
                $('#filters').addClass('filterShow')
                $('#filters').css('margin-top', '100px')
                if (window.matchMedia('(max-width:700px)').matches){
                    $('#filters').css('display', 'flex')
                    $('#filters').css('flex-direction', 'column')
                    $('#main').css('flex-direction', 'column')
                    $('#main').css('align-items', 'center')
                    $('#filters').css('justify-content', 'center')        
                    $('#filters').css('margin-top', '20px')        
                    $('#filters').css('padding-top', '0px')        
                }

            }
    } 
})
)

// ====================================================
// ====================================================
// ====================================================


$('#favorites').click(function(){
    $('img').attr('src', 'https://lh3.googleusercontent.com/proxy/f87ul-n_EMcw7ZQfa-5o2tRnZ5jxZJOoWlH0RtRLhR9gtBdMNDl8Vmx7h0xn_0fvbk-ENATHKa5YPT8E19ilKkwtkaixhw0')
    $('#favorites').css('color', 'red')
    $('#save').text('Saved')
    saved.info = $('#info').text()
    saved.url = $('iframe').attr('src')
    favorite.push(saved)
    favorite = JSON.stringify(favorite)
    localStorage.setItem('favorite', favorite)
})


