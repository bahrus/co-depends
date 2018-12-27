//@ts-check;
const squareCircleTemplate = document.createElement('template');
squareCircleTemplate.innerHTML = /* html */`
        <div class="body">
            <div class="container">
                <div class="baton-0">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-1">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-2">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-3">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-4">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-5">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-6">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-7">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-8">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-9">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-10">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-11">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-12">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-13">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-14">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-15">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-16">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-17">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-18">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-19">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-20">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-21">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-22">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-23">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-24">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-25">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-26">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-27">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-28">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-29">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-30">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-31">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-32">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-33">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-34">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
                <div class="baton-35">
                    <div class="metronome">
                        <div class="baton"></div>
                    </div>
                </div>
            </div>
        </div>
        <style>
            div.body {
                display: flex;
                align-items: center;
                height: 100vh;
                background-color: #001524;
            }

            .container {
                display: block;
                height: 300px;
                width: 300px;
                margin: 0 auto;
            }

            .baton {
                display: block;
                height: 2px;
                width: 70px;
                background-color: #459fa5;
                animation: scale 1.25s infinite linear;
                -webkit-transform-origin: 0;
                -moz-transform-origin: 0;
                -ms-transform-origin: 0;
                -o-transform-origin: 0;
                transform-origin: 0;
                -webkit-transform: rotate(-10deg);
                -moz-transform: rotate(-10deg);
                -ms-transform: rotate(-10deg);
                -o-transform: rotate(-10deg);
                transform: rotate(-10deg);
            }

            .baton:before {
                content: '';
                display: block;
                height: 5px;
                width: 5px;
                background-color: #f5a51c;
                position: absolute;
                top: -2px;
                -webkit-border-radius: 5px;
                -moz-border-radius: 5px;
                -ms-border-radius: 5px;
                -o-border-radius: 5px;
                border-radius: 5px;
            }

            .baton:after {
                content: '';
                display: block;
                height: 5px;
                width: 5px;
                background-color: #f5a51c;
                position: absolute;
                top: -2px;
                right: 0;
                -webkit-border-radius: 5px;
                -moz-border-radius: 5px;
                -ms-border-radius: 5px;
                -o-border-radius: 5px;
                border-radius: 5px;
            }

            .metronome {
                -webkit-transform-origin: 0;
                -moz-transform-origin: 0;
                -ms-transform-origin: 0;
                -o-transform-origin: 0;
                transform-origin: 0;
                animation: metronome 1.25s infinite linear;
            }

            .baton-0 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                -ms-transform: rotate(0deg);
                -o-transform: rotate(0deg);
            }

            .baton-0 .baton,
            .baton-0 .baton:after,
            .baton-0 .metronome {
                animation-delay: 0s;
            }

            .baton-1 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(10deg);
                -moz-transform: rotate(10deg);
                -ms-transform: rotate(10deg);
                -o-transform: rotate(10deg);
            }

            .baton-1 .baton,
            .baton-1 .baton:after,
            .baton-1 .metronome {
                animation-delay: -0.14s;
            }

            .baton-2 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(20deg);
                -moz-transform: rotate(20deg);
                -ms-transform: rotate(20deg);
                -o-transform: rotate(20deg);
            }

            .baton-2 .baton,
            .baton-2 .baton:after,
            .baton-2 .metronome {
                animation-delay: -0.28s;
            }

            .baton-3 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(30deg);
                -moz-transform: rotate(30deg);
                -ms-transform: rotate(30deg);
                -o-transform: rotate(30deg);
            }

            .baton-3 .baton,
            .baton-3 .baton:after,
            .baton-3 .metronome {
                animation-delay: -0.42s;
            }

            .baton-4 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(40deg);
                -moz-transform: rotate(40deg);
                -ms-transform: rotate(40deg);
                -o-transform: rotate(40deg);
            }

            .baton-4 .baton,
            .baton-4 .baton:after,
            .baton-4 .metronome {
                animation-delay: -0.56s;
            }

            .baton-5 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(50deg);
                -moz-transform: rotate(50deg);
                -ms-transform: rotate(50deg);
                -o-transform: rotate(50deg);
            }

            .baton-5 .baton,
            .baton-5 .baton:after,
            .baton-5 .metronome {
                animation-delay: -0.7s;
            }

            .baton-6 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(60deg);
                -moz-transform: rotate(60deg);
                -ms-transform: rotate(60deg);
                -o-transform: rotate(60deg);
            }

            .baton-6 .baton,
            .baton-6 .baton:after,
            .baton-6 .metronome {
                animation-delay: -0.84s;
            }

            .baton-7 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(70deg);
                -moz-transform: rotate(70deg);
                -ms-transform: rotate(70deg);
                -o-transform: rotate(70deg);
            }

            .baton-7 .baton,
            .baton-7 .baton:after,
            .baton-7 .metronome {
                animation-delay: -0.98s;
            }

            .baton-8 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(80deg);
                -moz-transform: rotate(80deg);
                -ms-transform: rotate(80deg);
                -o-transform: rotate(80deg);
            }

            .baton-8 .baton,
            .baton-8 .baton:after,
            .baton-8 .metronome {
                animation-delay: -1.12s;
            }

            .baton-9 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(90deg);
                -moz-transform: rotate(90deg);
                -ms-transform: rotate(90deg);
                -o-transform: rotate(90deg);
            }

            .baton-9 .baton,
            .baton-9 .baton:after,
            .baton-9 .metronome {
                animation-delay: -1.26s;
            }

            .baton-10 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(100deg);
                -moz-transform: rotate(100deg);
                -ms-transform: rotate(100deg);
                -o-transform: rotate(100deg);
            }

            .baton-10 .baton,
            .baton-10 .baton:after,
            .baton-10 .metronome {
                animation-delay: -1.4s;
            }

            .baton-11 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(110deg);
                -moz-transform: rotate(110deg);
                -ms-transform: rotate(110deg);
                -o-transform: rotate(110deg);
            }

            .baton-11 .baton,
            .baton-11 .baton:after,
            .baton-11 .metronome {
                animation-delay: -1.54s;
            }

            .baton-12 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(120deg);
                -moz-transform: rotate(120deg);
                -ms-transform: rotate(120deg);
                -o-transform: rotate(120deg);
            }

            .baton-12 .baton,
            .baton-12 .baton:after,
            .baton-12 .metronome {
                animation-delay: -1.68s;
            }

            .baton-13 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(130deg);
                -moz-transform: rotate(130deg);
                -ms-transform: rotate(130deg);
                -o-transform: rotate(130deg);
            }

            .baton-13 .baton,
            .baton-13 .baton:after,
            .baton-13 .metronome {
                animation-delay: -1.82s;
            }

            .baton-14 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(140deg);
                -moz-transform: rotate(140deg);
                -ms-transform: rotate(140deg);
                -o-transform: rotate(140deg);
            }

            .baton-14 .baton,
            .baton-14 .baton:after,
            .baton-14 .metronome {
                animation-delay: -1.96s;
            }

            .baton-15 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(150deg);
                -moz-transform: rotate(150deg);
                -ms-transform: rotate(150deg);
                -o-transform: rotate(150deg);
            }

            .baton-15 .baton,
            .baton-15 .baton:after,
            .baton-15 .metronome {
                animation-delay: -2.1s;
            }

            .baton-16 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(160deg);
                -moz-transform: rotate(160deg);
                -ms-transform: rotate(160deg);
                -o-transform: rotate(160deg);
            }

            .baton-16 .baton,
            .baton-16 .baton:after,
            .baton-16 .metronome {
                animation-delay: -2.24s;
            }

            .baton-17 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(170deg);
                -moz-transform: rotate(170deg);
                -ms-transform: rotate(170deg);
                -o-transform: rotate(170deg);
            }

            .baton-17 .baton,
            .baton-17 .baton:after,
            .baton-17 .metronome {
                animation-delay: -2.38s;
            }

            .baton-18 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(180deg);
                -moz-transform: rotate(180deg);
                -ms-transform: rotate(180deg);
                -o-transform: rotate(180deg);
            }

            .baton-18 .baton,
            .baton-18 .baton:after,
            .baton-18 .metronome {
                animation-delay: -2.52s;
            }

            .baton-19 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(190deg);
                -moz-transform: rotate(190deg);
                -ms-transform: rotate(190deg);
                -o-transform: rotate(190deg);
            }

            .baton-19 .baton,
            .baton-19 .baton:after,
            .baton-19 .metronome {
                animation-delay: -2.66s;
            }

            .baton-20 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(200deg);
                -moz-transform: rotate(200deg);
                -ms-transform: rotate(200deg);
                -o-transform: rotate(200deg);
            }

            .baton-20 .baton,
            .baton-20 .baton:after,
            .baton-20 .metronome {
                animation-delay: -2.8s;
            }

            .baton-21 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(210deg);
                -moz-transform: rotate(210deg);
                -ms-transform: rotate(210deg);
                -o-transform: rotate(210deg);
            }

            .baton-21 .baton,
            .baton-21 .baton:after,
            .baton-21 .metronome {
                animation-delay: -2.94s;
            }

            .baton-22 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(220deg);
                -moz-transform: rotate(220deg);
                -ms-transform: rotate(220deg);
                -o-transform: rotate(220deg);
            }

            .baton-22 .baton,
            .baton-22 .baton:after,
            .baton-22 .metronome {
                animation-delay: -3.08s;
            }

            .baton-23 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(230deg);
                -moz-transform: rotate(230deg);
                -ms-transform: rotate(230deg);
                -o-transform: rotate(230deg);
            }

            .baton-23 .baton,
            .baton-23 .baton:after,
            .baton-23 .metronome {
                animation-delay: -3.22s;
            }

            .baton-24 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(240deg);
                -moz-transform: rotate(240deg);
                -ms-transform: rotate(240deg);
                -o-transform: rotate(240deg);
            }

            .baton-24 .baton,
            .baton-24 .baton:after,
            .baton-24 .metronome {
                animation-delay: -3.36s;
            }

            .baton-25 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(250deg);
                -moz-transform: rotate(250deg);
                -ms-transform: rotate(250deg);
                -o-transform: rotate(250deg);
            }

            .baton-25 .baton,
            .baton-25 .baton:after,
            .baton-25 .metronome {
                animation-delay: -3.5s;
            }

            .baton-26 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(260deg);
                -moz-transform: rotate(260deg);
                -ms-transform: rotate(260deg);
                -o-transform: rotate(260deg);
            }

            .baton-26 .baton,
            .baton-26 .baton:after,
            .baton-26 .metronome {
                animation-delay: -3.64s;
            }

            .baton-27 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(270deg);
                -moz-transform: rotate(270deg);
                -ms-transform: rotate(270deg);
                -o-transform: rotate(270deg);
            }

            .baton-27 .baton,
            .baton-27 .baton:after,
            .baton-27 .metronome {
                animation-delay: -3.78s;
            }

            .baton-28 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(280deg);
                -moz-transform: rotate(280deg);
                -ms-transform: rotate(280deg);
                -o-transform: rotate(280deg);
            }

            .baton-28 .baton,
            .baton-28 .baton:after,
            .baton-28 .metronome {
                animation-delay: -3.92s;
            }

            .baton-29 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(290deg);
                -moz-transform: rotate(290deg);
                -ms-transform: rotate(290deg);
                -o-transform: rotate(290deg);
            }

            .baton-29 .baton,
            .baton-29 .baton:after,
            .baton-29 .metronome {
                animation-delay: -4.06s;
            }

            .baton-30 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(300deg);
                -moz-transform: rotate(300deg);
                -ms-transform: rotate(300deg);
                -o-transform: rotate(300deg);
            }

            .baton-30 .baton,
            .baton-30 .baton:after,
            .baton-30 .metronome {
                animation-delay: -4.2s;
            }

            .baton-31 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(310deg);
                -moz-transform: rotate(310deg);
                -ms-transform: rotate(310deg);
                -o-transform: rotate(310deg);
            }

            .baton-31 .baton,
            .baton-31 .baton:after,
            .baton-31 .metronome {
                animation-delay: -4.34s;
            }

            .baton-32 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(320deg);
                -moz-transform: rotate(320deg);
                -ms-transform: rotate(320deg);
                -o-transform: rotate(320deg);
            }

            .baton-32 .baton,
            .baton-32 .baton:after,
            .baton-32 .metronome {
                animation-delay: -4.48s;
            }

            .baton-33 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(330deg);
                -moz-transform: rotate(330deg);
                -ms-transform: rotate(330deg);
                -o-transform: rotate(330deg);
            }

            .baton-33 .baton,
            .baton-33 .baton:after,
            .baton-33 .metronome {
                animation-delay: -4.62s;
            }

            .baton-34 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(340deg);
                -moz-transform: rotate(340deg);
                -ms-transform: rotate(340deg);
                -o-transform: rotate(340deg);
            }

            .baton-34 .baton,
            .baton-34 .baton:after,
            .baton-34 .metronome {
                animation-delay: -4.76s;
            }

            .baton-35 {
                height: 1px;
                width: 150px;
                position: absolute;
                top: calc(50% - 8px);
                -webkit-transform-origin: 100%;
                -moz-transform-origin: 100%;
                -ms-transform-origin: 100%;
                -o-transform-origin: 100%;
                transform-origin: 100%;
                -webkit-transform: rotate(350deg);
                -moz-transform: rotate(350deg);
                -ms-transform: rotate(350deg);
                -o-transform: rotate(350deg);
            }

            .baton-35 .baton,
            .baton-35 .baton:after,
            .baton-35 .metronome {
                animation-delay: -4.9s;
            }

            @keyframes metronome {
                0% {
                    -webkit-transform: rotate(-25deg);
                    -moz-transform: rotate(-25deg);
                    -ms-transform: rotate(-25deg);
                    -o-transform: rotate(-25deg);
                    transform: rotate(-25deg);
                }

                50% {
                    -webkit-transform: rotate(25deg);
                    -moz-transform: rotate(25deg);
                    -ms-transform: rotate(25deg);
                    -o-transform: rotate(25deg);
                    transform: rotate(25deg);
                }

                100% {
                    -webkit-transform: rotate(-25deg);
                    -moz-transform: rotate(-25deg);
                    -ms-transform: rotate(-25deg);
                    -o-transform: rotate(-25deg);
                    transform: rotate(-25deg);
                }
            }

            @keyframes scale {
                0% {
                    -webkit-transform: scaleX(1);
                    -moz-transform: scaleX(1);
                    -ms-transform: scaleX(1);
                    -o-transform: scaleX(1);
                    transform: scaleX(1);
                }

                25% {
                    -webkit-transform: scaleX(0.74);
                    -moz-transform: scaleX(0.74);
                    -ms-transform: scaleX(0.74);
                    -o-transform: scaleX(0.74);
                    transform: scaleX(0.74);
                }

                50% {
                    -webkit-transform: scaleX(1);
                    -moz-transform: scaleX(1);
                    -ms-transform: scaleX(1);
                    -o-transform: scaleX(1);
                    transform: scaleX(1);
                }

                75% {
                    -webkit-transform: scaleX(1.16);
                    -moz-transform: scaleX(1.16);
                    -ms-transform: scaleX(1.16);
                    -o-transform: scaleX(1.16);
                    transform: scaleX(1.16);
                }

                100% {
                    -webkit-transform: scaleX(1);
                    -moz-transform: scaleX(1);
                    -ms-transform: scaleX(1);
                    -o-transform: scaleX(1);
                    transform: scaleX(1);
                }
            }
        </style>
`;
class SquareCircle extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(squareCircleTemplate.content.cloneNode(true));
    }
}
customElements.define('co-depends-square-circle-js', SquareCircle);