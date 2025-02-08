

document.addEventListener("DOMContentLoaded", function () {
    let counterElement = document.getElementById("counter");
    let observer = new IntersectionObserver(
        function (entries) {
            if (entries[0].isIntersecting) {
                startCounter();
                observer.disconnect(); // Stop observing after animation starts
            }
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    observer.observe(counterElement);

    function startCounter() {
        let count = 0;
        let target = 14;
        let interval = setInterval(function () {
            count++;
            counterElement.textContent = count + "+";
            if (count >= target) {
                clearInterval(interval);
            }
        }, 100); // Adjust speed (100ms per increment)
    }
});


document.addEventListener("DOMContentLoaded", function () {
    let counterElement = document.getElementById("counter1");
    let observer = new IntersectionObserver(
        function (entries) {
            if (entries[0].isIntersecting) {
                startCounter();
                observer.disconnect(); // Stop observing after animation starts
            }
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    observer.observe(counterElement);

    function startCounter() {
        let count = 0;
        let target = 20;
        let interval = setInterval(function () {
            count++;
            counterElement.textContent = count + "+";
            if (count >= target) {
                clearInterval(interval);
            }
        }, 100); // Adjust speed (100ms per increment)
    }
});


document.addEventListener("DOMContentLoaded", function () {
    let counterElement = document.getElementById("counter2");
    let observer = new IntersectionObserver(
        function (entries) {
            if (entries[0].isIntersecting) {
                startCounter();
                observer.disconnect(); 
            }
        },
        { threshold: 0.5 } 
    );

    observer.observe(counterElement);

    function startCounter() {
        let count = 100;
        let target = 200;
        let interval = setInterval(function () {
            count++;
            counterElement.textContent = count + "+";
            if (count >= target) {
                clearInterval(interval);
            }
        }, 20); 
    }
});


document.addEventListener("DOMContentLoaded", function () {
    let counterElement = document.getElementById("counter3");
    let observer = new IntersectionObserver(
        function (entries) {
            if (entries[0].isIntersecting) {
                startCounter();
                observer.disconnect(); 
            }
        },
        { threshold: 0.5 } 
    );

    observer.observe(counterElement);

    function startCounter() {
        let count = 0;
        let target = 8;
        let interval = setInterval(function () {
            count++;
            counterElement.innerHTML = count + "<span>/10</span>";
            if (count >= target) {
                clearInterval(interval);
            }
        }, 100); 
    }
});


// tab section

const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");
tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {

    btns.forEach(function (btn) {
      btn.classList.remove("live");
    });
    e.target.classList.add("live");

    articles.forEach(function (article) {
      article.classList.remove("live");
    });
    const element = document.getElementById(id);
    element.classList.add("live");
  }
});



