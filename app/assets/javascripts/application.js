// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require_tree .

const elements = {
    userHeading: document.querySelector(".user-heading"),
};

const userId = parseInt(elements.userHeading.dataset.id);

// axios.get(`/users/${userId}/courses`)
// .then((res) => {
//     console.log(res.data);   
// }).catch((err) => {
//     console.log(err); 
// });

// axios.get(`/users/${userId}/books`)
// .then((res) => {
//     console.log(res.data);   
// }).catch((err) => {
//     console.log(err); 
// });

// axios.get(`/users/${userId}/teachers`)
// .then((res) => {
//     console.log(res.data);   
// }).catch((err) => {
//     console.log(err); 
// });


document.querySelector(".create-course")
    .addEventListener("submit", (event) => {
        console.log("axios goes here")
        event.preventDefault();
        // axios.post("/users/#{userId}/courses")
        // .then((res) => {
        //     ///// render to page here
        //     console.log(res.data)
        // })
        // .catch((err) => {
        //     console.log(err);
        // });
});



