$(document).ready(function(){

    let quotes=[{
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
        color: '#676694'
    },        {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
        color: '#676694'
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
        color: '#2c1e74'
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        color: '#d58863'
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
        color: '#676694'
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        color: '#b762b8'
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
        color: '#C5e946'
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "Allen Sanders",
        color: '#F5E9DD'
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        color: '#FACAB6'
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky",
        color: '#F5939C'
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
        color: '#676694'
    }]
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
      }

    $("#new-quote").click(function(){
        let randomIndex = getRandomInt(0,quotes.length);
        $("#text").html("<iconify-icon style='font-size: 1.6rem;' icon='bi:quote'></iconify-icon>"+quotes[randomIndex].text);
        $("#author").html(" - "+quotes[randomIndex].author);
        $("#text").css('color',quotes[randomIndex].color)
        $("#author").css('color',quotes[randomIndex].color)
        $(".share-quote").css('background-color',quotes[randomIndex].color)
        $("#new-quote").css('background-color',quotes[randomIndex].color)
        $("body").css('background-color',quotes[randomIndex].color)
    })
    let randomIndex = getRandomInt(0,quotes.length);
    $("#text").html("<iconify-icon style='font-size: 1.6rem;' icon='bi:quote'></iconify-icon>"+quotes[randomIndex].text);
    $("#author").html(" - "+quotes[randomIndex].author);
    $("#text").css('color',quotes[randomIndex].color)
    $("#author").css('color',quotes[randomIndex].color)
    $(".share-quote").css('background-color',quotes[randomIndex].color)
    $("#new-quote").css('background-color',quotes[randomIndex].color)
    $("body").css('background-color',quotes[randomIndex].color)
  });