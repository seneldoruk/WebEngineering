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


const kw45 = parseAsKW("KW 45",
  [
    {
      q: "Eine Funktion identity(), die ein Argument als Parameter entgegennimmt und dieses als Ergebnis zurückgibt.",
      a: `
function identity(x) {
  return x;
}
    `,
    },
    {
      q: "Eine Funktion identity_function(), die ein Argument als Parameter entgegennimmt und eine Funktion zurückgibt, die dieses Argument zurückgibt.",
      a: `
function identity_function(x) {
  return function() {
    return x;
  };
}
    `,
    },
    {
      q: "Zwei binäre Funktionen add und mul, die Summe und Produkt berechnen.",
      a: `
function add(x, y) {
  return x + y;
}

function mul(x, y) {
  return x * y;
}
    `,
    },
    {
      q: "Eine Addierer-Funktion addf(), so dass addf(x)(y) genau x + y zurückgibt. (Es haben also zwei Funktionsaufrufe zu erfolgen. addf(x) liefert eine Funktion, die auf y angewandt wird.)",
      a: `
function addf(x) {
  return function(y) {
    return x + y;
  };
}
    `,
    },
    {
      q: "Eine Funktion applyf(), die aus einer binären Funktion wie add(x,y) eine Funktion addf berechnet, die mit zwei Aufrufen das gleiche Ergebnis liefert, z.B. addf = applyf(add); addf(x)(y) soll add(x,y) liefern.",
      a: `
function applyf(binaryFunc) {
  return function(x) {
    return function(y) {
      return binaryFunc(x, y);
    };
  };
}
    `,
    },
    {
      q: "Schreiben Sie die Prototypen Person und Auto in JavaScript, sodass jede Person weiß, welche Autos sie besitzt. Schreiben Sie eine Funktion conflict(), die feststellt, ob ein Auto von mehr als einer Person besessen wird.",
      a: `
function Auto(marke, modell, kennzeichen) {
  this.marke = marke;
  this.modell = modell;
  this.kennzeichen = kennzeichen;
}

function Person(name) {
  this.name = name;
  this.autos = [];
}

Person.prototype.addAuto = function(auto) {
  this.autos.push(auto);
};

function conflict(personen) {
  let kennzeichenMap = {};

  personen.forEach(person => {
    person.autos.forEach(auto => {
      if (kennzeichenMap[auto.kennzeichen]) {
        kennzeichenMap[auto.kennzeichen].push(person.name);
      } else {
        kennzeichenMap[auto.kennzeichen] = [person.name];
      }
    });
  });

  for (let kennzeichen in kennzeichenMap) {
    if (kennzeichenMap[kennzeichen].length > 1) {
      console.log("Conflict", kennzeichenMap[kennzeichen]);
    }
  }
}
    `,
    },
    {
      q: "Schreiben Sie im Browser die Fibonacci-Funktion in JS und geben Sie die ersten 2000 Fibonacci-Zahlen 0,1,1,2,3,5,8,13,... auf der Konsole mit console.log() aus.",
      a: `
// Aufgabe 3
function fibonacci(n) {
  let fib = [0n, 1n];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(2000));
    `,
    },
    {
      q: "Was ist die größte Fibonacci-Zahl, die sich noch als Integer sicher speichern lässt (Number.MAX_SAFE_INTEGER)? Die wievielte Zahl in der Fibonacci-Folge ist das?",
      a: `
// Aufgabe 1
function fibonacci(n) {
  let fib = [0n, 1n];
  for (let i = 2; i <= n; i++) {
    const current = fib[i - 1] + fib[i - 2];
    if (current > Number.MAX_SAFE_INTEGER) {
      console.log(\`\${i - 1}:\${fib[fib.length - 1]}\`);
      return;
    }
    fib[i] = current;
  }
  return fib;
}

fibonacci(2000);
// Output: 78: 8944394323791464
    `,
    },
    {
      q: "Was ist die größte Fibonacci-Zahl, die sich noch als Number speichern lässt (Number.MAX_VALUE)? Die wievielte Zahl in der Fibonacci-Folge ist das?",
      a: `
// Aufgabe 2
function fibonacci(n) {
  let fib = [0n, 1n];
  for (let i = 2; i <= n; i++) {
    const current = fib[i - 1] + fib[i - 2];
    if (current > Number.MAX_VALUE) {
      console.log(\`\${i - 1}:$\{fib[fib.length - 1]}\`);
      return;
    }
    fib[i] = current;
  }
  return fib;
}

fibonacci(2000);
// Output: 1476: 130698922376339931803631155380271983098392443907412640726006659460192793070479231740288681087777017721095463154979012276234322246936939647185366706368489362660844147449941348462800922755818969634743348982916424954062744135969865615407276492410653721774590669544801490837649161732095972658064630033793347171632
    `,
    },
    {
      q: "Wechseln Sie zu BigInt, um alle 2000 Fibonacci-Zahlen korrekt anzuzeigen.",
      a: `
// Aufgabe 3
function fibonacci(n) {
  let fib = [0n, 1n];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(2000));
    `,
    },
    {
      q: "Optional: Was ist die größte Fibonacci-Zahl, die Sie mit BigInt korrekt berechnet haben? An welcher Stelle in der Fibonacci-Folge steht diese?",
      a: "Die größte Fibonacci-Zahl, die sich mit BigInt korrekt berechnen lässt, ist 2000: 39406014605753609255676250506383186276236444006662701760096904291658135187084551371007366712955491224032388959026156823325454784145354754676577824222200350615079297804422436038119645042066201108523211893066978845349234900329165795636667677676886685475464902400448029...",
    },
    {
      q: "Schreiben Sie in JavaScript eine Funktion topsort(), die eine topologische Sortierung berechnet. Topologische Sortierung ist eine Form von Sortierung. Sie kennen die Funktion Array.prototype.sort() und wissen, was als Ergebnis erwartet wird, nämlich eine sortierte Liste. Genauso ist das hier. Die Funktion topsort() soll eine sortierte Liste ausgeben, die keine der eingegebenen Abhängigkeiten verletzt.",
      a: `
function sortTasks(tasks) {
  let taskGraph = new Map();
  let incomingEdges = new Map();
  let taskQueue = [];
  let sortedOrder = [];

  tasks.forEach(([prerequisite, task]) => {
    if (!taskGraph.has(prerequisite)) taskGraph.set(prerequisite, []);
    if (!taskGraph.has(task)) taskGraph.set(task, []);

    taskGraph.get(prerequisite).push(task);
    incomingEdges.set(task, (incomingEdges.get(task) || 0) + 1);
    incomingEdges.set(prerequisite, incomingEdges.get(prerequisite) || 0);
  });

  for (let [task, edgesCount] of incomingEdges) {
    if (edgesCount === 0) taskQueue.push(task);
  }

  while (taskQueue.length > 0) {
    let currentTask = taskQueue.shift();
    sortedOrder.push(currentTask);

    taskGraph.get(currentTask).forEach(nextTask => {
      incomingEdges.set(nextTask, incomingEdges.get(nextTask) - 1);
      if (incomingEdges.get(nextTask) === 0) {
        taskQueue.push(nextTask);
      }
    });
  }

  return sortedOrder;
}

console.assert(sortTasks([["schlafen","studieren"],["essen","studieren"],["studieren","prüfen"]]).toString() === ['schlafen', 'essen', 'studieren', 'prüfen'].toString());
    `,
    },
  ]
)
kwArr.push(kw45)

const kw46 = parseAsKW("KW 46",
  [
    {
      q: "Implementieren Sie Performanz-Messungen zum Vergleich von innerHTML, innerText, textContent und outerHTML selbstständig in JavaScript durch Nutzung der DOM-API. Geben Sie die Messergebnisse als Tabelle aus. Verwenden Sie die eingebauten Zeitmessung-Funktionen performance.now(), siehe auch When-milliseconds-are-not-enough-performance-now. Suchen Sie eine möglichst kurze und elegante Lösung. Dabei ist zu beachten, dass Browser, um potenzielle Sicherheitsbedrohungen wie Meltdown oder Spectre zu minimieren, den zurückgegebenen Wert normalerweise um einen bestimmten Betrag runden. Dies führt zu einer gewissen Ungenauigkeit. Beispielsweise rundet Firefox die zurückgegebene Zeit in Schritten von 1 Millisekunde. Diese Zwangsrundung kann man jedoch wiederum abschalten mittels der Firefox-Einstellung privacy.reduceTimerPrecision, siehe How to get microsecond timings in JavaScript since Spectre and Meltdown.",
      a: `
  <script>
  const testElement = document.createElement('div');
  document.body.appendChild(testElement);
  testElement.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
  
  
  
  function measurePerformance(method) {
      const startTime = performance.now();
      var i = 0;
      while(i<1000){
          const result = testElement[method];
          i++;
      }
      const endTime = performance.now();
      return endTime - startTime;
  }
  
  const results = {
      'innerHTML': measurePerformance('innerHTML'),
      'innerText': measurePerformance('innerText'),
      'textContent': measurePerformance('textContent'),
      'outerHTML': measurePerformance('outerHTML')
  };
  
  console.log(results);
  </script>
    `
    },
    {
      demo: "uebung5.html",
      q: "Implementieren Sie die interaktive Anwendung \"Rednerliste mit Zeitmessung\" selbstständig in JavaScript durch Nutzung der DOM-API und der Timer-Funktionen. Neue Redner sollen auf Knopfdruck hinzugefügt werden können. Deren Uhr wird dann sofort automatisch gestartet und alle anderen Uhren angehalten. Bei jedem Redner soll die individuelle, gemessene Redezeit sekundengenau angezeigt werden. Für jeden Redner soll es einen eigenen Start-/Stopp-Button geben. Es soll immer nur eine Uhr laufen. Angezeigt werden sollen die bisherigen Summenzeiten aller Redebeiträge der betreffenden Person. Suchen Sie eine möglichst kurze und elegante Lösung. Achten Sie gleichzeitig auf gute Usability: z.B. wenn die Eingabe mit einem Return beendet wird, soll der Klick auf den Button nicht mehr erforderlich sein.",
      a: `
  <!DOCTYPE html>
    <head>
      <style>
        #rednerInput {
          margin-bottom: 10px;
        }
        #rednerList {
          list-style-type: none;
          padding: 0;
        }
        #rednerList li {
          margin: 5px 0;
          padding: 5px;
          background-color: #f0f0f0;
          border: 1px solid #ddd;
        }
      </style>
    </head>
    <body>
      <h2>Rednerliste</h2>
  
      <input type="text" id="rednerInput" placeholder="Neuer Redner" />
      <button id="addButton">Hinzufügen</button>
  
      <ul id="rednerList"></ul>
  
      <script>
        document.addEventListener("DOMContentLoaded", (event) => {
          let timers = {};
          let activeTimer = null;
  
          const addSpeaker = (name) => {
            if (!name.trim()) return;
  
            if (activeTimer) {
              clearInterval(timers[activeTimer].intervalId);
              activeTimer = null;
            }
  
            const listItem = document.createElement("li");
            listItem.textContent = name + " 00:00:00";
            listItem.id = name;
            document.getElementById("speakersList").appendChild(listItem);
  
            timers[name] = {
              time: 0,
              intervalId: setInterval(() => {
                timers[name].time++;
                const seconds = timers[name].time % 60;
                const minutes = Math.floor(timers[name].time / 60) % 60;
                const hours = Math.floor(timers[name].time / 3600);
                listItem.textContent = \`${name} \${
      hours
                  .toString()
        .padStart(2, "0")
    }: \${
      minutes
                  .toString()
        .padStart(2, "0")
    }: \$\{ seconds.toString().padStart(2, "0") }\`;
              }, 1000),
            };
  
            activeTimer = name;
          };
  
          document.getElementById("addButton").addEventListener("click", () => {
            const speakerName = document.getElementById("speakerInput").value;
            addSpeaker(speakerName);
            document.getElementById("speakerInput").value = "";
          });
  
          document
            .getElementById("speakerInput")
            .addEventListener("keypress", (e) => {
              if (e.key === "Enter") {
                const speakerName = e.target.value;
                addSpeaker(speakerName);
                e.target.value = "";
              }
            });
        });
      </script>
    </body>
  </html>
  
  `
    },
    {
      q: "Schreiben Sie eine Weboberfläche, in der man beliebige Beziehungen (Vorrang-Relationen) eingeben kann, für die dann die topologische Sortierung per Knopfdruck auf der Webseite ausgegeben wird. Für die Eingabe können Sie HTML5-Eingabefelder oder das HTML-Attribut contenteditable verwenden.",
      a: `
  <!DOCTYPE html>
  <html>
    <body>
      <h1>Topologische Sortierung</h1>
      <textarea
        id="inputRelations"
        rows="10"
        cols="50"
        placeholder='[["x", "y"], ["y", "z"]]'
      ></textarea
      ><br />
      <button onclick="getAndSortTasks()">Sortieren</button>
      <h2>Sortiert:</h2>
      <b id="output"></b>
  
      <script>
        function sortTasks(tasks) {
          let taskGraph = new Map();
          let incomingEdges = new Map();
          let taskQueue = [];
          let sortedOrder = [];
  
          tasks.forEach(([prerequisite, task]) => {
            if (!taskGraph.has(prerequisite)) taskGraph.set(prerequisite, []);
            if (!taskGraph.has(task)) taskGraph.set(task, []);
  
            taskGraph.get(prerequisite).push(task);
            incomingEdges.set(task, (incomingEdges.get(task) || 0) + 1);
            incomingEdges.set(prerequisite, incomingEdges.get(prerequisite) || 0);
          });
  
          for (let [task, edgesCount] of incomingEdges) {
            if (edgesCount === 0) taskQueue.push(task);
          }
  
          while (taskQueue.length > 0) {
            let currentTask = taskQueue.shift();
            sortedOrder.push(currentTask);
  
            taskGraph.get(currentTask).forEach((nextTask) => {
              incomingEdges.set(nextTask, incomingEdges.get(nextTask) - 1);
              if (incomingEdges.get(nextTask) === 0) {
                taskQueue.push(nextTask);
              }
            });
          }
  
          return sortedOrder;
        }
        function getAndSortTasks() {
          const values = JSON.parse(
            document.querySelector("#inputRelations").value
          );
          const sorted = sortTasks(values).join(" -> ");
          document.querySelector("#output").innerHTML = sorted;
          console.log(sorted);
        }
      </script>
    </body>
  </html>
  `
    }
  ]
);
kwArr.push(kw46)


