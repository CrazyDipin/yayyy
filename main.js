document.addEventListener('DOMContentLoaded', function() {
    // Event listener for "I Love You More" button
    document.getElementById('love-button').addEventListener('click', function() {
        var button = document.getElementById('love-button');
        var container = document.getElementById('button-container');
        var containerWidth = container.clientWidth;
        var containerHeight = container.clientHeight;
        
        var newLeft = Math.floor(Math.random() * (containerWidth - button.clientWidth));
        var newTop = Math.floor(Math.random() * (containerHeight - button.clientHeight));
        
        button.style.left = newLeft + 'px';
        button.style.top = newTop + 'px';
    });

    // Meme display logic
    var memeFrames = [
        document.getElementById('meme1'),
        document.getElementById('meme2'),
        document.getElementById('meme3'),
        document.getElementById('meme4'),
        document.getElementById('meme5'),
        document.getElementById('meme6')
    ];

    document.getElementById('show-meme-button').addEventListener('click', function() {
        var memeContainer = document.getElementById('meme-container');
        var randomIndex = Math.floor(Math.random() * memeFrames.length);
        
        memeFrames.forEach(function(frame, index) {
            frame.style.display = 'none';
        });

        memeFrames[randomIndex].style.display = 'block';
        memeFrames[randomIndex].classList.add('animated');
        memeContainer.style.display = 'flex';
    });

    // Populate quotes
    var quotes = [
        "“I love you not only for what you are, but for what I am when I am with you.” – Roy Croft",
        "“I am who I am because of you. You are every reason, every hope, and every dream I’ve ever had.” – Nicholas Sparks",
        "“If I had a flower for every time I thought of you, I could walk in my garden forever.” – Alfred Lord Tennyson",
        "“I love you more than there are stars in the sky and fish in the sea.” – Nicholas Sparks",
        "“You are my heart, my life, my one and only thought.” – Arthur Conan Doyle",
        "“You are the finest, loveliest, tenderest, and most beautiful person I have ever known—and even that is an understatement.” – F. Scott Fitzgerald",
        "“I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.” – Angelita Lim",
        "“I love you as certain dark things are to be loved, in secret, between the shadow and the soul.” – Pablo Neruda",
        "“I wish I could turn back the clock. I’d find you sooner and love you longer.” – Unknown",
        "“I hope you know that every time I tell you to get home safe, stay warm, have a good day, or sleep well, what I am really saying is I love you. I love you so damn much that it is starting to steal other words’ meanings.” – Open-365",
        "“You have bewitched me, body and soul, and I love, I love, I love you.” – Pride and Prejudice",
        "“I love you begins by I, but it ends up by you.” – Charles de Leusse",
        "“My soul and your soul are forever tangled.” – N.R. Hart",
        "“You are the last thought in my mind before I drift off to sleep and the first thought when I wake up each morning.” – Unknown",
        "“I need you like a heart needs a beat.” – One Republic",
        "“Your love is all I need to feel complete.” – Unknown",
        "“I love you because the entire universe conspired to help me find you.” – Paulo Coelho",
        "“I love you as one loves certain obscure things. Secretly, between the shadow and the soul.” – Pablo Neruda",
        "“When I saw you, I fell in love, and you smiled because you knew.” – Arrigo Boito",
        "“I love you and that’s the beginning and end of everything.” – F. Scott Fitzgerald"
        // Add more quotes here
    ];

    var quotesContainer = document.getElementById('quotes-container');
    quotes.forEach(function(quote, index) {
        var quoteDiv = document.createElement('div');
        quoteDiv.className = 'quote';
        quoteDiv.innerHTML = `<p>${quote}</p><span class="heart" onclick="heartQuote(${index})">❤️</span>`;
        quotesContainer.appendChild(quoteDiv);
    });

    function heartQuote(index) {
        var quoteDiv = quotesContainer.children[index];
        quotesContainer.insertBefore(quoteDiv, quotesContainer.firstChild);
    }

    // Populate reasons
    var reasons = [
        "You make me laugh every day.",
        "Your smile is infectious.",
        "You always support my dreams.",
        "You are my best friend.",
        "You are kind and thoughtful.",
        "Your hugs make me feel safe.",
        "You are an amazing listener.",
        "You inspire me to be a better person.",
        "You are my soulmate.",
        "You are beautiful inside and out.",
        "You always know how to cheer me up.",
        "You make every moment special.",
        "You are incredibly smart.",
        "You have a heart of gold.",
        "You accept me for who I am.",
        "You are my rock.",
        "You bring out the best in me.",
        "You are my greatest adventure.",
        "You are my sunshine on a rainy day.",
        "You make me feel loved.",
        "You are my everything.",
        "You are the love of my life.",
        "You are my partner in crime.",
        "You are my confidant.",
        "You are my biggest cheerleader.",
        "You are always there for me.",
        "You are my forever.",
        "You are my best friend.",
        "You make me feel like I can do anything.",
        "You are my dream come true.",
        "You are my heart.",
        "You are my home.",
        "You are my family.",
        "You make life worth living.",
        "You are my favorite person.",
        "You are my other half.",
        "You are my happy place.",
        "You are my everything.",
        "You are my love.",
        "You are my person.",
        "You are my better half.",
        "You are my soulmate.",
        "You are my best friend.",
        "You are my world.",
        "You are my heart.",
        "You are my love.",
        "You are my sunshine.",
        "You are my everything.",
        "You are my one and only.",
        "You are my dream come true.",
        "You are my forever.",
        "You always surprise me with your kindness.",
        "You make me feel special every day.",
        "You bring so much joy into my life.",
        "You are my biggest supporter.",
        "You make me feel at home no matter where we are.",
        "You are always honest with me.",
        "You make me a better person.",
        "You have the most beautiful eyes.",
        "You make even the mundane moments extraordinary.",
        "You always know how to make me smile.",
        "You are my best adventure.",
        "You are my favorite hello and my hardest goodbye.",
        "You make my heart sing.",
        "You are my everything and more.",
        "You make me feel complete.",
        "You are the reason I believe in love.",
        "You make me feel like the luckiest person in the world.",
        "You are my happy ending.",
        "You are the light in my life.",
        "You are the best thing that ever happened to me.",
        "You are my soul's match.",
        "You make my dreams come true.",
        "You are my heart's desire.",
        "You are my reason for everything.",
        "You make me want to be a better person.",
        "You are my confidant and best friend.",
        "You are the love of my life.",
        "You are the best part of my day.",
        "You make me feel alive.",
        "You are my world.",
        "You are my safe haven.",
        "You are the one I want to spend my life with.",
        "You make everything better.",
        "You are my inspiration.",
        "You are my love, my life, my everything."
    ];

    var reasonsList = document.getElementById('reasons-list');
    reasons.forEach(function(reason, index) {
        var li = document.createElement('li');
        li.textContent = (index + 1) + ". " + reason;
        li.onclick = function() { showReaction(index); };
        reasonsList.appendChild(li);
    });

    function showReaction(index) {
        if ((index + 1) % 10 === 0) {
            showHeartAnimation();
        }
        switch (index) {
            case 0:
                alert("You make me laugh every day! 😊");
                break;
            case 1:
                alert("Your smile is infectious! 😄");
                break;
            case 2:
                alert("You always support my dreams! 🌟");
                break;
            case 3:
                alert("You are my best friend! 👯‍♂️");
                break;
            case 4:
                alert("You are kind and thoughtful! 💖");
                break;
            case 5:
                alert("Your hugs make me feel safe! 🤗");
                break;
            case 6:
                alert("You are an amazing listener! 🎧");
                break;
            case 7:
                alert("You inspire me to be a better person! 🌟");
                break;
            case 8:
                alert("You are my soulmate! 💕");
                break;
            case 9:
                alert("You are beautiful inside and out! 💖");
                showHeartAnimation();
                break;
            case 10:
                alert("You always know how to cheer me up! 😄");
                break;
            case 11:
                alert("You make every moment special! 🎉");
                break;
            case 12:
                alert("You are incredibly smart! 🧠");
                break;
            case 13:
                alert("You have a heart of gold! 💛");
                break;
            case 14:
                alert("You accept me for who I am! 🥰");
                break;
            case 15:
                alert("You are my rock! 🪨");
                break;
            case 16:
                alert("You bring out the best in me! 🌟");
                break;
            case 17:
                alert("You are my greatest adventure! 🌍");
                break;
            case 18:
                alert("You are my sunshine on a rainy day! 🌦");
                break;
            case 19:
                alert("You make me feel loved! ❤️");
                break;
            case 20:
                alert("You are my everything! 🌟");
                showHeartAnimation();
                break;
            case 21:
                alert("You are the love of my life! 💕");
                break;
            case 22:
                alert("You are my partner in crime! 👯‍♂️");
                break;
            case 23:
                alert("You are my confidant! 🗝");
                break;
            case 24:
                alert("You are my biggest cheerleader! 📣");
                break;
            case 25:
                alert("You are always there for me! 🤗");
                break;
            case 26:
                alert("You are my forever! ♾");
                break;
            case 27:
                alert("You are my best friend! 👯‍♂️");
                break;
            case 28:
                alert("You make me feel like I can do anything! 💪");
                break;
            case 29:
                alert("You are my dream come true! 🌠");
                break;
            case 30:
                alert("You are my heart! ❤️");
                showHeartAnimation();
                break;
            case 31:
                alert("You are my home! 🏡");
                break;
            case 32:
                alert("You are my family! 👨‍👩‍👧‍👦");
                break;
            case 33:
                alert("You make life worth living! 🌟");
                break;
            case 34:
                alert("You are my favorite person! 💕");
                break;
            case 35:
                alert("You are my other half! 💞");
                break;
            case 36:
                alert("You are my happy place! 😊");
                break;
            case 37:
                alert("You are my everything! 🌟");
                break;
            case 38:
                alert("You are my love! ❤️");
                break;
            case 39:
                alert("You are my person! 👫");
                break;
            case 40:
                alert("You are my better half! 💕");
                showHeartAnimation();
                break;
            case 41:
                alert("You are my soulmate! 🌟");
                break;
            case 42:
                alert("You are my best friend! 👯‍♂️");
                break;
            case 43:
                alert("You are my world! 🌍");
                break;
            case 44:
                alert("You are my heart! ❤️");
                break;
            case 45:
                alert("You are my love! 💕");
                break;
            case 46:
                alert("You are my sunshine! ☀️");
                break;
            case 47:
                alert("You are my everything! 🌟");
                break;
            case 48:
                alert("You are my one and only! 🥇");
                break;
            case 49:
                alert("You are my dream come true! 🌠");
                break;
            case 50:
                alert("You are my forever! ♾");
                showHeartAnimation();
                break;
            case 51:
                alert("You are my love! 💕");
                break;
            case 52:
                alert("You are my best friend! 👯‍♂️");
                break;
            case 53:
                alert("You are my soulmate! 🌟");
                break;
            case 54:
                alert("You are my better half! 💕");
                break;
            case 55:
                alert("You are my world! 🌍");
                break;
            case 56:
                alert("You are my heart! ❤️");
                break;
            case 57:
                alert("You are my love! 💕");
                break;
            case 58:
                alert("You are my sunshine! ☀️");
                break;
            case 59:
                alert("You are my everything! 🌟");
                break;
            case 60:
                alert("You are my one and only! 🥇");
                showHeartAnimation();
                break;
            case 61:
                alert("You are my dream come true! 🌠");
                break;
            case 62:
                alert("You are my forever! ♾");
                break;
            case 63:
                alert("You are my love! 💕");
                break;
            case 64:
                alert("You are my best friend! 👯‍♂️");
                break;
            case 65:
                alert("You are my soulmate! 🌟");
                break;
            case 66:
                alert("You are my better half! 💕");
                break;
            case 67:
                alert("You are my world! 🌍");
                break;
            case 68:
                alert("You are my heart! ❤️");
                break;
            case 69:
                alert("You are my love! 💕");
                break;
            case 70:
                alert("You are my sunshine! ☀️");
                showHeartAnimation();
                break;
            case 71:
                alert("You are my everything! 🌟");
                break;
            case 72:
                alert("You are my one and only! 🥇");
                break;
            case 73:
                alert("You are my dream come true! 🌠");
                break;
            case 74:
                alert("You are my forever! ♾");
                break;
            case 75:
                alert("You are my love! 💕");
                break;
            case 76:
                alert("You are my best friend! 👯‍♂️");
                break;
            case 77:
                alert("You are my soulmate! 🌟");
                break;
            case 78:
                alert("You are my better half! 💕");
                break;
            case 79:
                alert("You are my world! 🌍");
                break;
            case 80:
                alert("You are my heart! ❤️");
                showHeartAnimation();
                break;
            case 81:
                alert("You are my love! 💕");
                break;
            case 82:
                alert("You are my sunshine! ☀️");
                break;
            case 83:
                alert("You are my everything! 🌟");
                break;
            case 84:
                alert("You are my one and only! 🥇");
                break;
            case 85:
                alert("You are my dream come true! 🌠");
                break;
            case 86:
                alert("You are my forever! ♾");
                break;
            case 87:
                alert("You are my love! 💕");
                break;
            case 88:
                alert("You are my best friend! 👯‍♂️");
                break;
            case 89:
                alert("You are my soulmate! 🌟");
                break;
            case 90:
                alert("You are my better half! 💕");
                showHeartAnimation();
                break;
            case 91:
                alert("You are my world! 🌍");
                break;
            case 92:
                alert("You are my heart! ❤️");
                break;
            case 93:
                alert("You are my love! 💕");
                break;
            case 94:
                alert("You are my sunshine! ☀️");
                break;
            case 95:
                alert("You are my everything! 🌟");
                break;
            case 96:
                alert("You are my one and only! 🥇");
                break;
            case 97:
                alert("You are my dream come true! 🌠");
                break;
            case 98:
                alert("You are my forever! ♾");
                break;
            case 99:
                alert("You are my love! 💕");
                showHeartAnimation();
                break;
            default:
                alert(reasons[index]);
        }
    }

    // Function to show heart animation
    function showHeartAnimation() {
        var heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'heart-animation';
        document.body.appendChild(heart);
        setTimeout(function() {
            heart.remove();
        }, 2000);
    }

    // Function to show fireworks animation
    function showFireworks() {
        var fireworksContainer = document.createElement('div');
        fireworksContainer.className = 'fireworks';
        var firework1 = document.createElement('div');
        firework1.className = 'firework';
        firework1.innerHTML = '🎆';
        var firework2 = document.createElement('div');
        firework2.className = 'firework';
        firework2.innerHTML = '💕';
        var firework3 = document.createElement('div');
        firework3.className = 'firework';
        firework3.innerHTML = '🎇';
        var firework4 = document.createElement('div');
        firework4.className = 'firework';
        firework4.innerHTML = '❤️';

        fireworksContainer.appendChild(firework1);
        fireworksContainer.appendChild(firework2);
        fireworksContainer.appendChild(firework3);
        fireworksContainer.appendChild(firework4);

        document.body.appendChild(fireworksContainer);
        setTimeout(function() {
            fireworksContainer.remove();
        }, 3000);
    }

    // Love Minesweeper Game Logic
    const minesweeper = document.getElementById('minesweeper');
    const gameStatus = document.getElementById('game-status');
    const resetButton = document.getElementById('reset-button');
    const gridSizeSelect = document.getElementById('grid-size');
    let rows = 50;
    let cols = 50;
    let heartCount = Math.floor(rows * cols * 0.15);
    let gameOver = false;
    let grid;

    // Initialize the grid
    function initializeGrid() {
        grid = Array(rows).fill(null).map(() => Array(cols).fill(0));

        // Place hearts randomly in the grid
        for (let i = 0; i < heartCount; i++) {
            let row, col;
            do {
                row = Math.floor(Math.random() * rows);
                col = Math.floor(Math.random() * cols);
            } while (grid[row][col] === '❤️');
            grid[row][col] = '❤️';
        }

        // Calculate numbers for the grid
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] !== '❤️') {
                    let count = 0;
                    for (let r = -1; r <= 1; r++) {
                        for (let c = -1; c <= 1; c++) {
                            if (row + r >= 0 && row + r < rows && col + c >= 0 && col + c < cols && grid[row + r][col + c] === '❤️') {
                                count++;
                            }
                        }
                    }
                    grid[row][col] = count;
                }
            }
        }

        // Render the grid
        minesweeper.innerHTML = '';
        minesweeper.style.gridTemplateColumns = `repeat(${cols}, 20px)`;
        minesweeper.style.gridTemplateRows = `repeat(${rows}, 20px)`;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.row = row;
                cell.dataset.col = col;
                cell.addEventListener('click', onCellClick);
                minesweeper.appendChild(cell);
            }
        }

        gameOver = false;
        gameStatus.textContent = '';
    }

    function onCellClick(event) {
        if (gameOver) return;

        const cell = event.target;
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);

        if (grid[row][col] === '❤️') {
            cell.textContent = '❤️';
            gameOver = true;
            gameStatus.textContent = "Game Over! You found a heart!";
            showFireworks();
        } else {
            cell.textContent = grid[row][col];
        }

        cell.classList.add('revealed');
        cell.removeEventListener('click', onCellClick);
    }

    // Update grid size and reset game
    gridSizeSelect.addEventListener('change', function() {
        rows = parseInt(gridSizeSelect.value);
        cols = rows;
        heartCount = Math.floor(rows * cols * 0.15);
        initializeGrid();
    });

    // Reset game functionality
    resetButton.addEventListener('click', initializeGrid);

    // Initialize the grid for the first time
    initializeGrid();
});
