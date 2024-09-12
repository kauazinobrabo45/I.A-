const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que você se depara com um grande robô altamente inteligente, capaz de responder qualquer pergunta com sua IA. O que você pensaria?",
        alternativas: [
            {
                texto: "Isso é incrível!!",
                afirmacao: "Quis saber mais sobre essa super IA. "
            },
            {
                texto: "Isso é assustador demais!",
                afirmacao: "Nã quis aprender usar IA."
            }
        ]
    },
    {
        enunciado: "Após descobrir essa nova técnologia com IA, você decide passar esse conhecimento a diante em uma sala de aula. Como você divulgaria essa aula totalmente inovadora?",
        alternativas: [
            {
                texto: "Usaria, as redes sociais e criaria um site para divulgar o projeto inovador sobre IA.",
                afirmacao: "Conseguiu atrair um bom público para sua aula."
            },
            {
                texto: "Opita por não usar as redes sociais para divulgação e distribui folhetos na rua em busca de alunos.",
                afirmacao: "sentiu que essa não foi uma boa escolha após aparecer somente 5 alunos."
            }
        ]
    },
    {
        enunciado: "Após a primeira aula sobre IA, alguns alunos se questionam se isso realmente é verdade, oque você faria?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA realmente funciona e pode ajudar.",
                afirmacao: "Com isso você consegue manter os alunos nas aulas sobre IA."
            },
            {
                texto: "Você faz um discurso não muito convincente.",
                afirmacao: "Com isso vários alunos vão embora por não acreditarem que a IA possa ser útil."
            }
        ]
    },
    {
        enunciado: "Você passa um trabalho para seus alunos desenvolverem um site sobre a IA.",
        alternativas: [
            {
                texto: "Todos os seus alunos fizeram esse trabalho o trabalho.",
                afirmacao: "Você percebe que seus alunos estão interessados no assunto, então você decide formar um projeto para desenvolvere essa IA, para beneficio humano."
            },
            {
                texto: "Poucos alunos entragaram o trabalho.",
                afirmacao: "Você desiste de tudo isso por pensar que ninguém estava interessado ou iria se interessar pelo assunto."
            }
        ]
    },
    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();