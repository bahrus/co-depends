# co-depends

<a href="https://nodei.co/npm/co-depends/"><img src="https://nodei.co/npm/co-depends.png"></a>

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

## Entry 4. [CSS-Only Nested Dropdown Navigation (ARIA)](https://codepen.io/gabriellewee/pen/oWyObX)  

<!--
```
<custom-element-demo>
  <template>
    <div style="height:100%">
        <co-depends-nested-dropdown style="height:100%">
            <template slot="template">
                <input aria-controls='nav' aria-haspopup='true' aria-labelledby='menu' id='link-top' role='button' tabindex='1' type='checkbox'>
                <label class='down' for='link-top' id='menu' role='none' tabindex='-1'>Menu</label>
                <ul aria-labelledby='menu' id='nav' role='menu'>
                  <li role='none'>
                    <input aria-controls='nest' aria-haspopup='true' aria-labelledby='shop' id='link-shop' role='menuitem' tabindex='2' type='checkbox'>
                    <label class='right' for='link-shop' id='shop' role='none' tabindex='-1'>Shop</label>
                    <ul aria-labelledby='shop' id='nest' role='menu'>
                      <li role='none'>
                        <a role='menuitem' tabindex='3'>Tops</a>
                      </li>
                      <li role='none'>
                        <a role='menuitem' tabindex='3'>Bottoms</a>
                      </li>
                      <li role='none'>
                        <a role='menuitem' tabindex='3'>Shoes</a>
                      </li>
                      <li role='none'>
                        <a role='menuitem' tabindex='3'>Accessories</a>
                      </li>
                      <li role='none'>
                        <a role='menuitem' tabindex='3'>Sale</a>
                      </li>
                    </ul>
                  </li>
                  <li role='none'>
                    <a role='menuitem' tabindex='4'>Blog</a>
                  </li>
                  <li role='none'>
                    <a role='menuitem' tabindex='4'>About</a>
                  </li>
                  <li role='none'>
                    <a role='menuitem' tabindex='4'>Contact</a>
                  </li>
                </ul>
            </template>
        </co-depends-nested-dropdown>
        <script type="module" src="https://cdn.jsdelivr.net/npm/co-depends@0.0.18/nested-dropdown/dist/nested-dropdown.iife.js"></script>
    </div>
  </template>
</custom-element-demo>
```
-->

## Entry 5.  [Simple Text Animation](https://codepen.io/yemon/pen/pWoROm)

<!--
```
<custom-element-demo style="height:400px">
  <template>
          <co-depends-simple-text-animation-js>
            <span slot="top">Make</span>
            <span slot="middleTop">wOrK</span>
            <span slot="middleMiddle">lifeStyle</span>
            <span slot="middleBottom">Everything</span>
            <span slot="bottom">AweSoMe!</span>
        </co-depends-simple-text-animation-js>
        <script type="module" src="https://cdn.jsdelivr.net/npm/co-depends@0.0.13/simple-text-animation/simple-text-animation.js"></script>
  </template>
</custom-element-demo>
```
-->

## Entry 6.  [Responsive Honeycomb](https://codepen.io/gzuzkstro/pen/ebdxZQ)

Available in [deframed version](https://www.webcomponents.org/element/deframe), or js version, which is ~3 times slower:

<!--
```
<custom-element-demo>
  <template>
        <script type="module" src="https://unpkg.com/co-depends@0.0.19/responsive-honeycomb/responsive-honeycomb-js.js?module"></script>
        <co-depends-responsive-honeycomb-js>
            <template slot="template">
                <ul class="honeycomb" lang="es">
                    <li class="honeycomb-cell">
                        <img class="honeycomb-cell__image" src="https://source.unsplash.com/random/1">
                        <div class="honeycomb-cell__title">Diseño exclusivo</div>
                    </li>
                    <li class="honeycomb-cell">
                        <img class="honeycomb-cell__image" src="https://source.unsplash.com/random/2">
                        <div class="honeycomb-cell__title">Impermeables</div>
                    </li>
                    <li class="honeycomb-cell">
                        <img class="honeycomb-cell__image" src="https://source.unsplash.com/random/3">
                        <div class="honeycomb-cell__title">Tablero doble cara</div>
                    </li>
                    <li class="honeycomb-cell">
                        <img class="honeycomb-cell__image" src="https://source.unsplash.com/random/4">
                        <div class="honeycomb-cell__title">Maletín de empaque</div>
                    </li>
                    <li class="honeycomb-cell">
                        <img class="honeycomb-cell__image" src="https://source.unsplash.com/random/5">
                        <div class="honeycomb-cell__title">Antireflectivo<small>No vidrio</small></div>
                    </li>
                    <li class="honeycomb-cell">
                        <img class="honeycomb-cell__image" src="https://source.unsplash.com/random/6">
                        <div class="honeycomb-cell__title">6 fichas<small>1 de repuesto</small></div>
                    </li>
                    <li class="honeycomb-cell">
                        <img class="honeycomb-cell__image" src="https://source.unsplash.com/random/7">
                        <div class="honeycomb-cell__title">Tablero magnético</div>
                    </li>
                    <li class="honeycomb-cell honeycomb__placeholder"></li>
                </ul>
            </template>
        </co-depends-responsive-honeycomb-js>
  </template>
</custom-element-demo>
```
-->

## Entry 7.  [Square In a Circle](https://codepen.io/raymondyang/pen/eWGewE)

Available in [deframed version](https://www.webcomponents.org/element/deframe), or the slower js version:

<!--
```
<custom-element-demo>
  <template>
    <co-depends-square-circle-js></co-depends-square-circle-js>
    <script type="module" src="https://unpkg.com/co-depends@0.0.21/square-circle/square-circle.js"></script>
 </template>
</custom-element-demo>
```
-->

## Entry 8.  [Periodic Table](https://codepen.io/mikegolus/pen/OwrPgB)

Available in [deframed version](https://www.webcomponents.org/element/deframe), or the slower js version:

<!--
```
<custom-element-demo>
  <template>
    <co-depends-periodic-table-js></co-depends-periodic-table-js>
    <script type="module" src="https://unpkg.com/co-depends@0.0.22/periodic-table/periodic-table.js?module"></script>
 </template>
</custom-element-demo>
```
-->

## Entry 10.  [CSS Marquee Logo Wall](https://codepen.io/hexagoncircle/pen/wvmjomb)