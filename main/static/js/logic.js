

var counter = 0;
var state = 1;

// identifier for which label to updates
var change = 1;

function changeImage(){

    images = ["http://ec2-3-14-152-181.us-east-2.compute.amazonaws.com/images/irrigation.jpg ",
             "http://ec2-3-14-152-181.us-east-2.compute.amazonaws.com/images/irrigation_3.jpg ",
              "http://ec2-3-14-152-181.us-east-2.compute.amazonaws.com/images/irrigation_2.jpg ",
               "http://ec2-3-14-152-181.us-east-2.compute.amazonaws.com/images/irrigation_1.jpg "]

    percents = ["0%", "20%", "40%", "60%", "80%", "100%"]

    var image = document.getElementById("dynamicImage");
    var text = document.getElementById("text")
    var text2 = document.getElementById("text2")
    var text3 = document.getElementById("text3")

    if (change == 1){
        text.innerHTML = percents[counter];
    }
    else if(change == 2){
        text2.innerHTML = percents[counter];
    }

    else if(change == 3){

        text3.innerHTML = percents[counter];
    }

    // divisible by 5 to verify its five seconds
    if (counter % 5 == 0){
        // change the imge
        image.src = images[state];
        
        if (state == 3){
            state = 0;
        }
        state ++;
    }
    if (counter == 5){

        // set counter to 0
        counter = 0;
        if (change==3){
            change = 0;
        }
        change ++;
    }
    
    counter ++;
}

// main loader function when the simulate button is clicked
    function loader() {
        
        // run it in interval of 1 second
        myLoad = setInterval(changeImage, 1000);

        var click = document.getElementById("click");
        click.onclick = function () {
            clearInterval(myLoad);
            flag = false;
        }

    };




