const kwArr = []
function parseAsKW(title, arr) {
  const qaObjects = arr.map(item => new QuestionAndAnswer(item.q, item.a, item.demo));

  return new KalenderWoche(title, qaObjects);
}
const kw41Data = [
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
Cache-Control header kann benutzt werden`
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
Welche Attribute sollte man bei Bildern wie verwenden?`,
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
]

const kw41 = parseAsKW('KW 41', kw41Data)

kwArr.push(kw41)

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

