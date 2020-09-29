
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAPP-QXYKcZZOicgSfyYLNQ4OmEv8cSCNI",
    authDomain: "file-upload-f2d17.firebaseapp.com",
    databaseURL: "https://file-upload-f2d17.firebaseio.com",
    projectId: "file-upload-f2d17",
    storageBucket: "file-upload-f2d17.appspot.com",
    messagingSenderId: "607519113011",
    appId: "1:607519113011:web:f4b8de30a90ddcdee38846"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



let files = [];
document.getElementById("files").addEventListener("change", function(e) {
  files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});

document.getElementById("send").addEventListener("click", function() {
  //checks if files are selected
  if (files.length != 0) {
    //Loops through all the selected files
    for (let i = 0; i < files.length; i++) {
      //create a storage reference
      
      var storageRef = firebase.storage().ref(`C:\\Users\\91850\\Downloads\\${files[i].name}`)
      var upload= storageRef.put(files[i]);

      //upload file
     

      //update progress bar
      upload.on(
        "state_changed",
        function progress(snapshot) {
        $("#pgrs1").show()

          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById("progress").value = percentage;
        },

        function error() {
        //   alert("error uploading file");
        $.notify("An error occured. Please try again.",{ position:"top left",className: "error"  });

        },

        function complete() {
        //   document.getElementById(
        //     "uploading"
        //   ).innerHTML += `${files[i].name} upoaded <br />`;
        $.notify(files[i].name + " uploaded successfully!",{ position:"top left",className: "success"});
        setTimeout(function(){
            $('#pgrs1').hide();
            $("#send").html("<i class='fa fa-check-circle'></i> Uploaded")
        }, 1500);
        }
      );
    }
  } else {
    // alert("No file chosen");
    $.notify("Please choose atleast one file!",{ position:"top left",className: "error"  });
  }
});


let files2=[]
document.getElementById("files2").addEventListener("change", function(e) {
  files2 = e.target.files;
  for (let i = 0; i < files2.length; i++) {
    console.log(files2[i]);
  }
});

document.getElementById("send2").addEventListener("click", function() {
  //checks if files are selected
  if (files2.length != 0) {
    //Loops through all the selected files
    for (let i = 0; i < files2.length; i++) {
      //create a storage reference
      
      var storageRef = firebase.storage().ref(`C:\\Users\\91850\\Downloads\\${files2[i].name}`)
      var upload= storageRef.put(files2[i]);

      //upload file
     

      //update progress bar
      upload.on(
        "state_changed",
        function progress(snapshot) {
        $("#pgrs2").show()

          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById("progress2").value = percentage;
        },

        function error() {
        //   alert("error uploading file");
        $.notify("An error occured. Please try again.",{ position:"top left",className: "error"  });

        },

        function complete() {
        //   document.getElementById(
        //     "uploading"
        //   ).innerHTML += `${files[i].name} upoaded <br />`;
        $.notify(files2[i].name + " uploaded successfully!",{ position:"top left",className: "success"});
        setTimeout(function(){
            $("#send2").html("<i class='fa fa-check-circle'></i> Uploaded")
            $('#pgrs2').hide();
        }, 1500);
        }
      );
    }
  } else {
    // alert("No file chosen");
    $.notify("Please choose atleast one file!",{ position:"top left",className: "error"  });
  }
});


let file3=[]
document.getElementById("files3").addEventListener("change", function(e) {
  files3 = e.target.files;
  for (let i = 0; i < files3.length; i++) {
    console.log(files3[i]);
  }
});

document.getElementById("send3").addEventListener("click", function() {
  //checks if files3 are selected
  if (files3.length != 0) {
    //Loops through all the selected files
    for (let i = 0; i < files3.length; i++) {
      //create a storage reference
      
      var storageRef = firebase.storage().ref(`C:\\Users\\91850\\Downloads\\${files3[i].name}`)
      var upload= storageRef.put(files3[i]);

      //upload file
     

      //update progress bar
      upload.on(
        "state_changed",
        function progress(snapshot) {
        $("#pgrs3").show()

          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById("progress3").value = percentage;
        },

        function error() {
        //   alert("error uploading file");
        $.notify("An error occured. Please try again.",{ position:"top left",className: "error"  });

        },

        function complete() {
        //   document.getElementById(
        //     "uploading"
        //   ).innerHTML += `${files[i].name} upoaded <br />`;
        $.notify(files3[i].name + " uploaded successfully!",{ position:"top left",className: "success"});
        setTimeout(function(){
            $('#pgrs3').hide();
            $('#send3').html("<i class='fa fa-check-circle'></i> Uploaded")
        }, 1500);
        }
      );
    }
  } else {
    // alert("No file chosen");
    $.notify("Please choose atleast one file!",{ position:"top left",className: "error"  });
  }
});


let files4 = [];
document.getElementById("files4").addEventListener("change", function(e) {
  files4 = e.target.files;
  for (let i = 0; i < files4.length; i++) {
    console.log(files4[i]);
  }
});

document.getElementById("send4").addEventListener("click", function() {
  //checks if files are selected
  if (files4.length != 0) {
    //Loops through all the selected files
    for (let i = 0; i < files4.length; i++) {
      //create a storage reference
      
      var storageRef = firebase.storage().ref(`C:\\Users\\91850\\Downloads\\${files4[i].name}`)
      var upload= storageRef.put(files4[i]);

      //upload file
     

      //update progress bar
      upload.on(
        "state_changed",
        function progress(snapshot) {
        $("#pgrs4").show()

          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById("progress4").value = percentage;
        },

        function error() {
        //   alert("error uploading file");
        $.notify("An error occured. Please try again.",{ position:"top left",className: "error"  });

        },

        function complete() {
        //   document.getElementById(
        //     "uploading"
        //   ).innerHTML += `${files[i].name} upoaded <br />`;
        $.notify(files4[i].name + " uploaded successfully!",{ position:"top left",className: "success"});
        setTimeout(function(){
            $('#pgrs4').hide();
            $("#send4").html("<i class='fa fa-check-circle'></i> Uploaded")
        }, 1500);
        }
      );
    }
  } else {
    // alert("No file chosen");
    $.notify("Please choose atleast one file!",{ position:"top left",className: "error"  });
  }
});


let files5=[]
document.getElementById("files5").addEventListener("change", function(e) {
  files5 = e.target.files;
  for (let i = 0; i < files5.length; i++) {
    console.log(files5[i]);
  }
});

document.getElementById("send5").addEventListener("click", function() {
  //checks if files are selected
  if (files5.length != 0) {
    //Loops through all the selected files
    for (let i = 0; i < files5.length; i++) {
      //create a storage reference
      
      var storageRef = firebase.storage().ref(`C:\\Users\\91850\\Downloads\\${files5[i].name}`)
      var upload= storageRef.put(files5[i]);

      //upload file
     

      //update progress bar
      upload.on(
        "state_changed",
        function progress(snapshot) {
        $("#pgrs5").show()

          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById("progress5").value = percentage;
        },

        function error() {
        //   alert("error uploading file");
        $.notify("An error occured. Please try again.",{ position:"top left",className: "error"  });

        },

        function complete() {
        //   document.getElementById(
        //     "uploading"
        //   ).innerHTML += `${files[i].name} upoaded <br />`;
        $.notify(files5[i].name + " uploaded successfully!",{ position:"top left",className: "success"});
        setTimeout(function(){
            $("#send5").html("<i class='fa fa-check-circle'></i> Uploaded")
            $('#pgrs5').hide();
        }, 1500);
        }
      );
    }
  } else {
    // alert("No file chosen");
    $.notify("Please choose atleast one file!",{ position:"top left",className: "error"  });
  }
});


let file6=[]
document.getElementById("files6").addEventListener("change", function(e) {
  files6 = e.target.files;
  for (let i = 0; i < files6.length; i++) {
    console.log(files6[i]);
  }
});

document.getElementById("send6").addEventListener("click", function() {
  //checks if files3 are selected
  if (files6.length != 0) {
    //Loops through all the selected files
    for (let i = 0; i < files6.length; i++) {
      //create a storage reference
      
      var storageRef = firebase.storage().ref(`C:\\Users\\91850\\Downloads\\${files6[i].name}`)
      var upload= storageRef.put(files6[i]);

      //upload file
     

      //update progress bar
      upload.on(
        "state_changed",
        function progress(snapshot) {
        $("#pgrs6").show()

          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById("progress6").value = percentage;
        },

        function error() {
        //   alert("error uploading file");
        $.notify("An error occured. Please try again.",{ position:"top left",className: "error"  });

        },

        function complete() {
        //   document.getElementById(
        //     "uploading"
        //   ).innerHTML += `${files[i].name} upoaded <br />`;
        $.notify(files6[i].name + " uploaded successfully!",{ position:"top left",className: "success"});
        setTimeout(function(){
            $('#pgrs6').hide();
            $('#send6').html("<i class='fa fa-check-circle'></i> Uploaded")
        }, 1500);
        }
      );
    }
  } else {
    // alert("No file chosen");
    $.notify("Please choose atleast one file!",{ position:"top left",className: "error"  });
  }
});



function getFileUrl(filename) {
  //create a storage reference
  let storage = firebase.storage().ref(filename);

  //get file url
  storage
    .getDownloadURL()
    .then(function(url) {
      console.log(url);
    })
    .catch(function(error) {
      console.log("error encountered");
    });
}





