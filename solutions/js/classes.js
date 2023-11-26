class QuestionAndAnswer {
    constructor(q, a, demo) {
        this.q = q;
        this.a = a;
        this.demo = demo;
    }
}

class KalenderWoche {
    constructor(title, qaArray) {
        this.title = title;
        this.qaArray = qaArray
    }

    static changeSelectedElement = (function () {
        var currentElement
        return (element) => {
            if (currentElement) {
                currentElement.classList.remove("active")
            }
            currentElement = element
            currentElement.classList.add("active")
        }
    })()

    renderSelf(element) {
        KalenderWoche.changeSelectedElement(element)
        const entrypoint = document.querySelector('#entrypoint');
        entrypoint.innerHTML = '';
        this.qaArray.forEach((item, index) => {
            const div = document.createElement('div');
            const question = document.createElement('p');
            question.classList.add('question')
            question.textContent = `${index + 1} - ${item.q}`;

            if (item.demo) {
                const demo = document.createElement('a')
                demo.classList.add('demo')
                demo.textContent = 'Im neuen Tab öffnen'
                demo.setAttribute('target', '_blank')
                demo.setAttribute('href', `./demos/${item.demo}`)
                question.appendChild(demo)

            }

            div.appendChild(question);

            const answer = document.createElement('textarea');
            answer.textContent = item.a;
            answer.setAttribute('rows', item.a.split('\n').length);
            answer.style = "width: 100%";
            answer.setAttribute('disabled', true);
            div.appendChild(answer);



            const linebreak = document.createElement('hr')
            div.appendChild(linebreak)

            entrypoint.appendChild(div);
        });
    }
}