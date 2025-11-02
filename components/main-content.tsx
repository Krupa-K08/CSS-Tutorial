"use client"

import CodeExample from "./code-example"
import Quiz from "./quiz"
import ProjectView from "./project-view"

interface MainContentProps {
  selectedItem: string
}

const contentMap: Record<
  string,
  {
    title: string
    description: string
    content: string
    example?: string
    codeExample?: string
  }
> = {
  "what-is-css": {
    title: "What is CSS?",
    description: "Learn the basics of CSS and how it styles web pages",
    content:
      "CSS (Cascading Style Sheets) is a language used to describe the presentation of a document written in HTML or XML. It controls the visual styling of web pages including colors, fonts, spacing, and layout.",
    codeExample: `/* CSS is written in rules */
selector {
  property: value;
}

/* Example: Style a paragraph */
p {
  color: blue;
  font-size: 16px;
}`,
  },
  "why-css": {
    title: "Why do we need CSS?",
    description: "Understand the importance of CSS in web development",
    content:
      "CSS separates content from presentation, making code more maintainable and easier to update. Without CSS, styling would be embedded in HTML, creating redundant and hard-to-maintain code. CSS also enables responsive design, allowing websites to adapt to different screen sizes.",
    codeExample: `/* Without CSS: HTML would be cluttered */
<!-- Bad way -->
<p style="color: blue; font-size: 16px;">Styled text</p>

/* With CSS: Clean separation */
<!-- HTML -->
<p class="intro">Styled text</p>

/* CSS */
.intro {
  color: blue;
  font-size: 16px;
}`,
  },
  "how-to-add-css": {
    title: "How to add CSS?",
    description: "Discover the three methods of adding CSS to your HTML",
    content:
      "There are three ways to add CSS to HTML: Inline styles (directly in HTML elements), Internal stylesheets (in the <style> tag), and External stylesheets (in separate .css files). External stylesheets are the most recommended approach.",
    codeExample: `/* Method 1: Inline Styles */
<p style="color: blue;">Text</p>

/* Method 2: Internal Stylesheet */
<style>
  p { color: blue; }
</style>

/* Method 3: External Stylesheet (BEST) */
<link rel="stylesheet" href="styles.css">`,
  },
  selectors: {
    title: "Selectors",
    description: "Learn how to target HTML elements with CSS selectors",
    content:
      "CSS selectors are patterns used to select the elements you want to style. There are many types including element selectors, class selectors, ID selectors, attribute selectors, and pseudo-selectors.",
    codeExample: `/* Element selector */
p { color: blue; }

/* Class selector */
.highlight { background: yellow; }

/* ID selector */
#header { font-size: 24px; }

/* Attribute selector */
input[type="text"] { border: 1px solid gray; }

/* Pseudo-selector */
a:hover { color: red; }`,
  },
  colors: {
    title: "Colors",
    description: "Master color styling in CSS",
    content:
      "CSS provides multiple ways to define colors: named colors (red, blue), hex values (#FF0000), RGB (rgb(255, 0, 0)), and HSL (hsl(0, 100%, 50%)). The color property sets text color, while background-color sets the background.",
    codeExample: `/* Different color formats */
h1 { color: red; } /* Named color */
h2 { color: #FF0000; } /* Hex */
p { color: rgb(255, 0, 0); } /* RGB */
span { color: hsl(0, 100%, 50%); } /* HSL */

/* Background color */
body { background-color: #f0f0f0; }

/* Opacity */
div { background-color: rgba(255, 0, 0, 0.5); }`,
  },
  borders: {
    title: "Borders",
    description: "Learn to create and style borders",
    content:
      "Borders are used to add outlines around elements. You can customize the border width, style, and color. Border styles include solid, dashed, dotted, and groove. You can set borders on all sides or individual sides.",
    codeExample: `/* Basic border */
div { border: 2px solid black; }

/* Individual properties */
div {
  border-width: 2px;
  border-style: solid;
  border-color: blue;
}

/* Individual sides */
div {
  border-top: 1px solid red;
  border-right: 2px dashed blue;
  border-bottom: 3px dotted green;
  border-left: 4px groove orange;
}

/* Border radius */
div { border-radius: 10px; }`,
  },
  font: {
    title: "Font",
    description: "Control typography with CSS font properties",
    content:
      "Font properties control the appearance of text including font-family (typeface), font-size (height), font-weight (boldness), font-style (italic/normal), and line-height (spacing between lines).",
    codeExample: `/* Font family */
body { font-family: Arial, sans-serif; }

/* Font size */
h1 { font-size: 32px; }
p { font-size: 16px; }

/* Font weight */
strong { font-weight: bold; /* or 700 */ }
light { font-weight: 300; }

/* Font style */
em { font-style: italic; }

/* Line height */
p { line-height: 1.6; }

/* Shorthand */
body { font: 16px/1.6 Arial, sans-serif; }`,
  },
  "margins-paddings": {
    title: "Margins and Paddings",
    description: "Understand spacing in CSS",
    content:
      "Margin creates space outside an element (external spacing), while padding creates space inside an element (internal spacing). Both can be set individually for each side (top, right, bottom, left) or using shorthand notation.",
    codeExample: `/* Padding: space inside */
div {
  padding: 20px; /* all sides */
  padding: 10px 20px; /* top/bottom, left/right */
  padding: 10px 20px 30px 40px; /* top, right, bottom, left */
}

/* Margin: space outside */
div {
  margin: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
}

/* Visual difference */
.box1 { padding: 20px; } /* space inside */
.box2 { margin: 20px; } /* space outside */`,
  },
  "css-inspection": {
    title: "CSS Inspection",
    description: "Debug CSS using browser developer tools",
    content:
      "Browser developer tools (F12 or Ctrl+Shift+I) allow you to inspect elements, view applied styles, check the CSS cascade, and debug layout issues. You can edit styles in real-time to test changes before updating your code.",
    codeExample: `/* How to use Developer Tools:
1. Open DevTools (F12 or Ctrl+Shift+I)
2. Click the Inspect Element tool (top-left corner)
3. Click on any element on the page
4. View the CSS rules applied to that element
5. Edit styles in real-time
6. View the computed styles
7. Check the box model (margin, padding, border)
*/

/* Tips for debugging:
- Look for overridden styles (crossed out)
- Check specificity issues
- Use the Computed tab to see final applied styles
- Use the Console to check element properties
*/`,
  },
  specificity: {
    title: "Specificity and Inheritance",
    description: "Learn about CSS specificity and inheritance rules",
    content:
      "CSS specificity determines which styles apply when multiple rules target the same element. Specificity is calculated: inline (1000) > ID (100) > Class (10) > Element (1). Inheritance allows child elements to inherit certain styles from parent elements.",
    codeExample: `/* Specificity example */
p { color: blue; } /* 1 point */
.intro { color: red; } /* 10 points */
#main { color: green; } /* 100 points */
<p style="color: yellow;">Text</p> /* 1000 points - wins! */

/* Inheritance */
body { color: blue; } /* All text inherits blue */
p { color: red; } /* Overrides inherited blue */

/* !important (not recommended) */
p { color: blue !important; } /* Highest specificity */

/* Avoiding specificity wars */
.button { color: white; }
button.active { color: yellow; } /* More specific */`,
  },
  "intermediate-selectors": {
    title: "Advanced Selectors",
    description: "Advanced selector techniques",
    content:
      "Advanced selectors allow precise targeting of elements. Descendant selectors target elements inside others, child selectors target direct children, adjacent sibling selectors target elements right after siblings, and more complex patterns.",
    codeExample: `/* Descendant selector - any p inside div */
div p { color: blue; }

/* Child selector - only direct p children */
div > p { color: blue; }

/* Adjacent sibling - p right after h1 */
h1 + p { font-weight: bold; }

/* General sibling - any p that follows h1 */
h1 ~ p { margin-top: 20px; }

/* Multiple selectors */
h1, h2, h3 { color: blue; }

/* Attribute selectors */
input[type="text"] { border: 1px solid gray; }
a[href^="https"] { color: green; } /* starts with */
a[href$=".pdf"] { color: red; } /* ends with */`,
  },
  position: {
    title: "Position",
    description: "Master element positioning in CSS",
    content:
      "The CSS position property controls how elements are positioned. Values include static (default), relative (offset from normal flow), absolute (removed from flow, positioned relative to parent), fixed (removed from flow, fixed to viewport), and sticky (switches between relative and fixed).",
    codeExample: `/* Static (default) */
div { position: static; }

/* Relative - offset from normal position */
.box { 
  position: relative;
  top: 10px;
  left: 20px;
}

/* Absolute - removed from flow */
.popup {
  position: absolute;
  top: 50px;
  right: 20px;
}

/* Fixed - stays in place while scrolling */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}

/* Sticky - hybrid of relative and fixed */
.header {
  position: sticky;
  top: 0;
}

/* z-index - stacking order */
.behind { z-index: 1; }
.in-front { z-index: 10; }`,
  },
  display: {
    title: "Display",
    description: "Control layout with the display property",
    content:
      "The display property is fundamental to layout. Block elements take full width, inline elements only take needed width, inline-block combines both, flex enables flexible layouts, and grid enables 2D layouts.",
    codeExample: `/* Block - takes full width */
div { display: block; }

/* Inline - only takes needed width */
span { display: inline; }

/* Inline-block - flows inline but can have width/height */
img { display: inline-block; }

/* Flex - flexible layout */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Grid - 2D layout */
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

/* None - hide element */
.hidden { display: none; }`,
  },
  float: {
    title: "Float",
    description: "Use float for text wrapping and layouts",
    content:
      "Float allows elements to be positioned to the left or right with text wrapping around them. It was commonly used for layouts before flexbox and grid became available. Float is still useful for wrapping text around images.",
    codeExample: `/* Float image left with text wrapping */
img { float: left; margin-right: 20px; }

/* Float layout (old method) */
.sidebar { float: left; width: 30%; }
.content { float: left; width: 70%; }

/* Clearing floats */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

/* Or use overflow */
.container { overflow: auto; }

/* Modern approach: use flexbox instead */
.container {
  display: flex;
  gap: 20px;
}
.sidebar { width: 30%; }
.content { width: 70%; }`,
  },
  responsiveness: {
    title: "Responsiveness",
    description: "Create responsive designs that work on all devices",
    content:
      "Responsive design ensures your website looks good on all screen sizes from mobile to desktop. Use flexible layouts, flexible images, and media queries to adapt your design. Mobile-first approach is recommended.",
    codeExample: `/* Mobile-first approach */
.container { width: 100%; }

/* Flexible images */
img { max-width: 100%; height: auto; }

/* Flexible font */
body { font-size: 16px; }

/* Flexible padding */
.section { padding: 20px; }

/* Viewport meta tag (required in HTML) */
/* <meta name="viewport" content="width=device-width, initial-scale=1"> */

/* Using CSS Grid for responsiveness */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

/* Using Flexbox for responsiveness */
.flex {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}`,
  },
  "media-queries": {
    title: "Media Queries",
    description: "Adapt styles based on device characteristics",
    content:
      "Media queries allow you to apply different styles based on screen size, orientation, and other device features. They are essential for responsive web design. Use breakpoints to define different layouts for mobile, tablet, and desktop.",
    codeExample: `/* Basic media query */
@media (max-width: 768px) {
  .sidebar { display: none; }
  .content { width: 100%; }
}

/* Mobile first approach */
.container { width: 100%; }

@media (min-width: 768px) {
  .container { width: 750px; }
}

@media (min-width: 992px) {
  .container { width: 960px; }
}

@media (min-width: 1200px) {
  .container { width: 1140px; }
}

/* Orientation queries */
@media (orientation: portrait) {
  body { background: blue; }
}

@media (orientation: landscape) {
  body { background: green; }
}

/* Multiple conditions */
@media (min-width: 768px) and (max-width: 1024px) {
  .special { display: block; }
}`,
  },
  "introduction-quiz": {
    title: "Introduction Quiz",
    description: "Test your knowledge of CSS fundamentals",
    content: "Complete the quiz below to assess your understanding of the Introduction section.",
  },
  "introduction-project": {
    title: "Introduction Project",
    description: "Build a simple styled webpage",
    content: "Create a webpage using HTML and CSS with proper styling and layout.",
  },
  "properties-quiz": {
    title: "Properties Quiz",
    description: "Test your knowledge of CSS properties",
    content: "Verify your understanding of colors, borders, fonts, margins, and padding.",
  },
  "properties-project": {
    title: "Properties Project",
    description: "Apply CSS properties in a project",
    content: "Build a styled webpage using various CSS properties.",
  },
  "intermediate-quiz": {
    title: "Intermediate Quiz",
    description: "Test intermediate CSS concepts",
    content: "Check your knowledge of specificity, selectors, and positioning.",
  },
  "intermediate-project": {
    title: "Intermediate Project",
    description: "Build an intermediate CSS project",
    content: "Create a complex layout using intermediate CSS techniques.",
  },
  "advanced-quiz": {
    title: "Advanced Quiz",
    description: "Test advanced CSS concepts",
    content: "Verify your understanding of display, float, responsiveness, and media queries.",
  },
  "advanced-project": {
    title: "Advanced Project",
    description: "Build a responsive website",
    content: "Create a fully responsive website that works on all devices.",
  },
}

export default function MainContent({ selectedItem }: MainContentProps) {
  const content = contentMap[selectedItem] || contentMap["what-is-css"]
  const isQuiz = selectedItem.includes("quiz")
  const isProject = selectedItem.includes("project")

  return (
    <main className="flex-1 bg-background overflow-y-auto">
      {isQuiz ? (
        <Quiz section={selectedItem.split("-")[0]} />
      ) : isProject ? (
        <ProjectView section={selectedItem.split("-")[0]} />
      ) : (
        <div className="p-6 md:p-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4 text-balance">{content.title}</h1>

          <p className="text-lg text-secondary mb-8 leading-relaxed text-pretty">{content.description}</p>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Overview</h2>
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <p className="text-foreground leading-relaxed text-lg">{content.content}</p>
            </div>
          </div>

          {content.codeExample && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Code Example</h2>
              <CodeExample code={content.codeExample} />
            </div>
          )}

          <div className="bg-gradient-to-r from-muted to-card border border-border rounded-xl p-8 md:p-12 text-center shadow-lg">
            <h2 className="text-3xl font-bold text-foreground mb-3">Ready to learn more?</h2>
            <p className="text-secondary mb-8 text-lg">Continue to the next topic or test your knowledge with a quiz</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-accent hover:bg-cyan-400 text-primary-foreground font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
                Next Topic
              </button>
              <button className="border-2 border-accent text-accent hover:bg-accent hover:text-primary-foreground font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Take Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
