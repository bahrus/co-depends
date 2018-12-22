import {deframe} from 'deframe/deframe-variation-1.js';

const honeyTempl = document.createElement('template');
honeyTempl.innerHTML = /* html */`
<style>
:host {
    display: block;
}

@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

body {
    font-family: 'Montserrat', sans-serif;
    background: #3ea0eb;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

.honeycomb {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
    -webkit-transform: translateY(34.375px);
    transform: translateY(34.375px);
}

.honeycomb-cell {
    flex: 0 1 250px;
    max-width: 250px;
    height: 137.5px;
    margin: 65.4761904762px 12.5px 25px;
    position: relative;
    padding: 0.5em;
    text-align: center;
    z-index: 1;
}

.honeycomb-cell__title {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    word-break: break-word;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    font-size: 1.75em;
    transition: opacity 350ms;
}

.honeycomb-cell__title>small {
    font-weight: 300;
    margin-top: 0.25em;
}

.honeycomb-cell__image {
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
}

.honeycomb-cell::before,
.honeycomb-cell::after {
    content: '';
}

.honeycomb-cell::before,
.honeycomb-cell::after,
.honeycomb-cell__image {
    top: -50%;
    left: 0;
    width: 100%;
    height: 200%;
    display: block;
    position: absolute;
    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    z-index: -1;
}

.honeycomb-cell::before {
    background: #fff;
    -webkit-transform: scale(1.055);
    transform: scale(1.055);
}

.honeycomb-cell::after {
    background: #3ea0eb;
    opacity: 0.5;
    transition: opacity 350ms;
}

.honeycomb-cell:hover .honeycomb-cell__title {
    opacity: 0;
}

.honeycomb-cell:hover::before {
    background: #72f88e;
}

.honeycomb-cell:hover::after {
    opacity: 0;
}

.honeycomb__placeholder {
    display: none;
    opacity: 0;
    width: 250px;
    margin: 0 12.5px;
}

@media (max-width: 550px) {
    .honeycomb-cell {
        margin: 81.25px 25px;
    }
}

@media (min-width: 550px) and (max-width: 825px) {
    .honeycomb-cell:nth-child(3n) {
        margin-right: calc(50% - 125px);
        margin-left: calc(50% - 125px);
    }

    .honeycomb__placeholder:nth-child(3n + 5) {
        display: block;
    }
}

@media (min-width: 825px) and (max-width: 1100px) {
    .honeycomb-cell:nth-child(5n + 4) {
        margin-left: calc(50% - 275px);
    }

    .honeycomb-cell:nth-child(5n + 5) {
        margin-right: calc(50% - 275px);
    }

    .honeycomb__placeholder:nth-child(5n),
    .honeycomb__placeholder:nth-child(5n + 3) {
        display: block;
    }
}

@media (min-width: 1100px) {
    .honeycomb-cell:nth-child(7n + 5) {
        margin-left: calc(50% - 400px);
    }

    .honeycomb-cell:nth-child(7n + 7),
    .honeycomb-cell:nth-child(7n + 5):nth-last-child(2) {
        margin-right: calc(50% - 400px);
    }

    .honeycomb__placeholder:nth-child(7n + 7),
    .honeycomb__placeholder:nth-child(7n + 9),
    .honeycomb__placeholder:nth-child(7n + 11) {
        display: block;
    }
}
</style>
<slot name="template"></slot>
<div class="body" id="content"></div>
`;
deframe(window, 'co-depends-responsive-honeycomb-js', honeyTempl);