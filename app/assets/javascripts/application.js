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


///// DOM ELEMENTS
const elements = {
    userHeading: document.querySelector(".user-heading"),
    coursesContainer: document.querySelector(".courses-container"),
    courseForm: document.querySelector(".create-course"),
    courseInput: document.querySelector(".form-input"),
    courseList: [...document.querySelectorAll(".course")]
};

///// VALUES
const crsf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
const userId = parseInt(elements.userHeading.dataset.id);


///// FUNCTION: to render courses
const renderCourses = (courseArray) => {
    elements.coursesContainer.innerHTML = ""

    let nodeArr = courseArray.map((item) => {
        const node = document.createElement("div");
        node.classList.add("course");
        node.innerHTML = `<div class="course__name">${item.course}</div>`;
        return node;
    });

    const docFrag = document.createDocumentFragment();
    nodeArr.forEach((item) => {
        docFrag.appendChild(item);
    });

    elements.coursesContainer.appendChild(docFrag);

};


///// RENDERING COURSES ON PAGE LOAD
axios.get(`/users/${userId}/courses`)
.then((res) => {
    renderCourses(res.data);
}).catch((err) => {
    console.log(err); 
});


///// FORM SUBMISSION
elements.courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    console.log("form submission");

    axios.post(`/users/${userId}/courses`, {
        course: elements.courseInput.value,
        authenticity_token: crsf,
    })
    .then((res) => {
        console.log(res)
        if(res.status === 200) {
            return axios.get(`/users/${userId}/courses`);
        }
    })
    .then((res) => {
        if(res.status === 200) renderCourses(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
});



