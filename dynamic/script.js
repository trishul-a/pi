let MyName = "Pinaka"
document.title = MyName

let python = 95
let ino = 90
let git = 50
let html = 70
let css = 65
let js = 60
let flask = 20

document.getElementById("MyName").innerHTML = MyName.split(" ")[0] + "."
document.getElementById("MyName_Name").innerHTML = MyName

function scale(num, element) {
    let obj = document.getElementById(element)
    for (let i = 0; i <= num; i++) {
        setTimeout(() => {
            obj.innerHTML = i + "%"
            obj.style.width = i + "%"
            if (i <= 30) {
                obj.style.backgroundColor = "rgb(212, 49, 0)"
            } else if (i >= 31 && i <= 60) {
                obj.style.backgroundColor = "rgb(227, 151, 0)"
            } else if (i >= 61 && i <= 100) {
                obj.style.backgroundColor = "rgba(0, 255, 0, 0.383)"
            } else {
                obj.style.backgroundColor = "rgb(0, 147, 238)"
            }
        }, i * 10); // Delay increases by 10ms for each iteration
    }
}

scale(python, 'python');
scale(ino, "arduino");
scale(git, 'git');
scale(html, 'html');
scale(css, 'css');
scale(js, 'js')
scale(flask, 'flask');

function LiveTime() {

    let newDate = new Date();
    DaTe = newDate.toLocaleString();

    document.getElementById("TiMe").innerHTML = DaTe.split(",")[1]
}
setInterval(LiveTime, 500);

const form = document.getElementById('contatct_me_form');
const result = document.getElementById('submit_button');


function hideElement(element) {
    // Start the animation by changing the opacity
    element.style.opacity = '0'; // Start fading out

    // After the transition ends, set display to none
    element.addEventListener('transitionend', () => {
        element.style.display = 'none'; // Hide the element
    }, { once: true }); // Ensure this runs only once
}

function smoothHide(element) {
    // Add the 'out' class to start fading
    element.classList.add('out');

    // Listen for the end of the transition
    element.addEventListener('transitionend', () => {
        element.style.display = 'none'; // Set display to none after fading
    }, { once: true }); // Ensure this runs only once
}

form.addEventListener('submit', function (e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Your message has been successfully sent!";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                // form.reset();
                // window.location.href = "#nav_bar"
                document.getElementById("contact_section").style.display = 'none';
            }, 3000);
        });
});

function fetchGitHubProfile() {
    const username = 'pin4ka'; // Replace with your GitHub username
    const url = `https://api.github.com/users/${username}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const profilePic = document.getElementById('dp_photo');
            profilePic.src = data.avatar_url;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
fetchGitHubProfile();

fetch('http://worldtimeapi.org/api/ip')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const currentYear = new Date(data.datetime).getFullYear();
        // console.log(`Current Year: ${currentYear}`);
        document.getElementById("year_copy").innerText = currentYear
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

