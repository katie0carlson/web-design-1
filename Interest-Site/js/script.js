$(document).ready(function () {

    console.log("jQuery Loaded Successfully");

    // INDEX PAGE
    initGridLightStreaks();
    function initGridLightStreaks() {
        $(".enter-grid-btn").on("mouseenter", function () {
    
            for (let i = 0; i < 5; i++) {
                let streak = $("<div class='streak'></div>");
    
                $("#streak-container").append(streak);
    
                streak.css({
                    top: 0,
                    left: Math.random() * 300 + "px"
                });
    
                streak.animate({
                    opacity: 1,
                    left: "+=150px"
                }, 300).fadeOut(300, function () {
                    $(this).remove();
                });
            }
        });
    }

    initBlueLineShoot();
    function initBlueLineShoot() {

        $("#enter-grid").on("click", function () {
    
            // Create the blue line dynamically
            let line = $("<div class='blue-line'></div>");
    
            $("#blue-line-container").append(line);
    
            // Animate line shooting upward
            line.animate({
                height: "200px",
                opacity: 1,
                top: "-200px"
            }, 400).fadeOut(200, function () {
                $(this).remove();
            });
        });
    } 



    // LEGACY PAGE
    initTetrisMovement();
    function initTetrisMovement() {
        $("#drop-block").on("click", function () {
    
            // make both blocks fall
            $("#falling-block-green").animate({
                top: "+=600px"
            }, 1200, function () {
                $(this).css("top", "0px"); // reset
            });
    
            $("#falling-block-purple").animate({
                top: "+=600px"
            }, 1200, function () {
                $(this).css("top", "0px");
            });
    
        });
    }
    

    // ARES PAGE
    initRouletteSpin();
    function initRouletteSpin() {
        $("#spin-wheel").on("click", function () {
    
            // generates 2–4 full rotations plus randomness
            let spinAmount = 720 + Math.random() * 720;
    
            $("#roulette-wheel").css({
                transform: "rotate(" + spinAmount + "deg)"
            });
    
        });
    }

    $(document).ready(function() {
        initGridLightStreaks();  // HOME
        initBlueLineShoot(); 
        initTetrisMovement();    // LEGACY
        initRouletteSpin();      // ARES
    });
});