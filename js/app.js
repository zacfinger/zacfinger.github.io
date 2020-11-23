$(document).ready(function(){
    
    var carouselImgs = document.getElementsByClassName("carousel-img");

    //var currentCarouselIndex = Math.floor(carouselImgs.length / 2);
    var currentCarouselIndex = 0;

    var isMoving = false;

    // Helper function to return a valid incremented index
    function incrementIndex(i) {
        i += 1;

        // roll back around to beginning if > length
        if(i == carouselImgs.length){
            i = 0; 
        }

        return i;
    }

    // Helper function to return a valid decremented index
    function decrementIndex(i) {
        i -= 1;

        if(i < 0){
            i = carouselImgs.length - 1; 
        }

        return i;
    }

    function leftArrowClick() {

        if(!isMoving){

            // Toggle isMoving parameter
            isMoving = true;

            // Get index of previous image
            var oldLeftIndex = decrementIndex(currentCarouselIndex);

            // Get index of image to the right
            var oldRightIndex = incrementIndex(currentCarouselIndex);

            // Get index of slide to update to "active" class
            var curIndex = oldLeftIndex;

            // Get index of slide to update to "moveLeft" class
            var leftIndex = decrementIndex(curIndex);

            // Get index of slide to update to "next" class
            var rightIndex = incrementIndex(curIndex);

            // Get current height of carousel as computed by browser
            // Set height so that moving images does not move other elements on page
            var carouselHeight = $("#carousel-img-container").height();
            $("#carousel-img-container").height(carouselHeight);
            /*
            // Get current computed height and width of img
            // Set height/width so that img is not adjusted as it moves
            var currentImgHeight = $(carouselImgs[currentCarouselIndex]).height();
            $(carouselImgs[currentCarouselIndex]).height(currentImgHeight);
            var currentImgWidth = $(carouselImgs[currentCarouselIndex]).width();
            $(carouselImgs[currentCarouselIndex]).width(currentImgWidth);
            
            // Get current computed height and width of left img
            // Set height/width so that img is not adjusted as it moves
            var oldLeftImgHeight = $(carouselImgs[oldLeftIndex]).height();
            $(carouselImgs[oldLeftIndex]).height(oldLeftImgHeight);
            var oldLeftImgWidth = $(carouselImgs[oldLeftIndex]).width();
            $(carouselImgs[oldLeftIndex]).width(oldLeftImgWidth);

            // Get current computed height and width of right img
            // Set height/width so that img is not adjusted as it moves
            var oldRightImgHeight = $(carouselImgs[oldRightIndex]).height();
            $(carouselImgs[oldRightIndex]).height(oldRightImgHeight);
            var oldRightImgWidth = $(carouselImgs[oldRightIndex]).width();
            $(carouselImgs[oldRightIndex]).width(oldRightImgWidth);*/

            // Remove classes representing prior state
            $(carouselImgs[oldLeftIndex]).removeClass("moveLeft");
            $(carouselImgs[currentCarouselIndex]).removeClass("current");
            $(carouselImgs[oldRightIndex]).removeClass("moveRight");

            // Update appropriate elements with new classes
            $(carouselImgs[leftIndex]).addClass("moveLeft");
            $(carouselImgs[curIndex]).addClass("current");
            $(carouselImgs[rightIndex]).addClass("moveRight");

            setTimeout(function(){ 
                // Remove arbitrary height/weight settings
                // Image is still at opacity 0 because of class moveRight
                $("#carousel-img-container").css("height", "");
                //$(carouselImgs[currentCarouselIndex]).css("height", "");
                //$(carouselImgs[currentCarouselIndex]).css("width", "");
                //$(carouselImgs[oldLeftIndex]).css("height", "");
                //$(carouselImgs[oldLeftIndex]).css("width", "");
                //$(carouselImgs[oldRightIndex]).css("height", "");
                //$(carouselImgs[oldRightIndex]).css("width", "");

                // Increment current index
                currentCarouselIndex = curIndex;

                isMoving = false;

            }, 1500);

        }

    }

    function rightArrowClick() {

        if(!isMoving){

            // Toggle isMoving parameter
            isMoving = true;

            // Get index of previous image
            var oldLeftIndex = decrementIndex(currentCarouselIndex);

            // Get index of image to the right
            var oldRightIndex = incrementIndex(currentCarouselIndex);

            // Get index of slide to update to "active" class
            var curIndex = oldRightIndex;

            // Get index of slide to update to "moveLeft" class
            var leftIndex = decrementIndex(curIndex);

            // Get index of slide to update to "moveRight" class
            var rightIndex = incrementIndex(curIndex);

            // Get current height of carousel as computed by browser
            // Set height so that moving images does not move other elements on page
            var carouselHeight = $("#carousel-img-container").height();
            $("#carousel-img-container").height(carouselHeight);
            /*
            // Get current computed height and width of img
            // Set height/width so that img is not adjusted as it moves
            var currentImgHeight = $(carouselImgs[currentCarouselIndex]).height();
            $(carouselImgs[currentCarouselIndex]).height(currentImgHeight);
            var currentImgWidth = $(carouselImgs[currentCarouselIndex]).width();
            $(carouselImgs[currentCarouselIndex]).width(currentImgWidth);
            
            // Get current computed height and width of left img
            // Set height/width so that img is not adjusted as it moves
            var oldLeftImgHeight = $(carouselImgs[oldLeftIndex]).height();
            $(carouselImgs[oldLeftIndex]).height(oldLeftImgHeight);
            var oldLeftImgWidth = $(carouselImgs[oldLeftIndex]).width();
            $(carouselImgs[oldLeftIndex]).width(oldLeftImgWidth);

            // Get current computed height and width of right img
            // Set height/width so that img is not adjusted as it moves
            var oldRightImgHeight = $(carouselImgs[oldRightIndex]).height();
            $(carouselImgs[oldRightIndex]).height(oldRightImgHeight);
            var oldRightImgWidth = $(carouselImgs[oldRightIndex]).width();
            $(carouselImgs[oldRightIndex]).width(oldRightImgWidth);*/

            // Remove classes representing prior state
            $(carouselImgs[oldLeftIndex]).removeClass("moveLeft");
            $(carouselImgs[currentCarouselIndex]).removeClass("current");
            $(carouselImgs[oldRightIndex]).removeClass("moveRight");

            // Update appropriate elements with new classes
            $(carouselImgs[leftIndex]).addClass("moveLeft");
            $(carouselImgs[curIndex]).addClass("current");
            $(carouselImgs[rightIndex]).addClass("moveRight");

            setTimeout(function(){ 
                // Remove arbitrary height/weight settings
                // Image is still at opacity 0 because of class moveLeft
                $("#carousel-img-container").css("height", "");
                //$(carouselImgs[currentCarouselIndex]).css("height", "");
                //$(carouselImgs[currentCarouselIndex]).css("width", "");
                //$(carouselImgs[oldLeftIndex]).css("height", "");
                //$(carouselImgs[oldLeftIndex]).css("width", "");
                //$(carouselImgs[oldRightIndex]).css("height", "");
                //$(carouselImgs[oldRightIndex]).css("width", "");

                // Increment current index
                currentCarouselIndex = curIndex;

                isMoving = false;

            }, 1500);
            
        }
  
    }
    
    var leftArrows = document.getElementsByClassName("left-arrow");

    $(leftArrows[0]).click(function() {
        leftArrowClick();
    });

    $(leftArrows[1]).click(function() {
        leftArrowClick();
    });

    $("#right-arrow").click(function() {
        rightArrowClick();
    });

    $("#year").html(new Date().getFullYear());

});