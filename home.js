<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" content="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Beginner HTML/CSS and JavaScript Reference Site">
    <title>Beginner Web Development Reference Site</title>
    <link rel="icon" type="image/png" sizes="32x32" href="logo.png">
    <link rel="stylesheet" href="green-color-style.css" id="color-style-sheet"> <!-- This is the default color scheme and handles most color styles for the page. -->
    <link rel="stylesheet" href="common-style.css" id="common-style"> <!-- This is for styles common to all pages except color.  -->
    <link rel="stylesheet" href="home-style.css" id="specific-style"> <!-- This contains styling specific to this page. -->
    <script src="home.js"></script> <!-- JavaScript file --><!--Currently all files will be in same directory until I figure out how to create additional ones here -->
  </head>
  <body class="body">
    <header class="header"> 
      <div class="logo"><img id="header-logo" class="logo-img" src="logo.png" alt="logo image"></div>
      <div class="header-title"><h1>Beginner HTML/CSS & JavaScript Reference Site</h1></div>
    </header>
    <nav class=" nav"> <!-- I decided to make the navigation menu as a slideout menu with a tab to hover over to activate it. -->
      <div class="menu-div" id="side-menu">
        <ul class="nav-menu-list">
          <li class="nav-menu-list-item">
            <a class="site-page-links" id="home-page-link" href="index.html">Home</a>
          </li>
          <li class="nav-menu-list-item">
            <a class="site-page-links" id="outline-page-link" href="outline.html">Site Outline</a>
          </li>
          <li class="nav-menu-list-item">
            <a class="site-page-links" id="image-ref-page-link" href="imageref.html">Image Reference</a>
          </li>
          <li>
            <a href="#">last line</a>
          </li>
        </ul>
      </div>
      <div class="rotated-text-container" id="menu-tab"> <!-- This is the menu tab -->
        <span>&nbsp;MENU&nbsp;</span> <!-- The text on the tab -->
      </div>                  
    </nav>
    <main class="main">
      <div class="topic"><h2>The Basic Html Layout</h2></div> <!-- A section topic -->
      <figcaption>home.html</figcaption>
      <div class="code-block">
        <figure class="html-code-block">
          <span class="line-numbers">&nbsp;&nbsp;1</span>&nbsp;&nbsp;<span class="punctuation">&lt;</span><span class="punctuation">&excl;</span><span class="doctype">DOCTYPE</span>&nbsp;<span class="property-values">html</span><span class="punctuation">&gt;</span><br>
          <span class="line-numbers">&nbsp;&nbsp;2</span>&nbsp;&nbsp;<span class="punctuation">&lt;</span><span class="element-name">html</span>&nbsp<span class="property">lang</span><span class="punctuation">&#61;&quot;</span><span class="property-values">en</span><span class="punctuation">&quot;&colon;</span><br>
          <span class="line-numbers">&nbsp;&nbsp;3</span>&nbsp;&nbsp;<span class="punctuation">&lt;</span><span class="element-name">head</span><span class="punctuation">&gt;</span><br>
          <span class="line-numbers">&nbsp;&nbsp;4</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="punctuation">&lt;</span><span class="element-name">meta</span>&nbsp;<span class="property">charset</span><span class="punctuation">&#61;</span><span class="punctuation">&quot;</span><span class="property-values">UTF-8</span><span class="punctuation">&quot;</span><span class="punctuation">&gt;</span><br>
          <span class="line-numbers">&nbsp;&nbsp;5</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="punctuation">&lt;</span><span class="element-name">meta</span>&nbsp;<span class="property">name</span><span class="punctuation">&#61;</span><span class="punctuation">&quot;</span><span class="property-values">viewport</span><span class="punctuation">&quot;</span>&nbsp;<span class="property">content</span><span class="punctuation">&#61;&quot;</span><span class="property-values">width=device-width</span><span class="punctuation">&comma;&nbsp;</span><span class="property-values">initial-scale=1.0</span><span class="punctuation">&quot;&gt;</span><br>
          <span class="line-numbers">&nbsp;&nbsp;6</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="punctuation">&lt;</span><span class="element-name">meta</span>&nbsp;<span class="property">http-equiv</span><span class="punctuation">&#61;</span><span class="punctuation">&quot;</span><span class="property-values">X-UA-Compatible</span><span class="punctuation">&quot;</span>&nbsp;<span class="property">content</span><span class="punctuation">&#61;&quot;</span><span class="property-values">ie=edge</span><span class="punctuation">&quot;&gt;</span><br>
          <span class="line-numbers">&nbsp;&nbsp;7</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="punctuation">&lt;</span><span class="element-name">link</span>&nbsp;<span class="property">rel</span><span class="punctuation">&#61;</span><span class="punctuation">&quot;</span><span class="property-values">stylesheet</span><span class="punctuation">&quot;</span>&nbsp;<span class="property">href</span><span class="punctuation">&#61;&quot;</span><span class="property-values">/css/styles.css</span><span class="punctuation">&quot;&gt;</span><br>
          <span class="line-numbers">&nbsp;&nbsp;8</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="punctuation">&lt;</span><span class="element-name">script</span>&nbsp;<span class="property">src</span><span class="punctuation">&#61;</span><span class="punctuation">&quot;</span><span class="property-values">/js/home.js</span><span class="punctuation">&quot;</span><span class="punctuation">&gt;</span><br>
          <span class="line-numbers">&nbsp;&nbsp;9</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="punctuation">&lt;</span><span class="element-name">title</span><span class="punctuation">&gt;</span><span class="text">Document</span><span class="punctuation">&gt;</span><span class="punctuation">&lt;&sol;</span><span class="element-name">title</span><span class="punctuation">&gt;</span><br>
          <span class="line-numbers">10&nbsp;&nbsp;&nbsp;</span><span class="punctuation">&lt;&sol;</span><span class="element-name">head</span><span class="punctuation">&gt;</span></span><br>
          <span class="line-numbers">11&nbsp;&nbsp;&nbsp;</span><span class="punctuation">&lt;</span><span class="element-name">body</span><span class="punctuation">&gt;</span></span><br>
          <span class="line-numbers">12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="punctuation">&lt;</span><span class="element-name">h1</span>&nbsp;<span class="property">Class</span><span class="punctuation">&#61;&quot;</span><span class="property-values">.header</span><span class="punctuation">&quot;</span><span class="punctuation">&gt;</span></span><span class="text-h1">This is a first level heading in HTML.</span><span class="punctuation">&lt;&sol;</span><span class="element-name">h1</span><span class="punctuation">&gt;</span></span><br>
          <span class="line-numbers">13&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="punctuation">&lt;</span><span class="element-name">h2</span><span class="punctuation">&gt;</span></span><span class="text-h2">This is a second level heading in HTML.</span><span class="punctuation">&lt;&sol;</span><span class="element-name">h2</span><span class="punctuation">&gt;</span></span><br>
          <span class="line-numbers">14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="punctuation">&lt;</span><span class="element-name">h3</span><span class="punctuation">&gt;</span></span><span class="text-h3">This is a third level heading in HTML.</span><span class="punctuation">&lt;&sol;</span><span class="element-name">h3</span><span class="punctuation">&gt;</span></span><br>
          <span class="line-numbers">15&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="punctuation">&lt;</span><span class="element-name">p</span><span class="punctuation">&gt;</span></span><span class="text">This is a </span><span class="punctuation">&lt;</span><span class="element-name">em</span><span class="punctuation">&gt;</span><span class="text-em">paragragh</span><span class="punctuation">&lt;&sol;</span><span class="element-name">em</span><span class="punctuation">&gt;</span><span class="text"> with an empahisis on the word "paragraph".</span><span class="punctuation">&lt;&sol;</span><span class="element-name">p</span><span class="punctuation">&gt;</span><br>
          <span class="line-numbers">16&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="punctuation">&lt;</span><span class="element-name">p</span><span class="punctuation">&gt;</span></span><span class="text">The main essence of this Website is to:</span><span class=" tag"><span class=" tag"><span class="punctuation">&lt;/</span>p</span><span class="punctuation">&gt;</span></span><br>
          <span class="line-numbers">17&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="punctuation">&lt;</span><span class="element-name">ul</span><span class="punctuation">&gt;</span></span><br>
          <span class="line-numbers">18&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="punctuation">&lt;</span><span class="element-name">li</span><span class="punctuation">&gt;</span><span class="text">Show you how to format a web document with HTML</span><span class="punctuation">&lt;&sol;</span><span class="element-name">li</span><span class="punctuation">&gt;</span></span><br>
          <span class="line-numbers">19&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="punctuation">&lt;</span><span class="element-name">li</span><span class="punctuation">&gt;</span><span class="text">Show you how to design a web page with CSS</span><span class="punctuation">&lt;&sol;</span><span class="element-name">li</span><span class="punctuation">&gt;</span></span><br>
          <span class="line-numbers">20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="punctuation">&lt;</span><span class="element-name">li</span><span class="punctuation">&gt;</span><span class="text">Show you how to program a web document with JavaScript</span><span class="punctuation">&lt;&sol;</span><span class="element-name">li</span><span class="punctuation">&gt;</span></span><br>
          <span class="line-numbers">21&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="punctuation">&lt;/</span><span class="element-name">ul</span><span class="punctuation">&gt;</span></span><br>
          <span class="line-numbers">22</span><br>
          <span class="line-numbers">23&nbsp;&nbsp;&nbsp;</span><span class="punctuation">&lt;&sol;</span><span class="element-name">body</span><span class="punctuation">&gt;</span></span><br>
          <span class="line-numbers">24&nbsp;&nbsp;&nbsp;</span><span class="punctuation">&lt;&sol;</span><span class="element-name">html</span><span class="punctuation">&gt;</span></span><br>            
        </figure>
      </div>
      <div class="topic"><h2>The basic CSS stylesheet</h2></div>
      <figcaption>style.css</figcaption>
      <div class="codeBlock">
        <figure class="css-code-block">
          <span class="line-numbers">&nbsp;1&nbsp;&nbsp;&nbsp;</span><span class="base-selector">body </span><span class=" punctuation">&lcub;</span><br>
          <span class="line-numbers">&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c-text">display</span><span class=" punctuation">&colon;</span><span class="c-text"> block</span><span class=" punctuation">&#59;</span><br>
          <span class="line-numbers">&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-text">border</span><span class=" punctuation">&colon;</span><span class="c-text"><span class="number">3</span><span class="unit">px</span> solid grey</span></span><span class=" punctuation">&#59;</span><br>
          <span class="line-numbers">&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-text">background-color</span></span><span class=" punctuation">&colon;</span><span class="c-text"> black</span><span class=" punctuation">&#59;</span><br>
          <span class="line-numbers">&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c-text">font-family</span><span class=" punctuation">&colon;</span><span class="c-text"> Georgia</span><span class=" punctuation">&#59;</span><br>
          <span class="line-numbers">&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c-text">font-size</span><span class=" punctuation">&colon;</span><span class="c-text"> <span class="number">1.4</span><span class="unit">vw</span></span><span class=" punctuation">&#59;</span><br>
          <span class="line-numbers">&nbsp;7&nbsp;&nbsp;&nbsp;</span><span class=" punctuation">&rcub;</span><br>
          <span class="line-numbers">&nbsp;8</span><br>
          <span class="line-numbers">&nbsp;9&nbsp;&nbsp;&nbsp;</span><span class="c-class">.header </span><span class=" punctuation">&lcub;</span><br>
          <span class="line-numbers">10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c-text">font-size</span><span class=" punctuation">&colon;</span><span class="c-text"> <span class="number">2.6</span><span class="unit">vw</span></span><span class=" punctuation">&#59;</span><br>
          <span class="line-numbers">11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c-text">text-align</span><span class=" punctuation">&colon;</span><span class="c-text"> center</span><span class=" punctuation">&#59;</span><br>
          <span class="line-numbers">12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c-text">line-height</span></span><span class=" punctuation">&colon;</span><span class="c-text"> <span class="number">1</span></span><span class=" punctuation">&#59;</span><br>
          <span class="line-numbers">13&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c-text">font-family</span><span class=" punctuation">&colon;</span><span class="c-text"> Georgia</span><span class=" punctuation">&#59;</span><br>
          <span class="line-numbers">14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c-text">margin-bottom</span><span class=" punctuation">&colon;</span><span class="c-text"> <span class="number">40</span><span class="unit">px</span></span><span class=" punctuation">&#59;</span><br>
          <span class="line-numbers">15&nbsp;&nbsp;&nbsp;</span><span class="punctuation">&rcub;</span>
        </figure>
      </div>
      <div class="topic"><h3>A good website follows these guidlines:</h3></div>    
      <article class="article">
          - The page has a <span class="emphasis">DOCTYPE</span> declaration, a <span class="emphasis">lang</span> attribute, and a <span class="emphasis">head</span> and <span class="emphasis">body</span> section.<br>
          - The page uses <span class="emphasis">meta</span> tags to specify the character encoding, the viewport, and the compatibility mode.<br>
          - The page links to an external <span class="emphasis">stylesheet</span> and a <span class="emphasis">script</span> file using the <span class="emphasis">link</span> and <span class="emphasis">script</span> tags.<br>
          - The page uses <span class="emphasis">headings</span>, <span class="emphasis">paragraphs</span>, <span class="emphasis">emphasis</span>, <span class="emphasis">lists</span>, and <span class="emphasis">links</span> to format the content.<br>
          - The page uses <span class="emphasis">classes</span> and <span class="emphasis">selectors</span> to apply styles to the elements.<br>
          - The page follows the <span class="emphasis">indentation</span> and <span class="emphasis">spacing</span> conventions for HTML, CSS and JavaScript.<br>
      </article>
    </main>
  </body>
</html>
