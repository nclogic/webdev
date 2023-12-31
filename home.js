/* Variable definitions for color schemes */
:root {
  --site-default-main-bg-color: #e9f8ea;
  --site-default-main-text-color: black;
  --site-default-head-foot-bg-color: #bcda9a;
  --site-default-head-foot-text-color: #075a0e;
  --site-default-imortant-text-color : #cc5460;
  --site-default-menu-panel-bg-color: #bcda9af3;
}
/* Styling for the body element */
body { 
  margin: 0; /* This sets the margins for the entire page to 0 so that there are no visible edges around the screen and any margins set by child elements can be referenced from the edge.*/
  max-width: 100%; /* This sets the max width of the main page container (the body) size of the viewport and does not underlay past the edges of the screen.*/
  height: auto; /* This sets the height of the body container to what ever is needed to fit the content Displaying a vertical scroll bar if content projects past the bottom of the window.*/
  display: block;
  padding: 1vh 5vw; /* This applies internal padding (space) around the inside edge of the body container. This could also be done using margin on any child containers placed inside the body, but this is more consistant*/
  background-color: var(--site-default-main-bg-color);
  color: var(--site-default-main-text-color);
  text-align: left;
}
/* Styling for figure elements */
figure {
  display: block;  
  justify-content: center; /* Center figure horizontally within its container */
  width: 88%;
  align-items: center; /* Center figure vertically within its container */
  border: 3px solid rgb(97, 94, 94);
  background-color: rgb(22, 21, 21);
  font-family: Georgia, Times, serif;
  letter-spacing: 1px;
  line-height: 2vw;
  overflow: auto;
  text-wrap: nowrap; /* Prevent text from wrapping */
  padding: 2vh 0vw 3vh 3vw ;
  font-size: 1.3vw;
  margin-bottom: 30px;
}
/* Styling for figure captions */
figcaption {
  font-size: 1.7vw;
  margin-top: -20px;
  margin-left: 40px;
}
/* Remove default bullet points for lists */
ul {
  list-style: none;
}
#outline-style {
text-align: left;
}
#menu-box {
  position: fixed;
  font-family: 'sans-serif';
  font-size: 1.4em;
  line-height: 1.3;
  width: 250px; /* Adjust width as needed if any menu items are too lengthy*/
  height: 0px; /* intital height set to hide the menu and should be changed with js on mouse hover over the menu tab */
  overflow: hidden; /* This hides the content inside the menu while it is collapsed*/
  background-color: var(--site-default-menu-panel-bg-color); /* Background color */
  color: var(--site-default-head-foot-text-color); /* Text color */
  border-bottom-right-radius: 15px ;
  border-bottom-left-radius: 15px;
  margin-top: -1px; /* This distance is needed to hug the menu container to the header. it's actually over lapping a little */
  z-index: -1; /* This is used to hide the overlap by making it set under the header. I this so when menu is collapsed, it will definitly be hidden behind header.*/
}
.topics {
  width: 85vw;
  margin: 15px auto;
}
.logo {
  display: block;
  align-self: center;
  justify-self: center;
  height: 64px;
}
.logo-img {
  align-self: center;
  border-radius: 7px;
}
.header {
  display: grid; /* This enables elements to coexist on the same line as other child elements*/
  grid-template-columns: 1fr 9fr;
  color: var(--site-default-head-foot-text-color);
  background-color: var(--site-default-head-foot-bg-color); /* Background color */
  border-bottom: 7px solid var(--site-default-head-foot-text-color);
  border-radius: 10px;
  margin-bottom: -2px;
}
.header-title h1 {
  display: block; /* Makes the element act as inline-level blocks, allowing them to flow horizontally alongside other elements.*/
  text-decoration: underline;
  font-size: 3.4vw;
  text-align: center;
  margin-left: -64px;
}
.subject {
  display: block;
  text-align: center;
  font-size: 1.5vw;
  text-decoration: underline;
}
.nav {
  display: flex;
  flex-direction: column; /* This puts contents in a column*/
  align-items: center; /* centers the items horizontally because they are in a column, would be vertically if the flex direction was a row*/
}
.underlined {
  text-decoration: underline;
}
.white-text-on-green-bkgrd {
  color: antiquewhite;
  background-color: darkgreen;
  line-height: 1.3;
  padding: 2px 2px;
}
/* This is styling for the menu tab */
.menu-title-tab {
  position: absolute;
  height: auto;
  margin-top: 0px; /* set to hug bottom of the menu */
  width: 74px;
  font-size: 21px; 
  padding: 1px 5px 1px 5px; /* Add padding just to keep text off the inside walls of the container */
  border-bottom: 3px solid var(--site-default-head-foot-text-color);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: var(--site-default-menu-panel-bg-color); 
  color: var(--site-default-head-foot-text-color); 
}
/* These are the colors for the simulated code displays */
.line-numbers {
  color:gray;
}
.topic {
  font-size: 2.6vw;
  text-align: center; /* Center the text horizontally */
  line-height: 1;
  margin-bottom: 0;
}
.doctype {
  color: rgb(238, 17, 17);
}
.punctuation {
  color: white;
}
.text {
  color: whitesmoke;
}
.property{
  color: green;
}
.property-values {
  color: orange;
}
.element-name {
  color: rgb(204, 10, 10);
}
.c-class {
  color: green;
}
.c-text {
  color:rgb(37, 117, 163);
}
.base-selector {
  color: red;
}
.number {
  color:rgb(189, 37, 189);
}
.unit {
  color: rgb(199, 23, 23);
}
.steps {
  font-weight: 600;
}
.code-line-background {
  background-color: black;
}
.text-h1 {
  color: whitesmoke;
  font-size: 1.6em; /* Relative to the surrounding text (1.3vw), this makes it larger */
}
.text-h2 {
  color: whitesmoke;
  font-size: 1.4em; /* Slightly smaller than h1 */
}
.text-h3 {
  color: whitesmoke;
  font-size: 1.2em; /* Smaller than h2 */
}
.text-em {
  color: whitesmoke;
  font-style: italic; /* Makes the text italic */
  font-weight: normal; /* Ensures the text is not bold */
}
.emphasis {
  font-style: italic; /* Makes the text italic */
  font-weight: 600;
}
.article {
  font-size: 1.8vw;
  margin-left: 50px;
  margin-top: 0px;
  margin-bottom: 15px;
}
.free {
  background-color: rgb(116, 233, 105);
}
.pay-up {
  background-color: #cc5460;
}
.summary-text {
  font-style: italic;
  font-weight: 600;
  
}
.summary-text-bkgrd {
  background-color: #9ed8da;
  padding: 10px;
}
.definition {
  font-weight: 600;
  letter-spacing: 1px;
}
.definition-term {
  font-weight: 400;
  
}
@media screen and (max-width: 420px) {
  /* adjustemts for smaller screens */
  figure {
    width: 80%;
  }
  #menu-box {
    position: fixed;
    top: 100px; /* Adjust this value as needed */
    /* Other styling properties */
  }  
  .menu-title-tab {
    position: absolute;
    top: 75px; /* Adjust this value as needed */
    /* Other styling properties */
  }
  .header-title h1 {
    margin-left: -32px;
  }
}
@media screen and (max-width: 290px) {
  /* adjustemts for smaller screens */
  figure {
    width: 60%;
  }  
  #menu-box {
    position: fixed;
    top: 14%; /* Adjust this value as needed */
    /* Other styling properties */
  }
  .header-title h1 {
    margin-left: -5px;
  }
  .menu-title-tab {
    position: absolute;
    top: 18%; /* Adjust this value as needed */
    /* Other styling properties */
  }
}
.tooltip {
  cursor: pointer;
}
#tooltip-container {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  padding: 5px;
  display: none;
  z-index: 1000; /* Adjust this as needed */
}
