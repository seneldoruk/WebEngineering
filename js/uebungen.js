const kwArr = [];
function parseAsKW(title, arr) {
  const qaObjects = arr.map(
    (item) => new QuestionAndAnswer(item.q, item.a, item.demo)
  );

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
`,
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
`,
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
`,
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
`,
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
    demo: "uebung1.html",
  },
]);

kwArr.push(kw41);

const kw42 = parseAsKW("KW 42", [
  {
    q: "Berechnen Sie die Spezifität folgender CSS-Selektoren:\n\n- div div div:focus .inner\n- h1 + div.main\n- div a:link[href*='h-brs']\n- nav > a:hover::before\n- ul#primary-nav li.active",
    a: "- 0-2-3\n- 0-1-2\n- 0-2-2\n- 0-1-3\n- 1-1-2",
  },
  {
    q: "Rechnen Sie folgende RGB-Werte mit den DevTools des Webbrowsers in HSL-Werte um:\n\n- #ffffff\n- #000\n- #ab0978\n- rgb(127,255,33)\n- rgba(255,127,33,0.8)",
    a: "- 0deg, 0%, 100% (hex in HSL)\n- 0deg,0%,0% (hex in HSL)\n- 318.89deg, 90%, 35.29%\n- 94.59deg, 100%, 56.47%\n- 25.41deg, 12.94%, 56.47% / 80%",
  },
  {
    q: "Bauen Sie das dynamische Verhalten in den folgenden beiden Videos exakt nach:\n\n- [Video 1 Link](https://www.youtube.com/watch?v=PE3POxjDspo)\n- [Video 2 Link](https://www.youtube.com/watch?v=HVmnv3k4__E)\n\nArbeiten Sie in beiden Fällen nur mit HTML und CSS, ohne JavaScript.\n\nDas Bild aus dem zweiten Video finden Sie hier.",
    a: ' zum 1. Video:\n\n<!DOCTYPE html>\n<html lang="de">\n<head>\n<style>\nbody {\npadding: 50px;\n}\nh2 {\npadding: 10px;\nborder: 1px solid black;\nbackground-color: rgba(255, 255, 255, 0.8);\nposition: sticky;\ntop: 0;\nz-index: 10;\n}\np {\nbackground-color: rgba(239, 239, 240);\n}\n</style>\n</head>\n<body>\n<h2>Erste Überschrift</h2>\n<p>\nLorem ipsum dolor sit amet...\n</p>\n<h2>Zweite Überschrift</h2>\n<p>\nLorem ipsum dolor sit amet...\n</p>\n<h2>Dritte Überschrift</h2>\n<p>\nLorem ipsum dolor sit amet...\n</p>\n</body>\n</html>\n\n zum 2. Video:\n\n<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>Übung 2.2</title>\n<style>\n.container {\npadding: 20px;\nposition: relative;\n}\n\n.wrapper {\nborder: 1px black solid;\npadding: 10px;\n}\n\n#toggle:not(:checked) ~ .wrapper .content {\nopacity: 0;\n}\nimg {\nmax-width: 100%;\n}\n</style>\n</head>\n<body>\n<div class="container">\n<h1>Übung 2.2</h1>\n\n<input type="checkbox" id="toggle" checked />\n<label for="toggle">hide and show via checkbox</label>\n\n<div class="wrapper">\n<div class="content">\n<img\n class="content"\n src="https://kaul.inf.h-brs.de/ccm/we/ws23/resources/assets/h-brs.jpg"\n/>\n</div>\n</div>\n</div>\n</body>\n</html>',
  },
  {
    q: "Gegeben ist folgendes HTML-Wireframe:\n\nWireframe of a Survey form\n\nMit welchem HTML- und CSS-Code kann man dieses Wireframe exakt nachbilden? Schreiben Sie Ihren CSS-Code direkt in die HTML-Datei.\n\nDie grünliche Farbe ist #a9d7d1 und die Hintergrundfarbe vom HTML-Formular ist snow. Die Schriftart ist eine Google Font: Roboto.",
    a: `
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
    demo: "uebung2.html",
  },
]);
kwArr.push(kw42);

const kw43 = parseAsKW("KW 43", [
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
    demo: "uebung3.html",
  },
]);
kwArr.push(kw43);

const kw45 = parseAsKW("KW 45", [
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
]);
kwArr.push(kw45);

const kw46 = parseAsKW("KW 46", [
  {
    q: "Implementieren Sie Performanz-Messungen zum Vergleich von innerHTML, innerText, textContent und outerHTML selbstständig in JavaScript durch Nutzung der DOM-API. Geben Sie die Messergebnisse als Tabelle aus. Verwenden Sie die eingebauten Zeitmessung-Funktionen performance.now(), siehe auch When-milliseconds-are-not-enough-performance-now. Suchen Sie eine möglichst kurze und elegante Lösung. Dabei ist zu beachten, dass Browser, um potenzielle Sicherheitsbedrohungen wie Meltdown oder Spectre zu minimieren, den zurückgegebenen Wert normalerweise um einen bestimmten Betrag runden. Dies führt zu einer gewissen Ungenauigkeit. Beispielsweise rundet Firefox die zurückgegebene Zeit in Schritten von 1 Millisekunde. Diese Zwangsrundung kann man jedoch wiederum abschalten mittels der Firefox-Einstellung privacy.reduceTimerPrecision, siehe How to get microsecond timings in JavaScript since Spectre and Meltdown.",
    a: `
  <script>
  const testElement = document.createElement('div');
  document.body.appendChild(testElement);
  testElement.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'  
  
  
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
    `,
  },
  {
    demo: "uebung5.html",
    q: 'Implementieren Sie die interaktive Anwendung "Rednerliste mit Zeitmessung" selbstständig in JavaScript durch Nutzung der DOM-API und der Timer-Funktionen. Neue Redner sollen auf Knopfdruck hinzugefügt werden können. Deren Uhr wird dann sofort automatisch gestartet und alle anderen Uhren angehalten. Bei jedem Redner soll die individuelle, gemessene Redezeit sekundengenau angezeigt werden. Für jeden Redner soll es einen eigenen Start-/Stopp-Button geben. Es soll immer nur eine Uhr laufen. Angezeigt werden sollen die bisherigen Summenzeiten aller Redebeiträge der betreffenden Person. Suchen Sie eine möglichst kurze und elegante Lösung. Achten Sie gleichzeitig auf gute Usability: z.B. wenn die Eingabe mit einem Return beendet wird, soll der Klick auf den Button nicht mehr erforderlich sein.',
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
  
  `,
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
  `,
  },
]);
kwArr.push(kw46);

const kw47 = parseAsKW("KW 47", [
  {
    q: "Schreiben Sie eine Webseite, in die man eine Zeichenkette mit beliebigen Buchstaben, Zahlen und Sonderzeichen eingeben kann, die beliebig geschachtelte Klammern [...], (...) und {...} enthält, sodass sofort geprüft wird, ob alle Klammerpaare korrekt geschachtelt sind. Das Eingabefeld der Zeichenkette soll rot gefärbt werden, wenn es ein Klammerpaar gibt, das falsch geschachtelt ist. Verwenden Sie für Ihre Tests die Funktion console.assert. Bonus: Verallgemeinern Sie Ihren Algorithmus, sodass man Klammerpaare als Parameter frei definieren kann. Es müssen also nicht [...], (...) und {...} sein, sondern es können auch andere Zeichen gewählt werden.",
    a: `
  <!DOCTYPE html>
  
  <html>
    <style>
      input.invalid {
        border-color: red;
      }
    </style>
    <body>
      <input
        type="text"
        id="inputString"
        placeholder="Geben Sie hier Ihre Zeichenkette ein"
        oninput="checkBrackets()"
      />
    </body>
    <script>
      function checkBrackets() {
        let input = document.getElementById("inputString");
        let str = input.value;
        if (areBracketsBalanced(str)) {
          input.classList.remove("invalid");
        } else {
          input.classList.add("invalid");
        }
      }
  
      function areBracketsBalanced(str) {
        let stack = [];
        let map = {
          "]": "[",
          ")": "(",
          "}": "{",
        };
  
        for (let ch of str) {
          if ("[{(".includes(ch)) {
            stack.push(ch);
          } else if ("]})".includes(ch)) {
            if (stack.length === 0 || stack.pop() !== map[ch]) {
              return false;
            }
          }
        }
        return stack.length === 0;
      }
      console.assert(areBracketsBalanced("()"), "fehlgeschlagen");
      console.assert(!areBracketsBalanced("(]"), "fehlgeschlagen");
      console.assert(areBracketsBalanced("([])"), "fehlgeschlagen");
      console.assert(!areBracketsBalanced("([{]})"), "fehlgeschlagen");
    </script>
  </html>
    `,
  },
  {
    q: 'Schreiben Sie eine ES6-Klasse Vorrang für Vorrangrelationen, z.B.: const studentenLeben = new Vorrang( [[ "schlafen", "studieren" ], [ "essen", "studieren" ], [ "studieren", "prüfen" ] ] ) Wählen Sie eine Implementierung, die universell gültig, also nicht nur für dieses Beispiel gilt. (Überlegen Sie sich, über welche Properties und Methoden eine solche Klasse verfügen sollte und wie TopSort hier hineinspielt. Topologische Iterierbarkeit und topologischer Generator sind Gegenstand der nächsten Übungen weiter unten auf diesem Übungsblatt und sollten für die folgenden Aufgaben aufgespart werden.) Stellen Sie bei Ihrer Klasse die topologische Iterierbarkeit her (zunächst über das Iterationsprotokoll, ohne Generator, ohne yield). Zum Beispiel soll dadurch folgende for ... of loop möglich werden, mit der die Elemente in topologischer Sortierung durchlaufen werden: for ( const next of studentenLeben ) {console.log( next );} Auf der Entwicklerkonsole wird dadurch ausgegeben: schlafen essen studieren prüfen Eine topologische Sortierung im Konstruktor vorauszuberechnen, wäre eine triviale Lösung. Versuchen Sie es stattdessen mit "lazy computation", d.h. erst beim Aufruf von next() wird die erforderliche Berechnung durchgeführt. Achten Sie auf einen minimalen Aufwand, d.h. bei jedem next() soll nicht alles erneut sortiert werden. Verwenden Sie so weit wie möglich High-Level-Methoden wie Object.keys und High-Level-Datenstrukturen wie Map und Set und deren Methoden, anstatt mühsam von Hand zu iterieren und zu zählen. Verwenden Sie für Ihre Tests console.assert. Betten Sie Ihren ECMAScript-Code in eine Webseite ein, so dass man die Vorrangrelation dort eingeben kann.',
    a: `
  <!DOCTYPE html>
  <html>
    <head> </head>
    <body>
      <textarea id="inputArea" rows="6" cols="30">
  schlafen, studieren
  essen, studieren
  studieren, prüfen
      </textarea>
      <br />
      <button onclick="testVorrang()">Test Starten</button>
    </body>
    <script>
      class Vorrang {
        constructor(vorrangRelationen) {
          this.adjList = new Map();
          this.indegree = new Map();
  
          vorrangRelationen.forEach(([u, v]) => {
            if (!this.adjList.has(u)) this.adjList.set(u, []);
            if (!this.adjList.has(v)) this.adjList.set(v, []);
            if (!this.indegree.has(u)) this.indegree.set(u, 0);
            if (!this.indegree.has(v)) this.indegree.set(v, 0);
  
            this.adjList.get(u).push(v);
            this.indegree.set(v, this.indegree.get(v) + 1);
          });
  
          this.queue = [];
          this.indegree.forEach((deg, node) => {
            if (deg === 0) this.queue.push(node);
          });
  
          this.current = this.queue.shift();
        }
  
        [Symbol.iterator]() {
          return {
            next: () => {
              if (this.current === undefined) {
                return { done: true };
              } else {
                const result = { value: this.current, done: false };
  
                this.adjList.get(this.current).forEach((node) => {
                  this.indegree.set(node, this.indegree.get(node) - 1);
                  if (this.indegree.get(node) === 0) {
                    this.queue.push(node);
                  }
                });
  
                this.current = this.queue.shift();
                return result;
              }
            },
          };
        }
      }
      function parseInput(input) {
        return input
          .trim()
          .split("\n")
          .map((line) => line.split(",").map((item) => item.trim()));
      }
  
      function testVorrang() {
        const input = document.getElementById("inputArea").value;
        const vorrangRelationen = parseInput(input);
        const studentenLeben = new Vorrang(vorrangRelationen);
  
        const ergebnisse = [];
        for (const next of studentenLeben) {
          ergebnisse.push(next);
        }
  
        console.log("Sorted:", ergebnisse);
      }
  
      const studentenLeben = new Vorrang([
        ["schlafen", "studieren"],
        ["essen", "studieren"],
        ["studieren", "prüfen"],
      ]);
  
      var arr = [];
      for (const next of studentenLeben) {
        arr.push(next);
      }
      console.assert(
        arr.toString() === ["schlafen", "essen", "studieren", "prüfen"].toString()
      );
    </script>
  </html>
  
  `,
  },
  {
    q: "Stellen Sie bei Ihrer Klasse aus der letzten Aufgabe die topologische Iterierbarkeit mittels Generator her. Wählen Sie eine Implementierung, die universell gültig, also nicht nur für das Beispiel gilt. Verwenden Sie für Ihre Tests console.assert.",
    a: `
  class Vorrang {
      constructor(vorrangRelationen) {
          this.adjList = new Map();
          this.indegree = new Map();
  
          vorrangRelationen.forEach(([u, v]) => {
              if (!this.adjList.has(u)) this.adjList.set(u, []);
              if (!this.adjList.has(v)) this.adjList.set(v, []);
              if (!this.indegree.has(u)) this.indegree.set(u, 0);
              if (!this.indegree.has(v)) this.indegree.set(v, 0);
  
              this.adjList.get(u).push(v);
              this.indegree.set(v, this.indegree.get(v) + 1);
          });
      }
  
      *[Symbol.iterator]() {
          const queue = Array.from(this.indegree).filter(([node, deg]) => deg === 0).map(([node]) => node);
  
          while (queue.length > 0) {
              const node = queue.shift();
              yield node;
  
              this.adjList.get(node).forEach(adjNode => {
                  this.indegree.set(adjNode, this.indegree.get(adjNode) - 1);
                  if (this.indegree.get(adjNode) === 0) {
                      queue.push(adjNode);
                  }
              });
          }
      }
  }
  
  const studentenLeben = new Vorrang([
      ["schlafen", "studieren"],
      ["essen", "studieren"],
      ["studieren", "prüfen"]
  ]);
  var arr = [];
  for (const next of studentenLeben) {
      arr.push(next);
  }
  console.assert(
      arr.toString() === ["schlafen", "essen", "studieren", "prüfen"].toString()
  );
  
    `,
  },
  {
    q: "Erweitern Sie Ihre Vorrang-Klasse um Logging, indem Sie ein Proxy einfügen. Lassen Sie sich vom Logger bei jedem Schritt ausgeben, wie viele der Vorrangrelationen noch übrig bleiben. Verwenden Sie wieder so weit wie möglich Object.keys, Map und Set und für Ihre Tests console.assert.",
    a: `
  class Vorrang {
      constructor(vorrangRelationen) {
          this.adjList = new Map();
          this.indegree = new Map();
  
          vorrangRelationen.forEach(([u, v]) => {
              if (!this.adjList.has(u)) this.adjList.set(u, []);
              if (!this.adjList.has(v)) this.adjList.set(v, []);
              if (!this.indegree.has(u)) this.indegree.set(u, 0);
              if (!this.indegree.has(v)) this.indegree.set(v, 0);
  
              this.adjList.get(u).push(v);
              this.indegree.set(v, this.indegree.get(v) + 1);
          });
      }
  
      *[Symbol.iterator]() {
          const queue = Array.from(this.indegree).filter(([node, deg]) => deg === 0).map(([node]) => node);
  
          while (queue.length > 0) {
              const node = queue.shift();
              yield node;
  
              this.adjList.get(node).forEach(adjNode => {
                  this.indegree.set(adjNode, this.indegree.get(adjNode) - 1);
                  if (this.indegree.get(adjNode) === 0) {
                      queue.push(adjNode);
                  }
              });
          }
      }
  }
  function createVorrangProxy(vorrangRelationen) {
      const vorrang = new Vorrang(vorrangRelationen);
      let verbleibendeRelationen = vorrangRelationen.length;
  
      return new Proxy(vorrang, {
          get(target, prop, receiver) {
              if (typeof target[prop] === 'function' && prop === Symbol.iterator) {
                  return function* () {
                      const generator = target[prop].call(this);
  
                      let result = generator.next();
                      while (!result.done) {
                          console.log(\`Bleibt: \${verbleibendeRelationen}\`);
                          yield result.value;
  
                          verbleibendeRelationen--;
                          result = generator.next();
                      }
                  }
              }
              return Reflect.get(target, prop, receiver);
          }
      });
  }
  
  
  const studentenLeben = createVorrangProxy([
      ["schlafen", "studieren"],
      ["essen", "studieren"],
      ["studieren", "prüfen"]
  ]);
  var arr = [];
  for (const next of studentenLeben) {
      arr.push(next);
  }
  console.assert(
      arr.toString() === ["schlafen", "essen", "studieren", "prüfen"].toString()
  );
    `,
  },
  {
    q: "Schreiben Sie eine rekursive Funktion deepCopy( struct ) als ES6-Ausdruck, sodass beliebig geschachtelte Arrays und Objekte tiefenkopiert werden können. Verwenden Sie zu diesem Zweck: konditionalen ternären Operator Array.map() Object.fromEntries() Object.entries() Verwenden Sie dabei nur Arrow-Funktionen und Ausdrücke, keine Anweisungen, keine Blöcke und keine JSON-Methoden. Nutzen Sie für Ihre Tests console.assert.",
    a: `
  const isObject = obj => obj && typeof obj === 'object';
  
  const deepCopy = struct =>
      Array.isArray(struct) ?
          struct.map(deepCopy) :
          isObject(struct) ?
              Object.fromEntries(Object.entries(struct).map(([k, v]) => [k, deepCopy(v)])) :
              struct;
  
  const original = {
      a: 1,
      b: { c: 2, d: [3, 4, { e: 5 }] },
      f: [6, { g: 7 }]
  };
  
  const copy = deepCopy(original);
  
  console.assert(copy !== original);
  console.assert(copy.b !== original.b);
  `,
  },
]);
kwArr.push(kw47);

const kw48 = parseAsKW("KW 48", [
  {
    q: `Schreiben Sie eine Funktion curry (von Currying), die eine binäre Funktion und ein Argument nimmt, um daraus eine Funktion zu erzeugen, die ein zweites Argument entgegennimmt. Beispiele: add3 = curry(add, 3); add3(4) ergibt 7 und curry(mul, 5)(6) ergibt 30. Erzeugen Sie die inc-Funktion mithilfe von addf oder applyf (aus Aufgabe 4.1) und curry, ohne die Funktion inc selbst zu implementieren. inc(x) soll immer x + 1 zurückgeben und lässt sich natürlich auch direkt implementieren. Das ist aber hier nicht die Aufgabe. Vielleicht schaffen Sie es, drei Varianten der inc-Implementierung zu schreiben? Schreiben Sie eine Funktion methodize, die eine binäre Funktion (z.B. add oder mul) in eine unäre Methode verwandelt. Nach Number.prototype.add = methodize(add) soll (3).add(4) genau 7 ergeben. Schreiben Sie eine Funktion demethodize, die eine unäre Methode (z.B. add oder mul) in eine binäre Funktion umwandelt. demethodize(Number.prototype.add)(5, 6) soll 11 ergeben. Schreiben Sie eine Funktion twice, die eine binäre Funktion in eine unäre Funktion umwandelt, die den einen Parameter zweimal weiter reicht. Also z.B. var double = twice(add); double(11) soll 22 ergeben und var square = twice(mul); square(11) soll mul(11,11) === 121 ergeben. Schreiben Sie eine Funktion composeu, die zwei unäre Funktionen in eine einzelne unäre Funktion transformiert, die beide nacheinander aufruft. Also z.B. soll composeu(double, square)(3) genau 36 ergeben. Schreiben Sie eine Funktion composeb, die zwei binäre Funktionen in eine einzelne Funktion transformiert, die beide nacheinander aufruft. Also z.B. composeb(add, mul)(2, 3, 5) soll 25 ergeben. Schreiben Sie eine Funktion once, die einer anderen Funktion nur einmal erlaubt, aufgerufen zu werden. Also z.B. add_once = once(add); add_once(3, 4) soll beim ersten Mal 7 ergeben, beim zweiten Mal soll jedoch add_once(3, 4) einen Fehlerabbruch bewirken. Schreiben Sie eine Fabrik-Funktion counterf, die zwei Funktionen inc und dec berechnet, die einen Zähler hoch- und herunterzählen. Also z.B. counter = counterf(10). Dann soll counter.inc() genau 11 und counter.dec() wieder 10 ergeben. Schreiben Sie eine rücknehmbare Funktion revocable, die als Parameter eine Funktion nimmt und diese bei Aufruf ausführt. Sobald die Funktion aber mit revoke() zurückgenommen wurde, führt ein erneuter Aufruf zu einem Fehler. Also z.B.: temp = revocable(alert); temp.invoke(7); // führt zu alert(7); temp.revoke(); temp.invoke(8); // Fehlerabbruch! Schreiben Sie ein "Array Wrapper"-Objekt mit den Methoden get, store und append, sodass ein Angreifer keinen Zugriff auf das innere, private Array hat. Also z.B.: my_vector = vector(); my_vector.append(7); my_vector.store(1, 8); my_vector.get(0); // 7 my_vector.get(1); // 8`,
    a: `
  //Q1
  function curry(binaryFunc, firstArg) {
      return function (secondArg) {
          return binaryFunc(firstArg, secondArg);
      };
  }
  var add = (x, y) => x + y;
  var mul = (x, y) => x * y;
  const add3 = curry(add, 3);
  
  console.assert(add3(4), 7)
  console.assert(curry(mul, 5)(6), 30)
  
  //Q2
  function addf(x) {
      return function (y) {
          return x + y;
      };
  }
  
  // 1
  let inc = curry(addf(1), 1);
  console.assert(inc(1), 2)
  
  // 2
  inc = addf(1);
  console.assert(inc(2), 3)
  
  // 3
  inc = function (x) {
      return addf(x)(1);
  };
  console.assert(inc(3), 4)
  
  //Q3
  function methodize(binaryFunc) {
      return function (y) {
          return binaryFunc(this, y);
      };
  }
  
  Number.prototype.add = methodize(function (a, b) { return a + b; });
  console.assert((3).add(4) === 7);
  
  
  //Q4
  function demethodize(method) {
      return function (x, y) {
          return method.call(x, y);
      };
  }
  
  Number.prototype.add = methodize(function (a, b) { return a + b; });
  const demethodizedAdd = demethodize(Number.prototype.add);
  console.assert(demethodizedAdd(5, 6) === 11);
  
  //Q5
  function twice(binaryFunc) {
      return function (x) {
          return binaryFunc(x, x);
      };
  }
  
  var double = twice(function (a, b) { return a + b; });
  console.assert(double(11) === 22);
  
  var square = twice(function (a, b) { return a * b; });
  console.assert(square(11) === 121);
  
  
  //Q6
  function composeu(func1, func2) {
      return function (x) {
          return func2(func1(x));
      };
  }
  
  double = function (x) { return x * 2; };
  square = function (x) { return x * x; };
  const doubleThenSquare = composeu(double, square);
  console.assert(doubleThenSquare(3) === 36);
  
  //Q7
  function composeb(func1, func2) {
      return function (x, y, z) {
          return func2(func1(x, y), z);
      };
  }
  
  add = function (a, b) { return a + b; };
  mul = function (a, b) { return a * b; };
  const addThenMul = composeb(add, mul);
  console.assert(addThenMul(2, 3, 5) === 25);
  
  //Q8
  function once(func) {
      let executed = false;
      return function () {
          if (!executed) {
              executed = true;
              return func.apply(this, arguments);
          } else {
              throw new Error();
          }
      };
  }
  
  const addOnce = once(function (a, b) { return a + b; });
  console.assert(addOnce(3, 4) === 7);
  try {
      addOnce(3, 4);
      console.assert(false, 'Once failed second time');
  } catch (e) {
      console.assert(true);
  }
  
  
  //Q9
  function counterf(x) {
      return {
          inc: function () { return ++x; },
          dec: function () { return --x; }
      };
  }
  
  const counter = counterf(10);
  console.assert(counter.inc() === 11, 'Counter inc failed');
  console.assert(counter.dec() === 10, 'Counter dec failed');
  
  //Q10
  function revocable(func) {
      let revoked = false;
      return {
          invoke: function () {
              if (!revoked) {
                  return func.apply(this, arguments);
              } else {
                  throw new Error("Function has been revoked.");
              }
          },
          revoke: function () {
              revoked = true;
          }
      };
  }
  
  function testAlert(message) {
      console.log("Alert called with message:", message);
      return message;
  }
  const temp = revocable(testAlert);
  temp.invoke(7);
  temp.revoke();
  try {
      temp.invoke(8);
      console.assert(false);
  } catch (e) {
      console.assert(true);
  }
  
  //Q11
  function vector() {
      let array = [];
      return {
          get: function (i) { return array[i]; },
          store: function (i, v) { array[i] = v; },
          append: function (v) { array.push(v); }
      };
  }
  
  const my_vector = vector();
  my_vector.append(7);
  my_vector.store(1, 8);
  console.assert(my_vector.get(0) === 7);
  console.assert(my_vector.get(1) === 8);
    `,
  },
  {
    q: "Schreiben Sie in JavaScript eine Textanalyse. Ermitteln Sie die häufigsten Begriffe im Text Plagiatsresolution. Filtern Sie dabei alle Stoppworte und HTML-Tags. Reduzieren Sie das Ergebnis auf die 3 häufigsten Begriffe. Hinweis: Eine größere Stoppwort-Liste finden Sie auch unter github.com/stopwords-iso/stopwords-de.",
    a: `
  const text = \`Plagiatsresolution und -maßnahmen Resolution zum akademischen Ethos und zu den akademischen Standards In guter Tradition und anlässlich der öffentlichen Diskussion zum Plagiatsthema sieht sich die Hochschule Bonn-Rhein-Sieg in der Pflicht, ihre Position klar und eindeutig zu bekunden und hochschulweit Maßnahmen einzuleiten. 1. Die Hochschule Bonn-Rhein-Sieg bekennt sich mit dieser Resolution öffentlich zum akademischen Ethos und den akademischen Standards. 2. Die Hochschule Bonn-Rhein-Sieg sieht sich verpflichtet, alle Studierende frühzeitig im Studium sowohl über den wissenschaftlichen Auftrag und den akademischen Ethos als auch über die Konsequenzen seiner Missachtung aufzuklären. In allen Studiengängen wird intensiv in die wissenschaftliche Arbeits- und Denkweise eingeführt und über den akademischen Ethos und die akademischen Standards klar und eindeutig aufgeklärt. 3. In einer Selbstverpflichtungserklärung zum akademischen Ethos geben alle Studierende der Hochschule Bonn-Rhein-Sieg spätestens gegen Ende des ersten Studienjahres zum Ausdruck, dass sie sich von den Dozentinnen und Dozenten der Hochschule Bonn-Rhein-Sieg hinreichend über den akademischen Ethos und die akademischen Standards aufgeklärt sind und diese beachten werden. Der Senat befürwortete in seiner Sitzung am 03.05.2012 die Resolution in der o.g. Fassung. Eckpunkte zur Plagiatsprüfung Der Senat empfiehlt: 1. Die Aufklärung und das Bekenntnis zum akademischen Ethos und den akademischen Standards muss fester Bestandteil aller Curricula aller Studiengänge im ersten Studienjahr sein. Alle Curricula aller Studiengänge werden darauf hin geprüft und ggfs. ergänzt. 2. Alle Abschlussarbeiten werden auf Plagiate geprüft. 3. Alle Abschlussarbeiten mit Plagiaten werden grundsätzlich als Fehlversuch gewertet. 4. Die Entscheidung, ob die Arbeit Plagiate enthält, liegt zuerst bei den Gutachterinnen und Gutachtern. Der Nachweis in einem Gutachten reicht. 5. Alle Abschlussarbeiten werden grundsätzlich auch in elektronischer Form (PDF-Format und Originalformat wie Word, OpenOffice, ...) eingereicht. 6. Alle Abschlussarbeiten ohne Sperrvermerk werden einem vom Fachbereich definierten Kreis zur Einsicht zur Verfügung gestellt. Alle Abschlussarbeiten sollten nach Möglichkeit grundsätzlich zur Veröffentlichung freigegeben werden. Wissenschaft zielt auf Veröffentlichung ab. Nichtveröffentlichung sollte nur in begründeten und durch den Prüfungsausschuss genehmigten Ausnahmefällen geschehen. 7. Im Bereich von Seminar-, Hausarbeiten und Praktikumsberichten behält sich die Hochschule stichprobenartige Plagiatsprüfungen vor. Selbstverpflichtungserklärung der Studierenden: Eine akademische Arbeit stellt eine individuelle Leistung dar, die eigenständig und allein auf Basis der im Literaturverzeichnis angegebenen Quellen erstellt wurde und in der alle Zitate als solche gekennzeichnet sind. "Ich erkläre hiermit, dass ich den akademischen Ehrencodex kenne und über die Folgen einer Missachtung oder Verletzung aufgeklärt worden bin."\`;
  const stop = ["a", "ab", "aber", "ach", "acht", "achte", "achten", "achter", "achtes", "ag", "alle", "allein", "allem", "allen", "aller", "allerdings", "alles", "allgemeinen", "als", "also", "am", "an", "ander", "andere", "anderem", "anderen", "anderer", "anderes", "anderm", "andern", "anderr", "anders", "au", "auch", "auf", "aus", "ausser", "ausserdem", "außer", "außerdem", "b", "bald", "bei", "beide", "beiden", "beim", "beispiel", "bekannt", "bereits", "besonders", "besser", "besten", "bin", "bis", "bisher", "bist", "c", "d", "d.h", "da", "dabei", "dadurch", "dafür", "dagegen", "daher", "dahin", "dahinter", "damals", "damit", "danach", "daneben", "dank", "dann", "daran", "darauf", "daraus", "darf", "darfst", "darin", "darum", "darunter", "darüber", "das", "dasein", "daselbst", "dass", "dasselbe", "davon", "davor", "dazu", "dazwischen", "daß", "dein", "deine", "deinem", "deinen", "deiner", "deines", "dem", "dementsprechend", "demgegenüber", "demgemäss", "demgemäß", "demselben", "demzufolge", "den", "denen", "denn", "denselben", "der", "deren", "derer", "derjenige", "derjenigen", "dermassen", "dermaßen", "derselbe", "derselben", "des", "deshalb", "desselben", "dessen", "deswegen", "dich", "die", "diejenige", "diejenigen", "dies", "diese", "dieselbe", "dieselben", "diesem", "diesen", "dieser", "dieses", "dir", "doch", "dort", "drei", "drin", "dritte", "dritten", "dritter", "drittes", "du", "durch", "durchaus", "durfte", "durften", "dürfen", "dürft", "e", "eben", "ebenso", "ehrlich", "ei", "ei,", "eigen", "eigene", "eigenen", "eigener", "eigenes", "ein", "einander", "eine", "einem", "einen", "einer", "eines", "einig", "einige", "einigem", "einigen", "einiger", "einiges", "einmal", "eins", "elf", "en", "ende", "endlich", "entweder", "er", "ernst", "erst", "erste", "ersten", "erster", "erstes", "es", "etwa", "etwas", "euch", "euer", "eure", "eurem", "euren", "eurer", "eures", "f", "folgende", "früher", "fünf", "fünfte", "fünften", "fünfter", "fünftes", "für", "g", "gab", "ganz", "ganze", "ganzen", "ganzer", "ganzes", "gar", "gedurft", "gegen", "gegenüber", "gehabt", "gehen", "geht", "gekannt", "gekonnt", "gemacht", "gemocht", "gemusst", "genug", "gerade", "gern", "gesagt", "geschweige", "gewesen", "gewollt", "geworden", "gibt", "ging", "gleich", "gott", "gross", "grosse", "grossen", "grosser", "grosses", "groß", "große", "großen", "großer", "großes", "gut", "gute", "guter", "gutes", "h", "hab", "habe", "haben", "habt", "hast", "hat", "hatte", "hatten", "hattest", "hattet", "heisst", "her", "heute", "hier", "hin", "hinter", "hoch", "hätte", "hätten", "i", "ich", "ihm", "ihn", "ihnen", "ihr", "ihre", "ihrem", "ihren", "ihrer", "ihres", "im", "immer", "in", "indem", "infolgedessen", "ins", "irgend", "ist", "j", "ja", "jahr", "jahre", "jahren", "je", "jede", "jedem", "jeden", "jeder", "jedermann", "jedermanns", "jedes", "jedoch", "jemand", "jemandem", "jemanden", "jene", "jenem", "jenen", "jener", "jenes", "jetzt", "k", "kam", "kann", "kannst", "kaum", "kein", "keine", "keinem", "keinen", "keiner", "keines", "kleine", "kleinen", "kleiner", "kleines", "kommen", "kommt", "konnte", "konnten", "kurz", "können", "könnt", "könnte", "l", "lang", "lange", "leicht", "leide", "lieber", "los", "m", "machen", "macht", "machte", "mag", "magst", "mahn", "mal", "man", "manche", "manchem", "manchen", "mancher", "manches", "mann", "mehr", "mein", "meine", "meinem", "meinen", "meiner", "meines", "mensch", "menschen", "mich", "mir", "mit", "mittel", "mochte", "mochten", "morgen", "muss", "musst", "musste", "mussten", "muß", "mußt", "möchte", "mögen", "möglich", "mögt", "müssen", "müsst", "müßt", "n", "na", "nach", "nachdem", "nahm", "natürlich", "neben", "nein", "neue", "neuen", "neun", "neunte", "neunten", "neunter", "neuntes", "nicht", "nichts", "nie", "niemand", "niemandem", "niemanden", "noch", "nun", "nur", "o", "ob", "oben", "oder", "offen", "oft", "ohne", "ordnung", "p", "q", "r", "recht", "rechte", "rechten", "rechter", "rechtes", "richtig", "rund", "s", "sa", "sache", "sagt", "sagte", "sah", "satt", "schlecht", "schluss", "schon", "sechs", "sechste", "sechsten", "sechster", "sechstes", "sehr", "sei", "seid", "seien", "sein", "seine", "seinem", "seinen", "seiner", "seines", "seit", "seitdem", "selbst", "sich", "sie", "sieben", "siebente", "siebenten", "siebenter", "siebentes", "sind", "so", "solang", "solche", "solchem", "solchen", "solcher", "solches", "soll", "sollen", "sollst", "sollt", "sollte", "sollten", "sondern", "sonst", "soweit", "sowie", "später", "startseite", "statt", "steht", "suche", "t", "tag", "tage", "tagen", "tat", "teil", "tel", "tritt", "trotzdem", "tun", "u", "uhr", "um", "und", "uns", "unse", "unsem", "unsen", "unser", "unsere", "unserer", "unses", "unter", "v", "vergangenen", "viel", "viele", "vielem", "vielen", "vielleicht", "vier", "vierte", "vierten", "vierter", "viertes", "vom", "von", "vor", "w", "wahr", "wann", "war", "waren", "warst", "wart", "warum", "was", "weg", "wegen", "weil", "weit", "weiter", "weitere", "weiteren", "weiteres", "welche", "welchem", "welchen", "welcher", "welches", "wem", "wen", "wenig", "wenige", "weniger", "weniges", "wenigstens", "wenn", "wer", "werde", "werden", "werdet", "weshalb", "wessen", "wie", "wieder", "wieso", "will", "willst", "wir", "wird", "wirklich", "wirst", "wissen", "wo", "woher", "wohin", "wohl", "wollen", "wollt", "wollte", "wollten", "worden", "wurde", "wurden", "während", "währenddem", "währenddessen", "wäre", "würde", "würden", "x", "y", "z", "z.b", "zehn", "zehnte", "zehnten", "zehnter", "zehntes", "zeit", "zu", "zuerst", "zugleich", "zum", "zunächst", "zur", "zurück", "zusammen", "zwanzig", "zwar", "zwei", "zweite", "zweiten", "zweiter", "zweites", "zwischen", "zwölf", "über", "überhaupt", "übrigens"];
  
  const words = text.split(' ')
      .map(word => word.toLowerCase())
      .filter(word => word && !stop.includes(word) && word.length > 1)
      .reduce((freq, word) => {
          freq[word] = (freq[word] || 0) + 1;
          return freq;
      }, {});
  
  console.log(
      Object.entries(words)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 3)
          .map(entry => entry[0])
  )
    `,
  },
]);
kwArr.push(kw48);

const kw49 = parseAsKW("KW 49", [
  {
    q: `Erstellen Sie auf Ihrem lokalen Server (localhost) zwei Text-Dateien A.txt und B.txt mit ungefähr gleich vielen Zeilen. Laden Sie mit der fetch-API parallel beide Text-Dateien vom Server. Geben Sie auf einer Webseite den Inhalt beider Dateien zeilenweise aus, wobei der Anfang der Zeile aus A.txt und das Ende aus B.txt stammen soll. Die beiden Dateien sollen also zeilenweise konkateniert werden. Erzielen Sie max. Geschwindigkeit durch maximale Parallelität. Achten Sie gleichzeitig auf Korrektheit. Verwenden Sie dabei ausschließlich die Promise-API ohne async/await.`,
    a: `
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <script>
      function fetchTextFile(url) {
        return fetch(url).then((response) => response.text());
      }

      function combineAndDisplayLines(urlA, urlB) {
        Promise.all([fetchTextFile(urlA), fetchTextFile(urlB)])
          .then((texts) => {
            const linesA = texts[0].split("\n");
            const linesB = texts[1].split("\n");
            const minLength = Math.min(linesA.length, linesB.length);
            const combinedLines = [];

            for (let i = 0; i < minLength; i++) {
              combinedLines.push(linesA[i] + linesB[i]);
            }

            const contentDiv = document.getElementById("content");
            combinedLines.forEach((line) => {
              const paragraph = document.createElement("p");
              paragraph.textContent = line;
              contentDiv.appendChild(paragraph);
            });
          })
          .catch((error) => {
            console.log("Error");
          });
      }

      combineAndDisplayLines("A.txt", "B.txt");
    </script>
  </body>
</html>
    `,
  },
  {
    q: `Lösen Sie die letzte Aufgabe mit async/await statt Promise.`,
    a: `
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <script>
      async function fetchTextFile(url) {
        const response = await fetch(url);
        return response.text();
      }

      async function combineAndDisplayLines(urlA, urlB) {
        const [textA, textB] = await Promise.all([
          fetchTextFile(urlA),
          fetchTextFile(urlB),
        ]);
        const linesA = textA.split("\n");
        const linesB = textB.split("\n");
        const minLength = Math.min(linesA.length, linesB.length);
        const contentDiv = document.getElementById("content");

        for (let i = 0; i < minLength; i++) {
          const paragraph = document.createElement("p");
          paragraph.textContent = linesA[i] + linesB[i];
          contentDiv.appendChild(paragraph);
        }
      }

      combineAndDisplayLines("A.txt", "B.txt");
    </script>
  </body>
</html>
`,
  },
  {
    q: `Schreiben Sie einen Navigator für die Fachbegriffe des WWW zu den Oberthemen HTML, CSS und JavaScript. Im Hauptmenü sollen diese 3 Oberthemen zur Auswahl stehen. Im Untermenü soll eine zugehörige Liste von Fachbegriffen zum jeweiligen ausgewählten Oberthema stehen. In der Mitte soll eine Dokumentation zum ausgewählten Fachbegriff erscheinen. Schreiben Sie in HTML und CSS nur den responsiven Rahmen für einen solchen WWW-Navigator. Dabei können Sie auch ein schöneres Layout als das hier gezeigte erstellen. Die Inhalte sollen in einer JSON-Datei extern gelagert werden. Mit der fetch-API soll die JSON-Datei asynchron nicht-blockierend geladen werden, und zwar nur einmal, nicht mehrfach. (d.h. Sparen Sie Internet-Bandbreite.) Sobald die Inhalte angekommen sind, sollen sie im Browser auch sofort angezeigt werden. Fügen Sie selbst in die JSON-Datei zusätzliche Inhalte zu Themen der Vorlesung als Strings beispielhaft ein. Wenn Sie Inhalte aus fremden Quellen kopieren, so schreiben Sie bitte stets die Quelle als externe Ressource hinzu. Diese soll dann auf der rechten Seite im WWW-Navigator erscheinen.`,
    a: `
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WWW-Navigator</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        height: 100vh;
      }

      #container {
        display: flex;
        flex: 1;
        flex-direction: row;
      }

      #main-menu,
      #sub-menu,
      #content,
      #references {
        padding: 20px;
        border: 1px solid #ccc;
        margin: 10px;
      }

      #main-menu,
      #sub-menu {
        flex-basis: 20%;
      }

      #content {
        flex-grow: 2;
      }

      #references {
        flex-basis: 30%;
      }

      @media (max-width: 768px) {
        #container {
          flex-direction: column;
        }

        #main-menu,
        #sub-menu,
        #content,
        #references {
          flex-basis: auto;
        }
      }
    </style>
  </head>
  <body>
    <div id="container">
      <nav id="main-menu"></nav>
      <nav id="sub-menu"></nav>
      <section id="content"></section>
      <aside id="references"></aside>
    </div>
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        fetch("/demos/uebung9.json")
          .then((data) => data.json())
          .then((data) => populateMainMenu(data));
      });

      function populateMainMenu(data) {
        const mainMenu = document.getElementById("main-menu");
        for (const topic in data) {
          const button = document.createElement("button");
          button.textContent = topic.toUpperCase();
          button.onclick = () => populateSubMenu(data[topic]);
          mainMenu.appendChild(button);
        }
      }

      function populateSubMenu(topicData) {
        const subMenu = document.getElementById("sub-menu");
        subMenu.innerHTML = "";

        for (const key in topicData) {
          const button = document.createElement("button");
          button.textContent = key;
          button.onclick = () => displayContent(topicData[key]);
          subMenu.appendChild(button);
        }
      }

      function displayContent(itemData) {
        const content = document.getElementById("content");
        const references = document.getElementById("references");
        content.innerHTML = \`< h2 > \${itemData.content}</ > \`;
        references.innerHTML = "";

        const refList = document.createElement("ul");
        itemData.references.forEach((url) => {
          const listItem = document.createElement("li");
          listItem.innerHTML = \`< a href = "\${url}" target = "_blank" > \${url}</ > \`;
          refList.appendChild(listItem);
        });
        references.appendChild(refList);
      }
    </script>
  </body>
</html>

`,
    demo: "uebung9.html",
  },
]);
kwArr.push(kw49);

const kw50 = parseAsKW("KW 50", [
  {
    q: `Codieren Sie eine HTML-Datei mit Inline SVG, sodass sich folgendes Aussehen ergibt. Fügen Sie als Hover-Effekt eine CSS-Animation hinzu, die die Größe der SVG-Grafik verdoppelt, wenn man mit dem Cursor über die Grafik geht.`,
    a: `
<!DOCTYPE html>
  <html >
    <head>
      <style>
        svg:hover {
          width: 400px;
          height: 360px;
          transition: 500ms;
        }
      </style>
    </head>
    <body>
      <svg width="200" height="180" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#d76d77" />
        <text x="30%" y="20%" dominant-baseline="middle" text-anchor="middle" font-size="48" fill="white">Use</text>
        <line x1="10%" y1="35%" x2="90%" y2="35%" stroke="white" stroke-width="3"/>
        <text x="30%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="48" fill="white">The</text>
        <line x1="10%" y1="70%" x2="90%" y2="70%" stroke="white" stroke-width="3"/>
        <text x="55%" y="90%" dominant-baseline="middle" text-anchor="middle" font-size="48" fill="white">Platform</text>
      </svg>
    </body>
</html>`,
  },
  {
    q: `Implementieren Sie ein eigenes Balkendiagramm mit HTML, Inline SVG, CSS und JavaScript. Geben Sie die Daten für das Balkendiagramm im JSON-Format vor. Nehmen Sie als Beispieldaten Marktdaten von der Bundesnetzagentur. Animieren Sie die Grafik (siehe z.B. Highchart Bar Chart).`,
    a: `
  <!DOCTYPE html>
  <html >
    <head>
      <style>
        .bar {
          fill: steelblue;
          transition: all 0.5s ease-out;
        }
      </style>
      <script>
        const data = [
          {
            date: "30.11.2023",
            start: "00:00",
            end: "01:00",
            price: 104.79,
          },
          {
            date: "30.11.2023",
            start: "01:00",
            end: "02:00",
            price: 104.52,
          },
          {
            date: "30.11.2023",
            start: "02:00",
            end: "03:00",
            price: 102.2,
          },
          {
            date: "30.11.2023",
            start: "03:00",
            end: "04:00",
            price: 100.0,
          },
        ];
  
        window.onload = function () {
          animateBars();
        };
  
        function animateBars() {
          const bars = document.querySelectorAll(".bar");
          bars.forEach((bar, index) => {
            bar.setAttribute("width", (data[index].price ))
          });
        }
      </script>
    </head>
    <body>
      <svg width="400" height="150">
        <rect width="100%" height="100%" fill="white" />
  
        <rect class="bar" y="10" width="0" height="20" />
        <rect class="bar" y="40" width="0" height="20" />
        <rect class="bar" y="70" width="0" height="20" />
        <rect class="bar" y="100" width="0" height="20" />
      </svg>
    </body>
  </html>`,
  },
  {
    q: `Implementieren Sie das Spiel Tic-Tac-Toe als HTML-Datei mit Inline SVG, CSS und JS.`,
    demo: "uebung10.html",
    a: `
    <!DOCTYPE html>
    <head>
        <style>
            #gameBoard {
                display: flex;
                justify-content: center;
                margin-top: 20px;
            }
    
            svg {
                border: 1px solid black;
            }
    
            .cell {
                fill: white;
                stroke: black;
            }
        </style>
    </head>
    <body>
        <div id="gameBoard">
            <svg width="300" height="300" id="ticTacToeBoard">
                <line x1="100" y1="0" x2="100" y2="300" stroke="#000" stroke-width="3"/>
                <line x1="200" y1="0" x2="200" y2="300" stroke="#000" stroke-width="3"/>
                <line x1="0" y1="100" x2="300" y2="100" stroke="#000" stroke-width="3"/>
                <line x1="0" y1="200" x2="300" y2="200" stroke="#000" stroke-width="3"/>
    
                
                <rect class="cell" x="0" y="0" width="100" height="100" data-cell-index="0"/>
                <rect class="cell" x="100" y="0" width="100" height="100" data-cell-index="1"/>
                <rect class="cell" x="200" y="0" width="100" height="100" data-cell-index="2"/>
                <rect class="cell" x="0" y="100" width="100" height="100" data-cell-index="3"/>
                <rect class="cell" x="100" y="100" width="100" height="100" data-cell-index="4"/>
                <rect class="cell" x="200" y="100" width="100" height="100" data-cell-index="5"/>
                <rect class="cell" x="0" y="200" width="100" height="100" data-cell-index="6"/>
                <rect class="cell" x="100" y="200" width="100" height="100" data-cell-index="7"/>
                <rect class="cell" x="200" y="200" width="100" height="100" data-cell-index="8"/>
            </svg>
        </div>
        <script>
            let currentPlayer = 'X';
            let board = ['', '', '', '', '', '', '', '', ''];
    
            function drawSymbol(x, y, symbol) {
                const ns = "http://www.w3.org/2000/svg";
                let element;
                if (symbol === 'X') {
                    element = document.createElementNS(ns, 'text');
                    element.setAttribute('x', x + 25);
                    element.setAttribute('y', y + 75);
                    element.textContent = 'X';
                } else {
                    element = document.createElementNS(ns, 'circle');
                    element.setAttribute('cx', x + 50);
                    element.setAttribute('cy', y + 50);
                    element.setAttribute('r', 40);
                    element.style.fill = 'none';
                    element.style.stroke = 'black';
                }
                document.getElementById('ticTacToeBoard').appendChild(element);
            }
    
            function cellClick(e) {
                const cellIndex = e.target.getAttribute('data-cell-index');
                if (board[cellIndex] !== '' || checkWinner()) return;
    
                board[cellIndex] = currentPlayer;
                drawSymbol(e.target.x.baseVal.value, e.target.y.baseVal.value, currentPlayer);
    
                if (checkWinner()) {
                    alert(\`\${currentPlayer} hat gewonnen!\`);
                    return;
                }
    
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
    
            function checkWinner() {
                const winConditions = [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6]
                ];
                return winConditions.some(condition => {
                    return condition.every(index => {
                        return board[index] === currentPlayer;
                    });
                });
            }
    
            document.querySelectorAll('.cell').forEach(cell => {
                cell.addEventListener('click', cellClick);
            });
        </script>
    </body>
    </html>
    `,
  },
]);
kwArr.push(kw50);

const kw51 = parseAsKW("KW 51", [{
  q: `
Gibt es in TypeScript statische Klassen? Erläutern Sie den Unterschied von TypeScript zu anderen objekt-orientierten, statisch typisierten Programmiersprachen wie Java und C#.
  `,
  a: `
TypeScript unterstützt wie Java und C# die objektorientierte Programmierung und statische Typisierung. TypeScript ist im Wesentlichen eine Erweiterung von JavaScript, das um statische Typisierung erweitert wurde. Dies steht im Gegensatz zu Java und C#, die eigenständige Sprachen mit eigenen Laufzeitumgebungen sind. Das Typsystem von TypeScript  konzentriert sich auf die Form der Daten, im Gegensatz zu Java und C#, die ein nominales Typsystem auf der Grundlage expliziter Deklarationen verwenden. In TypeScript ist es nicht möglich, eine vollständig statische Klasse auf die gleiche Weise zu erstellen. Allerdings ist eine Klasse, in der alle Mitglieder statisch sind, möglich
  `
},
{
  q: `
Gegeben sei folgendes fehlerbehaftete JavaScript-Programm. Ergänzen Sie dieses um möglichst viele Typisierungen und übersetzen Sie es in ein TypeScript-Programm.

const add = (x,y) => x+y;
const equals = (x,y) => x===y;
console.log( add(1,2) );
console.log( add(true, true ) );
console.log( add(true, false ) );
var x = y = 1;
console.log( add(equals(x,y), equals(y,x)) );

Was ist der Fehler im gegebenen JavaScript-Code? Welche Fehler meldet TypeScript? Geben Sie weitere Beispiele an, wie TypeScript bei der Fehlersuche helfen kann.
  `,
  a: `
Keine Errors bei JS

TS:
const add = (x: number|boolean,y: number|boolean) => x+y;
const equals = (x: number,y: number) => x===y;

-Operator '+' cannot be applied to types 'number | boolean' and 'number | boolean'
-Cannot find name 'y'.

In js haben wir Ergebnisse erhalten, die wir wahrscheinlich nicht haben wollten, was zu logischen Fehlern führen kann, aber nicht zu Fehlern, da es keine Tests für diese gibt. In Typescript wurde ermittelt, welche Probleme sie verursachen könnten.`
},
{
  q:
    `
Auf Deno ist TypeScript ohne Übersetzung direkt ablauffähig. Deno ist also die Runtime Engine für TypeScript.
Implementieren Sie in TypeScript möglichst umfangreich statisch typisiert ein auf Deno ablauffähiges Programm server.ts, das mit deno run --allow-net server.ts gestartet werden kann und das die Marktdaten von der Bundesnetzagentur einliest, Minimum, Maximum, Durchschnitt und Summe berechnet und diese dann auf einer Webseite ausgibt.
`,
  a: `
import { serve } from "https://deno.land/std/http/server.ts";

async function fetchData(): Promise<number[]> {
  const response = await fetch("https://www.smard.de/app/chart_data/4169/DE/4169_DE_hour_1700434800000.json");
  const data = await response.json();
  return data.series.map((item: [number, number]) => item[1]);
}

function calculateStats(numbers: number[]) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const avg = sum / numbers.length;

  return { min, max, avg, sum };
}

async function handleRequest(req: Request): Promise<Response> {
  const data = await fetchData();
  const stats = calculateStats(data);

  const body = \`
    <h1>Statistik</h1>
    <p>Minimum: \${stats.min}</p>
    <p>Maximum: \${stats.max}</p>
    <p>Durchschnitt: \${stats.avg}</p>
    <p>Summe: \${stats.sum}</p>
  \`;

  return new Response(body, {
    headers: { "content-type": "text/html" },
  });
}

console.log("Server running on: http://localhost:8000");
serve(handleRequest);

  `
}
])
kwArr.push(kw51)

spreadoperator = parseAsKW("Spread Operator", [
  {q: `... Operator ermöglicht, ein iterierbares Objekt (wie ein Array) oder ein Objekt in einzelne Elemente oder Eigenschaften zu expandieren oder zu "verbreiten". Der Spread-Operator hat vielfältige Anwendungen
  `, a: `
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // [1, 2, 3]

const originalObj = { a: 1, b: 2 };
const copiedObj = { ...originalObj };
console.log(copiedObj); // Output: { a: 1, b: 2 }

function captureArgs(...args) {
  console.log(args);
}
captureArgs(1, 2, 3); // Output: [1, 2, 3]

  `}
])

kwArr.push(spreadoperator)