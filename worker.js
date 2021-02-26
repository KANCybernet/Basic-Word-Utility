addEventListener("message", (event) => {
    msg = event.data;
    let content = msg.value;
    let args = msg.args;

    if (args == "num_count") {
        num_count(content)
    } else if (args == "longest_word") {
        longestword(content);
    } else if (args == "frequently_used") {
        frequently_used(content);
    }

})

function num_count(content) {

    content = content.replace(/(^\s*)|(\s*$)/gi, "");
    content = content.replace(/[ ]{2,}/gi, " ");
    content = content.replace(/\n /, "\n");
    postMessage(content.split(' ').length);
}


function longestword(content) {

    let value = content.split(" ");
    longest = "";
    for (let i = 0; i < value.length; i++) {
        if (longest.length > value[i].length) {

        } else {
            longest = value[i];
        }
    }

    postMessage(longest);

    //for (let i = 0;)
}

function frequently_used(content) {

    let words = content.split(" ")

    let occurences = {};

    for (let word of words) {
        if (occurences[word]) {

            occurences[word]++;
        } else {
            occurences[word] = 1;
        }
    }


    let max = 0;
    let mostrepeated = ""

    for (word of words) {
        if (occurences[word] > max) {
            max = occurences[word];
            mostrepeated = word;

        }
    }

    postMessage(mostrepeated);
}