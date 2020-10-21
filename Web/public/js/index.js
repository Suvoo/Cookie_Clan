var subjects = [
    {
        subject: 'Computer',
        link: 'https://meet.google.com/computer',
        teacher: 'Er. S Babu',
        image: 'images/13.jpg'
    },
    {
        subject: 'English',
        link: 'https://meet.google.com/english',
        teacher: 'Dr. S Sameehah',
        image: 'images/17.jpg'
    },
    {
        subject: 'Science',
        link: 'https://meet.google.com/science',
        teacher: 'Er. Gobi M',
        image: 'images/11.jpg'
    },
    {
        subject: 'Hindi',
        link: 'https://meet.google.com/hindi',
        teacher: 'Mr. M Sureshkumar',
        image: 'images/14.jpg'
    },
    {
        subject: 'Mathematics',
        link: 'https://meet.google.com/maths',
        teacher: 'Mrs. Annie U',
        image: 'images/15.jpg'
    },        
    {
        subject: 'Social Studies',
        link: 'https://meet.google.com/s-science',
        teacher: 'Dr. S Sameehah',
        image: 'images/12.jpg'
    }  
];
var slots =[
    {
        slot: '08:00 - 08:55',
        image: 'images/13.jpg'
    },
    {
        slot: '09:00 - 09:55',
        image: 'images/14.jpg'
    },
    {
        slot: '10:00 - 10:55',
        image: 'images/16.jpg'
    },
    {
        slot: '11:00 - 11:55',
        image: 'images/11.jpg'
    },
    {
        slot: '01:00 - 01:55',
        image: 'images/13.jpg'
    },
    {
        slot: '02:00 - 02:55',
        image: 'images/15.jpg',

    }
]
// alert($(".currentDay").html())
function randomize(day,arr=[]){
    if(day=="Mon")
        arr.push(6,5,4,3,2,1)
    else if(day=="Tue")
        arr.push(3,4,1,6,5,2)
    else if(day=="Wed")
        arr.push(2,3,5,4,1,6)
    else if(day=="Thu")
        arr.push(4,1,6,3,2,5)
    else if(day=="Fri")
        arr.push(5,4,1,6,2,3)   
    else
        arr.push(6,5,4,3,2,1)    
}


var weekday=new Array(5);
weekday[0]="Sun";
weekday[1]="Mon";
weekday[2]="Tue";
weekday[3]="Wed";
weekday[4]="Thu";
weekday[5]="Fri";
weekday[6]="Sat";

var d = new Date();

var n = weekday[d.getDay()];

// alert(d.getDay()-1)
// alert("span#"+n)
let Day=[]
$("#"+n).addClass("today")

$("#"+n).addClass("currentDay")
   
randomize(n,Day);

if(n=="Sat"||n=="Sun"){
    // n = "Mon";
    // $("#Mon").addClass("nextDay");
    $(".cb").click(function(){
        setTimeout(function(){
                $('#myModal3').modal('show');
        }, 1000);
    })
    
    $("#wknd").addClass("currentDay");
    $("#wknd").addClass("today");
    $(".time-table").hide()
    $("#games").show()
}


if(n!="Sat"&&n!="Sun"){
    $("#games").hide()
    let len = subjects.length;
    len-=1;
    for (var i=len; i>=0; i--){
            
            $("section#index").append(
                    `<div class="col-xl-12 time-table" >
                            <div class="card">
                            <img class="card-img" src="${subjects[Day[i]-1].image}" alt="subject">
                            <div class="card-img-overlay text-white ">
                                <h4 class="card-title">${subjects[Day[i]-1].subject}</h4>
                                <a href="${subjects[Day[i]-1].link}" target="_blank" class="card-link">${subjects[Day[i]-1].link}</a>
                                <h6 class="card-subtitle mb-2">${subjects[Day[i]-1].teacher}</h6>
                                <p class="card-text">SLOT: ${slots[len-i].slot}</p>
                            </div>
                            </div>
                        </div>`
                )
        }
        

}
    
    $("#days span").click(function(){
        $("#games").hide()
        let len = subjects.length-1;
        $("#days span").removeClass("currentDay")
        $(this).toggleClass("currentDay")
        if($(this).attr("id")!="wknd"){
            $(".time-table").show()
            let day = $(this).html(),Day=[];
            randomize(day,Day);       
            $("section#index").empty();
            for (var i=len; i>=0; i--){
                $("section#index").append(
                    `<div class="col-xl-12 ">
                            <div class="card">
                            <img class="card-img" src="${subjects[Day[i]-1].image}" alt="subject">
                            <div class="card-img-overlay text-white ">
                                <h4 class="card-title">${subjects[Day[i]-1].subject}</h4>
                                <a href="https://meet.google.com/sqb-rzrs-jee" target="_blank" class="card-link">https://meet.google.com/sqb-rzrs-jee</a>
                                <h6 class="card-subtitle mb-2">${subjects[Day[i]-1].teacher}</h6>
                                <p class="card-text">SLOT: ${slots[len-i].slot}</p>
                            </div>
                            </div>
                        </div>`
                )
            }
        }
        else if($(this).attr("id")=="wknd"){
                $("section#index").empty();
                $("#wknd").addClass("currentDay");
                $(".time-table").hide()
                $("#games").show()
            
        }
        
})


$(".welcomeUser").attr("disabled","true");
$("#human").attr("disabled","true");

$("#studentClass").focusout(function() {
    var stdClass = $("#studentClass").val();
    // alert(parseInt(stdClass))
    if(parseInt(stdClass)<=6){
        if($("#name").val()!= '' && $("#studentClass").val()!= ''){
            // alert("hi")
            $("#human").removeAttr("disabled");
            $("#human").click(function(){
                $(".welcomeUser").removeAttr("disabled");
                $.notify("Verified successfully!",{ position:"top left",className: "success",showAnimation: 'slideDown',autoHideDelay: 1500  });
            })

            $("#class #human").notify("Click here!",{ position:"top left",className: "info",showAnimation: 'slideDown',autoHideDelay: 1500  });
        }
    }
    else if(parseInt(stdClass)>6){
        // alert("You're too old for this!")
        $.notify("Coming soon for classes 7th and above.",{ position:"top left",className: "error"  });
    }
    else{
        $.notify("Please enter your details",{ position:"top left",className: "error"  });
    }    
  })



  $(".welcomeUser").click(function(){
    let name = $("#name").val();
    store();

    
    setTimeout(function(){
        $('#myModal2').modal('show');
   }, 1500);
    $(".welcome").empty();
     $(".welcome").append("<h4 class='text-center'>Hello! "+name+ "&#128522</h4><h4 class='text-center'>Welcome to</h4><br><img src='images/welcome.jpg' class='img-fluid' height='250'>");
})

$(window).on('load',function(){
    
    getValues();
})

function store() {
    let name = $("#name").val();

    window.localStorage.myitems = name;
}

function getValues() {
    var storedValues = window.localStorage.myitems;
    // alert(storedValues)
    if(!storedValues) {
            // alert("hi")
            $('#exampleModal').modal('show');
            $(".loader").delay(2000).fadeOut("slow");
            $("#overlayer").delay(2000).fadeOut("slow");
            setTimeout(function(){
                $('#myModal').modal('show');
           }, 0);
           $('#myModal').modal({
                backdrop: 'static',
                keyboard: false
            })
        
        
    }
    else {
        // alert(storedValues)
        $(".loader").delay(100).fadeOut("slow");
        $("#overlayer").delay(100).fadeOut("slow");
    }
}

