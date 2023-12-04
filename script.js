$(document).ready(function () {

    const color = [
        '#676694',
        '#7752FE',
        '#D6D46D',
        '#d58863',
        '#676694',
        '#b762b8',
        '#7ED7C1',
        '#D0A2F7',
        '#FA7070',
        '#F5939C',
        '#676694',
        '#20B2AA',
        '#F9B572',
        '#7752FE',
        '#2E8B57',
        '#FF6347',
        '#8A2BE2',
        '#9370DB',
        '#BDB76B',
        '#FF5B22',
        '#FF6347',
        '#008B8B',
        '#C683D7',
        '#8A2BE2',
        '#2E8B57',
        '#A25772',
        '#DC8686',
        '#2E97A7',
        '#362FD9',
        '#BDB76B',
        '#8A2BE2'
    ];
    $("#new-quote").click(function () {
        fetchHandler()
        cardColor()
    })


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    async function fetchHandler() {
        try {
            const response = await fetch('https://api.quotable.io/random')
            const quote = await response.json()
            console.log(response.json)
            setAuthorName(quote.author);
            setContent(quote.content);
        } catch (err) {
            console.log(err);
        }
    }

    function cardColor() {
        let randomIndex = getRandomInt(0, color.length);
        $("#text").css('color', color[randomIndex])
        $("#author").css('color', color[randomIndex])
        $(".share-quote").css('background-color', color[randomIndex])
        $("#new-quote").css('background-color', color[randomIndex])
        $("body").css('background-color', color[randomIndex])
    }
    function setContent(content) {
        $("#text").html("<iconify-icon style='font-size: 1.6rem;' icon='bi:quote'></iconify-icon>" + content);
    }
    function setAuthorName(authorName) {
        $("#author").html(" - " + authorName);
    }

    fetchHandler()
    cardColor()
});