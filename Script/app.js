
        var container = document.querySelector(".container");
        var overlay = document.querySelector(".overlay");

        var Audio_play=document.querySelector("#Myaudio");


        let messages = [ "Well Done!","Copied!","Great Job!","Success!", "Keep it up!",  "Nice Click!", "Bravo!", "Done!", "Excellent!", "Amazing Work!", "Superb!", "Fantastic!", "Perfect!", "Good Job!", "You Did It!", "Way to Go!", "Impressive!", "Awesome!", "Rock On!", "Nice Try!", "You're Incredible!", "Legendary!", "Outstanding!", "Fabulous!", "Hats Off!", "You're the Best!", "Incredible Work!", "Wonderful!", "Splendid!", "Magnificent!"
        ];



        for (var i = 1; i <= 40; i++) {

            var boxes = document.createElement("div");
            boxes.classList.add("box");
            container.appendChild(boxes);

            var red = parseInt(Math.random() * 256).toString(16).padStart(2, "0");
            var green = parseInt(Math.random() * 256).toString(16).padStart(2, "0");
            var blue = parseInt(Math.random() * 256).toString(16).padStart(2, "0");
            var AllAddCode = "#" + red + green + blue;
            boxes.innerText = AllAddCode;
            boxes.style.background = AllAddCode;



            boxes.addEventListener(
                "click",
                function (e) {
                    navigator.clipboard.writeText(e.target.innerText)
                    overlay.innerText = messages[parseInt(Math.random() * messages.length)];
                    overlay.style.transform = "scale(1)"
                    overlay.style.background = e.target.innerText;
                    Audio_play.play()

                    setTimeout(
                        function () {
                            overlay.style.transform = "scale(0)"

                        }, 1000
                    )
                }
            )


        }

