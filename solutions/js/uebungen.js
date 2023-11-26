const kwArr = []
function parseAsKW(title, arr) {
  const qaObjects = arr.map(item => new QuestionAndAnswer(item.q, item.a, item.demo));

  return new KalenderWoche(title, qaObjects);
}

const kw41 = parseAsKW("KW 41", [
  {
    q: `
Mit welchen fachlichen Argumenten wurde das WWW-Proposal von Tim Burners Lee abgelehnt?
Was sind die fachlichen Argumente, warum das WWW dennoch ein Erfolg wurde?
Was wäre der Preis für die garantierte Verhinderung von "broken links"?
`,
    a: `
1 - Die Community dachte, dass das Konzept von TBL ein Rückschritt wäre, besonders weil Broken Links möglich sind
2 - unabhängig von Hardware oder Software zugänglich, frei verfügbar,  Unterstützung von Robert Cailliau 
3 - Für Referentielle Integrität muss man die Links von Seiten nicht andern dürfen
`
  },
  {
    q: `
Sie bekommen im Browser den HTTP Status Code 200. Was bedeutet das?
Sie bekommen im Browser den HTTP Status Code 301. Was hat das zu bedeuten?
Sie bekommen im Browser den HTTP Status Code 400. Was hat das zu bedeuten? Was können Sie dagegen tun?
Sie bekommen im Browser den HTTP Status Code 403. Was hat das zu bedeuten? Was können Sie dagegen tun?
In einer Webanwendung benötigen Sie eine OPTIONS-Anfrage, die die Optionen des Servers vor dem eigentlichen Zugriff erfragen soll. Aus Performancegründen soll die Abfrage aber cacheable sein. Wie könnten Sie dafür eine Lösung angehen?
`,
    a: `
200:  erfolgreich.
301:  URL wurde dauerhaft verschoben.
400:  ungültig oder falsch 
403:  Zugriff nicht erlaubt
Cache-Control header kann benutzt werden
`
  },
  {
    q: ``,
    a: `
<!DOCTYPE html>
<html>
<head>
<title>
Titel der Webseite
</title>
</head>
<body>
<h1>
Anwendung von HTML-Tags
</h1>
<h2>
Motivation
</h2>
<p>
Dieser Lückentext unterstützt Sie dabei selbst einzuschätzen, ob Sie in der Lage sind das HTML-Grundgerüst und die HTML-Tags zum Markieren von Überschriften, Paragraphen und HTML-Kommentaren einzusetzen.
</p>
<!--
<h2>
Auskommentierung von HTML-Code
</h2>
<p>
Dieser Abschnitt wurde auskommentiert.
</p>
-->
</body>
</html>
`
  },
  {
    q: `
Was ist HTML?
Wie kann man eine geschachtelte geordnete Liste der Tiefe 3 erzeugen?
Wie ist eine HTML-Tabelle aufgebaut?
Welche Konventionen sollte man bei Pfaden und Dateinamen beachten?
Wie baut man in HTML ein Menü?
Welche Attribute sollte man bei Bildern wie verwenden?
`,
    a: `
1- HTML ist die Standardauszeichnungssprache für Web
2-
<ol>
<li>
<ol>
    <li>
    <ol>
        <li></li>
        <li></li>
    </ol>
    </li>
    <li></li>
</ol>
</li>
<li></li>
</ol>
3-
<table>
<thead>
<tr>
<th>Überschrift</th>
</tr>
</thead>

<tbody>
<tr>
<td>Zelle </td>
</tr>
</tbody>
</table>
4- Keine Leerzeichnen und Sonderzeichnen, kleine Buchstaben, kann relative oder absolute Pfade haben, index.html als Hauptseite
5- Eine Liste bauen und mit CSS stylen
6-
<img
src="https://kaul.inf.h-brs.de/ccm/we/ws23/resources/assets/tbl.jpg"
alt="TBL" />
`
  },
  {
    q: `
Mit welchem HTML-Code (ohne CSS, nur mit HTML-Tags) kann man dieses Wireframe exakt nachbilden? Die beiden Bilder finden Sie z.B. unter TBL und Eich.
`,
    a: `
<!DOCTYPE html>
<html>
  <body>
    <h1>Übung 1.2: Inventors of the Web</h1>
    <ul>
      <li>
        <u
          ><mark><b>Tim Berners-Lee:</b></mark></u
        >
        WWW,HTTP,HTML,URI
      </li>
      <li><b>Hakom Lie and Bert Bos:</b> CSS</li>
      <li><b>Brendan Eich:</b> JavaScript</li>
    </ul>
    <hr />
    <h2>Inventors of the WWW</h2>
    <table border="10">
      <thead>
        <tr>
          <th colspan="4">Inventors of the WWW</th>
        </tr>
        <tr>
          <th>WWW</th>
          <th>HTML</th>
          <th>CSS</th>
          <th>JavaScript</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <u
              ><mark><b>Tim Berners-Lee</b></mark></u
            >
          </td>
          <td>
            <u
              ><mark><b>Tim Berners-Lee</b></mark></u
            >
          </td>
          <td>Hakom Lie and Bert Bos</td>
          <td>Brendan Eich:</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <b>Inventors of The WWW</b>
    <table width="100%">
      <tr>
        <td width="50%">
          <hr />
          <table width="100%">
            <tr>
              <td width="45%">
                <b><center>WWW</center></b>
              </td>
              <td width="10%">
                <b>|</b>
              </td>
              <td width="45%">
                <b><center>JavaScript</center></b>
              </td>
            </tr>
            <tr>
              <td width="45%">
                <img
                  src="https://kaul.inf.h-brs.de/ccm/we/ws23/resources/assets/tbl.jpg"
                  width="130"
                  height="200"
                />
              </td>
              <td width="10%">
                <b>|</b>
              </td>
              <td width="45%">
                <img
                  src="https://kaul.inf.h-brs.de/ccm/we/ws23/resources/assets/eich.jpg"
                  width="130"
                  height="200"
                />
              </td>
            </tr>
            <tr>
              <td width="45%">
                <center>
                  <mark>Tim Berners-Lee</mark>
                </center>
              </td>
              <td width="10%">|</td>
              <td width="45%">Brendan Eich</td>
            </tr>
          </table>
        </td>
        <td width="50%"></td>
      </tr>
    </table>
    <hr />
  </body>
</html>
`,
    demo: 'uebung1.html'
  }
])

kwArr.push(kw41)

const kw42 = parseAsKW("KW 42",
  [
    {
      "q": "Berechnen Sie die Spezifität folgender CSS-Selektoren:\n\n- div div div:focus .inner\n- h1 + div.main\n- div a:link[href*='h-brs']\n- nav > a:hover::before\n- ul#primary-nav li.active",
      "a": "- 0-2-3\n- 0-1-2\n- 0-2-2\n- 0-1-3\n- 1-1-2"
    },
    {
      "q": "Rechnen Sie folgende RGB-Werte mit den DevTools des Webbrowsers in HSL-Werte um:\n\n- #ffffff\n- #000\n- #ab0978\n- rgb(127,255,33)\n- rgba(255,127,33,0.8)",
      "a": "- 0deg, 0%, 100% (hex in HSL)\n- 0deg,0%,0% (hex in HSL)\n- 318.89deg, 90%, 35.29%\n- 94.59deg, 100%, 56.47%\n- 25.41deg, 12.94%, 56.47% / 80%"
    },
    {
      "q": "Bauen Sie das dynamische Verhalten in den folgenden beiden Videos exakt nach:\n\n- [Video 1 Link](https://www.youtube.com/watch?v=PE3POxjDspo)\n- [Video 2 Link](https://www.youtube.com/watch?v=HVmnv3k4__E)\n\nArbeiten Sie in beiden Fällen nur mit HTML und CSS, ohne JavaScript.\n\nDas Bild aus dem zweiten Video finden Sie hier.",
      "a": " zum 1. Video:\n\n<!DOCTYPE html>\n<html lang=\"de\">\n<head>\n<style>\nbody {\npadding: 50px;\n}\nh2 {\npadding: 10px;\nborder: 1px solid black;\nbackground-color: rgba(255, 255, 255, 0.8);\nposition: sticky;\ntop: 0;\nz-index: 10;\n}\np {\nbackground-color: rgba(239, 239, 240);\n}\n</style>\n</head>\n<body>\n<h2>Erste Überschrift</h2>\n<p>\nLorem ipsum dolor sit amet...\n</p>\n<h2>Zweite Überschrift</h2>\n<p>\nLorem ipsum dolor sit amet...\n</p>\n<h2>Dritte Überschrift</h2>\n<p>\nLorem ipsum dolor sit amet...\n</p>\n</body>\n</html>\n\n zum 2. Video:\n\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<title>Übung 2.2</title>\n<style>\n.container {\npadding: 20px;\nposition: relative;\n}\n\n.wrapper {\nborder: 1px black solid;\npadding: 10px;\n}\n\n#toggle:not(:checked) ~ .wrapper .content {\nopacity: 0;\n}\nimg {\nmax-width: 100%;\n}\n</style>\n</head>\n<body>\n<div class=\"container\">\n<h1>Übung 2.2</h1>\n\n<input type=\"checkbox\" id=\"toggle\" checked />\n<label for=\"toggle\">hide and show via checkbox</label>\n\n<div class=\"wrapper\">\n<div class=\"content\">\n<img\n class=\"content\"\n src=\"https://kaul.inf.h-brs.de/ccm/we/ws23/resources/assets/h-brs.jpg\"\n/>\n</div>\n</div>\n</div>\n</body>\n</html>"
    },
    {
      "q": "Gegeben ist folgendes HTML-Wireframe:\n\nWireframe of a Survey form\n\nMit welchem HTML- und CSS-Code kann man dieses Wireframe exakt nachbilden? Schreiben Sie Ihren CSS-Code direkt in die HTML-Datei.\n\nDie grünliche Farbe ist #a9d7d1 und die Hintergrundfarbe vom HTML-Formular ist snow. Die Schriftart ist eine Google Font: Roboto.",
      "a": `
<!DOCTYPE html>
<html lang="en">
  <body>
      <h1>Survey Form</h1>
    <div class="form-container">

      <form action="#" method="post">
        <p>Let us know how we can improve freeCodeCamp</p>
        <table>
          <tr class="formRow">
            <th><label for="name">* Name:</label></th>
            <td><input type="text" id="name" name="name" placeholder="Enter your name" /></td>
          </tr>

          <tr class="formRow">
            <th><label for="email">* Email:</label></th>
            <td><input type="email" id="email" name="email" placeholder="Enter your Email" /></td>
          </tr>

          <tr class="formRow">
            <th><label for="age">* Age:</label></th>
            <td><input type="number" id="age" name="age" placeholder="Age" /></td>
          </tr>

          <tr class="formRow">
            <th><label for="role">Which option best describes your current role?</label></th>
            <td>
              <select id="role" name="role">
                <option value="student">Student</option>
              </select>
            </td>
          </tr>

          <tr class="formRow">
            <th>How likely is that you would recommend freeCodeCamp to a friend?</th>
            <td>
              <div class="choiceGroup">
                <div>
                  <input type="radio" id="definitely" name="recommend" value="definitely" />
                  <label for="definitely">Definitely</label>
                </div>
                <div>
                  <input type="radio" id="maybe" name="recommend" value="maybe" />
                  <label for="maybe">Maybe</label>
                </div>
                <div>
                  <input type="radio" id="notsure" name="recommend" value="notsure" />
                  <label for="notsure">Not sure</label>
                </div>
              </div>
            </td>
          </tr>

          <tr class="formRow">
            <th><label for="like">What do you like most in FCC?</label></th>
            <td>
              <select id="like" name="like">
                <option>Select an option</option>
              </select>
            </td>
          </tr>

          <tr class="formRow">
            <th>Things that should be improved in the future (Check all that apply):</th>
            <td>
              <div class="choiceGroup">
                <div>
                  <input type="checkbox" id="frontend" name="improve[]" value="frontend" />
                  <label for="frontend">Front-end Projects</label>
                </div>
                <div>
                  <input type="checkbox" id="backend" name="improve[]" value="backend" />
                  <label for="backend">Back-end Projects</label>
                </div>
                <div>
                  <input type="checkbox" id="data" name="improve[]" value="data" />
                  <label for="data">Data Visualization</label>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </body>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
    body {
      font-family: Roboto;
      background-color: #a9d7d1;
      padding: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 10px;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    table {
      width: 100%;
    }

    select {
      height: 30px;
    }

    .choiceGroup {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    th {
      text-align: right;
      padding-right: 10px;
    }

    td {
      width: 30%;
    }
  </style>
</html>
      `,
      demo: 'uebung2.html'
    }
  ]
)
kwArr.push(kw42)

const kw43 = parseAsKW("KW 43",
  [
    {
      q: `
Spielen Sie zunächst das Flexbox Froggy-Spiel, um Flexbox zu lernen.

Implementieren Sie dann ausschließlich mit HTML, CSS und Flexbox das folgende Responsive Webdesign nach der Desktop-First-Strategie:
    `,
      a: `
<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
      }
      .red {
        background-color: red;
      }
      .green {
        background-color: green;
      }
      .blue {
        background-color: blue;
      }
      .purple {
        background-color: purple;
      }
      @media only screen and (min-width: 600px) {
        .container {
          height: 100vh;
          align-content: space-around;
          justify-content: space-between;
        }
        .red {
          height: 30%;
          width: 100%;
        }
        .green {
          height: 60%;
          width: 20%;
        }
        .blue {
          height: 60%;
          width: 55%;
        }
        .purple {
          height: 60%;
          width: 20%;
        }
      }
      @media only screen and (max-width: 600px) {
        .container {
          height: 130vh;
          align-content: space-around;
          justify-content: space-between;
        }
        .red,
        .purple {
          height: 20%;
          width: 100%;
        }
        .blue {
          height: 55%;
          width: 59%;
        }
        .green {
          height: 55%;
          width: 40%;
        }
      }
      @media only screen and (max-width: 400px) {
        .container {
          height: 200vh;
        }
        .red,
        .green,
        .blue,
        .purple {
          height: 30vh;
          width: 100%;
        }
        .blue {
          height: 60%;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="red"></div>
      <div class="green"></div>
      <div class="blue"></div>
      <div class="purple"></div>
    </div>
  </body>
</html>
    `,
    },
    {
      q: `
Spielen Sie zunächst das Grid Garden-Spiel, um Grid zu lernen.

Implementieren Sie dann das gleiche Responsive Webdesign wie zuvor in Aufgabe 3.1, allerdings diesmal mit Grid und der Mobile-First-Strategie. Vermeiden Sie außerdem das Erscheinen von horizontalen Scrollbars so weit wie möglich.

:
    `,
      a: `
<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        height: 200vh;
        width: 100%;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 1fr 1fr 8fr 1fr;
      }
      .red {
        background-color: red;
      }
      .green {
        background-color: green;
      }
      .blue {
        background-color: blue;
      }
      .purple {
        background-color: purple;
      }
      @media only screen and (min-width: 600px) {
        .container {
          height: 100vh;
          grid-template-columns: 20% 60% 20%;
          grid-template-rows: 33% 66%;
        }
        div {
          margin: 5px;
        }
        .red {
          grid-column: span 3;
        }
      }
      @media only screen and (max-width: 600px) and (min-width: 400px) {
        .container {
          height: 130vh;
          grid-template-rows: 15% 70% 15%;
          grid-template-columns: 33% 66%;
        }
        .red {
          grid-column: span 2;
        }
        .purple {
          grid-column: span 2;
        }
        div {
          margin: 3px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="red"></div>
      <div class="green"></div>
      <div class="blue"></div>
      <div class="purple"></div>
    </div>
  </body>
</html>
    `,
    },
    {
      q: `
Implementieren Sie folgende Landing-Page responsiv mit Grid:

Landing Page

Vermeiden Sie auch hier das Erscheinen von horizontalen Scrollbars so weit wie möglich. Für das Bild auf der Landing-Page verwenden Sie bitte diese Bilddatei.

:
    `,
      a: `
<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        display: grid;
        width: 100%;
        height: 99vh;
        grid-template-columns: 100%;
        grid-template-rows: 5% 80% 15%;
      }
      .upperbar {
        background-color: rgba(54, 54, 54, 255);
        display: grid;
        color: rgba(221, 217, 195, 255);
        grid-template-columns: 35% 15% 15% 35%;
        grid-template-rows: 100%;
        padding-top: 1.6%;
      }
      .upperbar div {
        padding-right: 10px;
        padding-left: 10px;
        text-wrap: nowrap;
      }
      .content {
        background-color: rgba(235, 234, 230, 255);
        display: grid;
        grid-template-columns: 40% 60%;
        grid-template-rows: 20% 80%;
      }
      img {
        margin-left: 20%;
        border: black solid;
        border-radius: 5px;
      }
      .rightcontent {
        margin-top: 10%;
      }
      .rightcontent div {
        margin-top: 30px;
      }
      .title {
        font-weight: bold;
        font-size: 24px;
        grid-column: span 2;
        text-align: center;
        margin-top: 20px;
      }
      .ordercopy {
        background-color: #ec933f;
        width: 40%;
        margin-left: 30%;
        color: white;
        border-radius: 5px;
        padding: 5px;
      }
      .bottombar {
        background-color: rgba(5, 24, 38, 255);
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: 50% 50%;
        color: rgba(200, 232, 241, 255);
      }
      .findoutsection {
        grid-column: 4/8;
        grid-row: 2;
        text-align: center;
      }
      .findout {
        background-color: #ec933f;
        border-radius: 5px;
        padding: 3px;
        margin-top: 5px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="upperbar">
        <div style="text-align: end">The book series</div>
        <div style="text-align: center">Testimonals</div>
        <div style="text-align: center">The author</div>
        <div style="text-align: start">Free resources</div>
      </div>
      <div class="content">
        <div class="title">You Dont Know JavaScript</div>
        <div class="leftcontent">
          <img
            src="https://kaul.inf.h-brs.de/ccm/we/ws23/resources/assets/landing-img.png"
            height="400px"
            alt=""
          />
        </div>
        <div class="rightcontent" style="text-align: center">
          <div>Dont just drift through javascript</div>
          <div>Understand how javascript works</div>
          <div>Start your journey through the jumpy side of javascript</div>
          <div class="ordercopy">ORDER YOUR COPY NOW</div>
        </div>
      </div>
      <div class="bottombar">
        <div class="findoutsection">
          <div class="firstebook">
            The first ebook in the book series is absolutely free
          </div>
          <div class="findout">FIND OUT MORE ABOUT THIS OFFER</div>
        </div>
      </div>
    </div>
  </body>
</html>
    `,
      demo: 'uebung3.html'
    },
  ]
)
kwArr.push(kw43)

const navbar = document.querySelector(".horizontal")
kwArr.forEach((kw) => {
  const title = kw.title

  const li = document.createElement('li')
  const a = document.createElement('a')

  const funcName = `${title.toLowerCase().replace(/\s/g, '')}.renderSelf(this)`;
  a.setAttribute("onclick", funcName)

  const titleToRender = `- ${title} -`
  a.textContent = titleToRender;

  li.appendChild(a)
  navbar.appendChild(li)
})

navbar.children[0].firstChild.click()
