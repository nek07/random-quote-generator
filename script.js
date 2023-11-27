$(document).ready(function(){

    let quotes=[{
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
        color: '#676694'
    },        {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
        color: '#7752FE'
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
        color: '#D6D46D'
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
        color: '#7ED7C1'
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "Allen Sanders",
        color: '#D0A2F7'
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        color: '#FA7070'
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
    },    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky",
        color: '#20B2AA'
    },
    {
        text: "It's not whether you get knocked down, it's whether you get up.",
        author: "Vince Lombardi",
        color: '#FF4500'
    },
    {
        text: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
        author: "Vince Lombardi",
        color: '#FF4500'
    },
    {
        text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Brian Tracy",
        color: '#2E8B57'
    },
    {
        text: "The more I practice, the luckier I get.",
        author: "Gary Player",
        color: '#FF6347'
    },
    {
        text: "The only way to prove that you're a good sport is to lose.",
        author: "Ernie Banks",
        color: '#8A2BE2'
    },
    {
        text: "If you have everything under control, you're not moving fast enough.",
        author: "Mario Andretti",
        color: '#9370DB'
    },
    {
        text: "It's not the will to win that matters; everyone has that. It's the will to prepare to win that matters.",
        author: "Paul 'Bear' Bryant",
        color: '#BDB76B'
    },
    {
        text: "The more difficult the victory, the greater the happiness in winning.",
        author: "Pele",
        color: '#FF5B22FF6347'
    },
    {
        text: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do.",
        author: "Pele",
        color: '#FF6347'
    },
    {
        text: "Do not let what you cannot do interfere with what you can do.",
        author: "John Wooden",
        color: '#008B8B'
    },
    {
        text: "Champions keep playing until they get it right.",
        author: "Billie Jean King",
        color: '#C683D7'
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
        color: '#8A2BE2'
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
        color: '#2E8B57'
    },
    {
        text: "It's not whether you get knocked down, it's whether you get up.",
        author: "Vince Lombardi",
        color: '#A25772'
    },
    {
        text: "I've failed over and over and over again in my life. And that is why I've been successful.",
        author: "Michael Jordan",
        color: '#DC8686'
    },
    {
        text: "Don't count the days, make the days count.",
        author: "Muhammad Ali",
        color: '#2E97A7'
    },
    {
        text: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'",
        author: "Muhammad Ali",
        color: '#362FD9'
    },
    {
        text: "It's not the will to win that matters; everyone has that. It's the will to prepare to win that matters.",
        author: "Paul 'Bear' Bryant",
        color: '#BDB76B'
    },
    {
        text: "The only way to prove that you're a good sport is to lose.",
        author: "Ernie Banks",
        color: '#8A2BE2'
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