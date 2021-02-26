function currenttime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();

    const fulldate = year + "/" + month + "/" + day + " " + hour + ":" + min;

    var time = document.getElementsByTagName("span")[0];

    time.innerHTML = fulldate;

}
setInterval(() => {
    currenttime();

}, 60000);

// the buttons

//var averageWord = document.getElementsByTagName("li")[0].firstElementChild.tagName;

document.getElementsByTagName("li")[0].addEventListener("click", () => {
    document.getElementsByClassName("argumentForms")[0].innerHTML = "<form id='average-form'> <fieldset > <legend > Find the average word length </legend> <label> Text: <input placeholder = 'input text...1'required > </label> <button class = 'evaluator' > Find </button> </fieldset > </form>";

    //alert("Hello World");
})
document.getElementsByTagName("li")[1].addEventListener("click", () => {
    document.getElementsByClassName("argumentForms")[0].innerHTML = "<form id='longest-form'> <fieldset> <legend  style='color:white'> Find the Frequent Used Words </legend> <label> Text: <textarea rows='10 'style='width:500 px;'placeholder='Enter text Here' class='form-control content'></textarea> <br></label> <div class='mb-3'> <button class='evaluator btn btn-info'>Search</button></div></fieldset> </form>";

    document.getElementsByClassName("evaluator")[0].addEventListener("click", (event) => {
        event.preventDefault();
        document.getElementById("display").innerHTML = "<span> Loading ...</span > ";
        let content = document.getElementsByClassName("content")[0].value;

        let worker = new Worker("worker.js");
        worker.postMessage({ "value": content, "args": "frequently_used" })

        worker.addEventListener("message", (event) => {
            let result = event.data;

            document.getElementById("display").innerHTML = "<span> Most Frequent Word Is:<b> " + result + "</b></span>";
        })


    })
})
document.getElementsByTagName("li")[2].addEventListener("click", () => {
    document.getElementsByClassName("argumentForms")[0].innerHTML = "<form id='longest-form'> <fieldset> <legend  style='color:white'> find the longest words </legend> <label> Text: <textarea rows='10 'style='width:500 px;'placeholder='Enter text Here' class='form-control content'></textarea> <br></label> <div class='mb-3'> <button class='evaluator btn btn-info'>Search</button></div></fieldset> </form>";

    document.getElementsByClassName("evaluator")[0].addEventListener("click", (event) => {
        event.preventDefault();
        let content = document.getElementsByClassName("content")[0].value;

        let worker = new Worker("worker.js");
        worker.postMessage({
            "value": content,
            "args": "longest_word"
        })

        worker.addEventListener("message", (event) => {
            let result = event.data;
            document.getElementById("display").innerHTML = "<span> The Longest Word Is:<b> " + result + "</b></span>";
        })

    })
})

document.getElementsByTagName("li")[3].addEventListener("click", () => {
    document.getElementsByClassName("argumentForms")[0].innerHTML = "<form id='longest-form'> <fieldset> <legend style='color:white'> Count The Number Of Word</legend> <label> Text: <textarea rows='10 'style='width:500 px;'placeholder='Enter text Here' class='form-control content'></textarea> <br></label> <div class='mb-3'> <button class='evaluator btn btn-primary'>Count</button></div></fieldset> </form>";

    document.getElementsByClassName("evaluator")[0].addEventListener("click", (event) => {
        let content = document.getElementsByClassName("content")[0].value;
        event.preventDefault();

        let w = new Worker("worker.js");
        w.postMessage({
            "value": content,
            "args": "num_count"
        });

        w.addEventListener("message", (event) => {

            let result = event.data;
            document.getElementById("display").innerHTML = "<span> Total Words is:<b> " + result + "</b></span>";

            //alert(result);

        })



    })

    //alert("Hello World");
})