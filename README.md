# co-depends

<a href="https://nodei.co/npm/co-depends/"><img src="https://nodei.co/npm/co-depends.png"></a>

co-depends is a suite of web components based on code-pen entries.

## Entry 1.  [Text Scramble](https://codepen.io/soulwire/pen/mErPAK)
[WIP]

## Entry 2.  [Pure CSS Minesweeper](https://codepen.io/bali_balo/pen/BLJONk)

## Entry 3.  [Parallax Flipping Cards](https://codepen.io/tyrellrummage/pen/wqGgLO)

## Entry 4. [CSS-Only Nested Dropdown Navigation (ARIA)](https://codepen.io/gabriellewee/pen/oWyObX)  
[WIP]
## Entry 5.  [Simple Text Animation](https://codepen.io/yemon/pen/pWoROm)
[WIP]

## Entry 6.  [Responsive Honeycomb](https://codepen.io/gzuzkstro/pen/ebdxZQ)

## Entry 7.  [Square In a Circle](https://codepen.io/raymondyang/pen/eWGewE)
[WIP]

## Entry 8.  [Animated Star Rating](https://codepen.io/jkantner/pen/BarvVNa)

## Entry 9.  [Sidebar Interaction](https://codepen.io/aybukeceylan/pen/wvpBmrq)

"Cleaner" than React.

## Entry 10.  [CSS Marquee Logo Wall](https://codepen.io/hexagoncircle/pen/wvmjomb)

[Animated BottomBar Experiment](https://codepen.io/chrisbautista/pen/NWXjqLN)

Showcase elegance of css binding with trans-render

## Entry 11.  [App Menu With Lock Screen](https://codepen.io/Hyperplexed/pen/vYpXNJd)

What is really fascinating about this nice UI is how heavily the author uses so many of the bells and whistles of the React framework to accomplish it.  Even the tiniest little section, that doesn't repeat in any way, is defined as a separate component, requiring extra work -- props being passed in to support all these string-theory sized components.  

I think there are two plausible reasons the author has for doing this (perhaps both apply in equal measure):

1.  Perhaps the author finds it easier to reason about.  It is a similar argument to saying [no method should be more than twenty lines long](https://marekhudyma.com/code-style/2021/02/01/uncle-bob-about-functions.html).  Twenty lines I can get behind.  But many of these components consist of a single DOM Element!  Personally I find it somewhat difficult with all the bouncing around and mental mapping of objects that this entails, but that is very much a matter of personal taste.  The React community should be grateful to Microsoft for all the work they've done to make this bouncing around easier.  Personally, I'm somewhat miffed that Microsoft has not put the same effort into encouraging web design that would help save the planet.  Nevertheless, we make use of features Microsoft *has* bothered to provide with HTML in VSCode, to make this bouncing around as easy as with JavaScript.  (Of course, if the w3c would endorse some syntax, that would go a long way in being able to hold Microsoft's feet to the fire).  I think if Microsoft gave developers better control over how nested HTML can be expanded / collapsed, it would reduce the benefits of this hyper-componentization.

2.  The author is doing this just to exercise (and/or teach / demonstrate) their React skills.  Practice makes perfect.  This is one of the great services CodePen and other such web sites provide!

I want to be clear that I'm grateful to be able to peer into the thinking behind this example, and use it as a springboard for testing out equivalent ways of doing this with web components and decorator based components, that aren't really web components, but act that way.  Meaning I have nothing but the deep most respect for the developer and wish them well, and am thankful for the demo.

I'm working on two versions -- one that breaks down the UI in exactly the same way as the original, with attention being placed on achieving similar, or perhaps even better developer experience (especially with additional help from the IDE).  From a performance point of view, this version would definitely benefit from some build time optimization, where the separate components are inlined.

The second demo is more performant without the build step, and I'm using to test out exactly how that build time optimization would work.  And I think it is also more in tune with how my reasoning works (exercise more of the 20 line limit).

[WIP]

[Cursor Glog](https://codepen.io/davidkpiano/pen/gOoNZNe)
    
    (specify setting css property via transform, somehow?)

[TODO]

[Lotsa Notifications](https://codepen.io/jkantner/pen/XWzePgp)

Seems usesful, but lotsa imperative code to convert, not seeing anything significant code-wise.

[TODO]

[Light/Dark Toggle](https://codepen.io/jkantner/pen/eYygqJm)

Yet another example where we could use be-bound.

[Responsive NFT Dashboard with Tailwind](https://codepen.io/dilums/pen/YzrvrBy)

See how to use tailwind, dynamically generate shadowDOM from raw HTML

[TODO]

[Radial Nav Menu](https://codepen.io/Hyperplexed/pen/GRyeGeZ)

See how to create nested components quickly

Might be a good example to explore be-let, be-scoping, etc more.

