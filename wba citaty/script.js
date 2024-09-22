const quotes = [
            "Jediné, co mi stojí v cestě, je gravitace.",
            "Nikdy jsem nepřešel ulici rychleji, než když jsem viděl Wi-Fi na druhé straně.",
            "Nevěřím v pondělky, jsem spíše člověk na 'zítra'.",
            "Uklidím si pokoj, až najdu mapu.",
            "Pátek je jako hrdina, který přijde zachránit den na poslední chvíli.",
            "Jediný způsob, jak se dostat z postele, je snít, že jsi už venku.",
            "Ranní ptáče dál doskáče... ale já můžu dospat odpoledne.",
            "Někdy mám pocit, že jsem si užil dětství více než je legální.",
            "Prokrastinace je umění odložit věci tak dlouho, dokud není příliš pozdě na to, aby se udělaly.",
            "Nikdo nikdy nezemřel odpočinkem... a já nejsem první.",
            "Kdybych měl cent za každý neplánovaný úkol, byl bych bohatý... na úkoly.",
            "Šťastný člověk se probudí s budíkem nastaveným na volný den.",
            "Proč být dokonalý, když můžeš být šťastný?",
            "Ráno je čas, kdy si uvědomíš, jak skvělá byla včera noc.",
            "Pokud máš sen, který tě probudí dřív než budík, nezasloužíš si ráno."
];

function Task8() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

window.onload = Task8;