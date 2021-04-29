function play() {
    var t1 = just.animate({
        targets: ".ball",
        duration: 1300,
         props: {
          innerHTML: ['Pelota' , 'rebota'] 
        },
        web: {
           transform: [
              { offset: 0, value: "scale(2, 2)" },
              { offset: 0.3, value: "scale(1.25, .75)" },
              { offset: 0.4, value: "scale(.75, 1.25)" },
              { offset: 0.5, value: "scale(1.15, .85)" },
              { offset: 0.65, value: "scale(.95, 1.05)" },
              { offset: 0.75, value: "scale(1.05, .95)" },
              { offset: 1, value: "scale(1, 1)" }
           ]
        }
    });
     
    t1.play();
     
    just.tools.player(t1);
    }
    
    function opacity(){
        var t1 = just.animate({
            targets: '.ball',
            duration: 5000,
            props: {
                innerHTML: ['...', 'Hola'] 
              },
            web: {
                opacity: [0, 4]
            }
            
        });
        
        t1.play()
    } 

function tranform(){


var t1 = just.animate({
    targets: '.ball',
    duration: 1000,
    web: {
        x: [200, 0]
    }
});

t1.play()
}

function fundir(){

    var timeline = just.animate({
        targets: '.ball',
        duration: 1000,
        props: {
            '--hue': [0, 360]
        }
    });
    
    timeline.play()

}

function crecer(){

    var timeline = just.animate({
        targets: '.ball',
        duration: 1000,
        props: {
            '--hue': [0, 360]
        },
        web: {
           transform: [
              { offset: 0, value: "scale(2, 2)" },
              { offset: 0.3, value: "scale(1.25, .75)" },
              { offset: 0.4, value: "scale(.75, 1.25)" },
              { offset: 0.5, value: "scale(1.15, .85)" },
              { offset: 0.65, value: "scale(.95, 1.05)" },
              { offset: 0.75, value: "scale(1.05, .95)" },
              { offset: 1, value: "scale(1, 1)" }
           ]
    }});
    
    timeline.play()

}

function desaparecer(){


const timeline = just.animate({
    targets: '.ball',
    duration: 1000,
    web: {
        opacity: [1, { offset: .8, value: .5 }, 0]
    }
});

timeline.play()

}



function simple(){


    var t1 = just.animate({
        targets: '.ball',
        duration: 1000,
        web: {
            y: [200, 0]
        }
    });
    
    t1.play()
    }