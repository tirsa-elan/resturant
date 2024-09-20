let counter = 0;
var timeWork;
// $(document).ready(() => {
const runInterval = () => {
    timeWork = setInterval(() => {
        if (counter < 50) {
            counter++;
            document.getElementById("count").innerHTML = counter;
        }
        else {
            clearInterval(timeWork)
            return
        }
    }, 100)
}

runInterval();

let countersecond = 0;
var timeWorksecond;

const IrunInterval = () => {
    timeWorkm = setInterval(() => {
        if (countersecond  < 15) {
            countersecond ++;
            document.getElementById("count2").innerHTML = countersecond;
        }
        else {
            clearInterval(timeWorksecond)
            return
        }
    }, 100)
}

IrunInterval();

// });
