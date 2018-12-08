# co-depends

co-depends is a suite of web components based on code-pen entries.

## Entry 1.  [Text Scramble](https://codepen.io/soulwire/pen/mErPAK)

<!--
```
<custom-element-demo>
  <template>
    <div class="body">
        <div class="container">
            <co-depends-text-scramble id="cdts" class="text"></co-depends-text-scramble>
        </div>

        <script>
            const phrases = [
                'Neo,',
                'sooner or later',
                'you\'re going to realize',
                'just as I did',
                'that there\'s a difference',
                'between knowing the path',
                'and walking the path'
            ];

            let counter = 0;
            cdts.addEventListener('text-setting-complete', e => {
                setTimeout(() => {
                    next();
                }, 800)
            });
            const next = () => {
                cdts.text = phrases[counter];
                counter = (counter + 1) % phrases.length;
            }

            next();
        </script>
        <style>
            @import 'https://fonts.googleapis.com/css?family=Roboto+Mono:100';
                html,  
                div.body {
                font-family: 'Roboto Mono', monospace;
                background: #212121;
                height: 100%;
                }
                .container {
                    height: 100%;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                }
                .text {
                    font-weight: 100;
                    font-size: 28px;
                    color: #fafafa;
                }
        .dud {
          color: #757575;
        }
                </style>
        <script type="module" src="https://cdn.jsdelivr.net/npm/co-depends@0.0.4/text-scramble/dist/text-scramble.iife.min.js?module"></script>
    </div>
    </template>
</custom-element-demo>
```
-->

## Entry 2.  [Pure CSS Minesweeper](https://codepen.io/bali_balo/pen/BLJONk)

Being that this is css-only, it seems quite ridiculous to have to encode it in JS to make it a web component.  So a [deframed](https://www.webcomponents.org/element/deframe) version can be seen in action [here](https://bahrus.github.io/co-depends/css-minesweeper/demo/dev.html).

You reference it via an iframe:

```html
<body>
    ...
    <iframe src="../css-minesweeper.html"></iframe>
    <co-depends-css-minesweeper></co-depends-css-minesweeper>
</body>
```

Or you can turn the beautiful css-only implementation into a js-only implementation as shown below:

<!--
```
<custom-element-demo>
  <template>
    <script type="module" src="https://cdn.jsdelivr.net/npm/co-depends@0.0.6/css-minesweeper/css-minesweeper.js"></script>
    <co-depends-css-minesweeper-js></co-depends-css-minesweeper-js>
   </template>
</custom-element-demo>
```
-->

It is quite interesting (to me) to compare the performance using Chrome Tools, with various throttling settings.  I don't know how much of these differences are due to the way the throttling simulation works, vs. what one would see in the field.

<table>
<thead>
<tr><th>Test Case</th><th>Network Throttling</th><th>CPU throttling</th><th>First Meaningful Paint (sec)</th><th>DOM Loaded(sec)</th></tr>
<tr><td><a href="https://bahrus.github.io/co-depends/css-minesweeper/demo/dev-js.html" target="_blank">Pure JS</a></td><td>Slow 3G</td><td>6x</td><td>6</td><td>9</td></tr>
<tr><td><a href="https://bahrus.github.io/co-depends/css-minesweeper/demo/dev-js.html" target="_blank">Pure JS</a></td><td>Slow 3G</td><td>4x</td><td>5</td><td>7</td></tr>
<tr><td><a href="https://bahrus.github.io/co-depends/css-minesweeper/demo/dev-js.html" target="_blank">Pure JS</a></td><td>Slow 3G</td><td>1x</td><td>4.5</td><td>5</td></tr>
<tr><td><a href="https://bahrus.github.io/co-depends/css-minesweeper/demo/dev.html" target="_blank">Pure Deframed HTML</a></td><td>Slow 3G</td><td>6x</td><td>8</td><td>8</td></tr>
<tr><td><a href="https://bahrus.github.io/co-depends/css-minesweeper/demo/dev.html" target="_blank">Pure Deframed HTML</a></td><td>Slow 3G</td><td>4x</td><td>3</td><td>5</td></tr>
<tr><td><a href="https://bahrus.github.io/co-depends/css-minesweeper/demo/dev.html" target="_blank">Pure Deframed HTML</a></td><td>Slow 3G</td><td>1x</td><td>2</td><td>2.5</td></tr>
</thead>
</table>

It appears that the pure HTML (deframed version) outperforms when network is highly throttled, but the pure JS has an edge when CPU is highly throttled.

## Entry 3.  [Parallax Flipping Cards](https://codepen.io/tyrellrummage/pen/wqGgLO)


<!--
```
<custom-element-demo>
  <template>
    <div>
        <div class="cols">
            <co-depends-parallax-flip-card id="first">
                <div slot="front">
                    <p>Diligord</p>
                    <span>Lorem ipsum</span>
                </div>
                <div slot="back">
                    <p>Alias cum repellat velit quae suscipit
                        c.</p>
                </div>
            </co-depends-parallax-flip-card>
            <co-depends-parallax-flip-card id="second">
                <div slot="front">
                    <p>Strizzes</p>
                    <span>Lorem ipsum</span>
                </div>
                <div slot="back">
                    <p>Alias cum repellat velit quae suscipit
                        c.</p>
                </div>
            </co-depends-parallax-flip-card>
            <co-depends-parallax-flip-card id="third">
                <div slot="front">
                    <p>Rocogged</p>
                    <span>Lorem ipsum</span>
                </div>
                <div slot="back">
                    <p>Alias cum repellat velit quae suscipit
                        c.</p>
                </div>
            </co-depends-parallax-flip-card>
            <co-depends-parallax-flip-card id="fourth">
                <div slot="front">
                    <p>Clossyo</p>
                    <span>Lorem ipsum</span>
                </div>
                <div slot="back">
                    <p>Alias cum repellat velit quae suscipit
                        c.</p>
                </div>
            </co-depends-parallax-flip-card>
        </div>
        <script type="module" src="../parallax-flip-card.js"></script>
        <style>
            #first {
                --front-background-image: url(https://unsplash.it/500/500/);
            }

            #second {
                --front-background-image: url(https://unsplash.it/511/511/);
            }

            #third {
                --front-background-image: url(https://unsplash.it/502/502/);
            }

            #fourth {
                --front-background-image: url(https://unsplash.it/503/503/);
            }

            .cols {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
            }

            co-depends-parallax-flip-card {
                width: calc(25% - 2rem);
                margin: 1rem;
                cursor: pointer;
            }
        </style>
        <script type="module" src="https://cdn.jsdelivr.net/npm/co-depends@0.0.7/parallax-flip-card/parallax-flip-card.js"></script>
    </div>
  </template>
</custom-element-demo>
```
-->

## Entry 4.  [CSS-Only Nested Dropdown Navigation (ARIA)](https://codepen.io/gabriellewee/pen/oWyObX)  

<!--
```
<custom-element-demo>
  <template>
    <div style="height:100%">
        <co-depends-nested-dropdown style="height:100%">
            <ul id='nav' data-role="menu" data-control-id="link-top" data-label-id="menu" data-label-text="Menu">
                <li>
                    <ul id="nest" data-role="menu" data-control-id="link-shop" data-label-id="shop" data-label-text="Shop">
                        <li><a role='menuitem' tabindex='3'>Tops </a></li>
                        <li><a role='menuitem' tabindex='3'>Bottoms </a></li>
                        <li><a role='menuitem' tabindex='3'>Shoes </a></li>
                        <li><a role='menuitem' tabindex='3'>Accessories </a></li>
                    </ul>
                </li>
                <li>
                    <a role='menuitem' tabindex='4'>Blog</a>
                </li>
                <li>
                    <a role='menuitem' tabindex='4'>About</a>
                </li>
                <li>
                    <a role='menuitem' tabindex='4'>Contact</a>
                </li>
            </ul>
            <h2o-lilies slot="generator" disabled></h2o-lilies>


        </co-depends-nested-dropdown>
        <script type="module" src="https://cdn.jsdelivr.net/npm/co-depends@0.0.12/nested-dropdown/dist/nested-dropdown.iife.js"></script>
        <script type="module" src="https://cdn.jsdelivr.net/npm/h2o-lilies@0.0.6/dist/h2o-lilies.iife.js"></script>
    </div>
  </template>
</custom-element-demo>
```
-->

One of the principles / goals guiding these web components is to honor the original example, by minimizing the amount of change required to the original implementation, in the process of converting the demo into a functioning web component.  This particular example raises some sticky issues, issues I've encountered before, and is worthwhile exploring how best to handle.

It's possible that if one were to create a nested dropdown web component from the ground up, one would first define a standalone menu item web component, and then another menu container web component that accepts those standalone menu items as light children.

However, I'm not convinced that taking this example as is, it would have been very easy to do that.  In order to eliminate all JavaScript in codepen, the author made clever use of the \<input type="checkbox" \>.  The point is the author created a coherent ensemble of html / css, which might not work proparly if the ensemble is sliced and diced into separate web components.

So that raises the interesting question of how to support what has to be a non-static list of light children, which get fully adopted into actual children inside the Shadow DOM of the web component.  

The implementation of that is still in flux a bit.  More to follow.