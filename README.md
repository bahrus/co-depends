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


