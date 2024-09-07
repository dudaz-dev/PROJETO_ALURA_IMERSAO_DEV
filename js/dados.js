let dados = [
    {
        //gatos
        nome: "Felpudo",
        imagemUrl: "https://via.placeholder.com/150",
        especie: "gato",
        idade: "4 anos",
        descricao: "Rex é leal e protetor. Excelente para quem busca um companheiro fiel.",
        linkAdocao: "https://exemplo.com/adote-rex",
        tags: "gato gatinho felino cat felpudo miau adotar pet vira-lata rua companheiro amigo felino adoção melhor amigo "
    },
    //cachorros
    {
        nome: "Raissa",
        imagemUrl: "/img/Raissa.jpg",
        especie: "cão",
        idade: "Aproximadamente 5 meses",
        descricao: "Oi tios, meu nome é Raissa, mas vou achar lindo se vocês me chamarem de fadinha. Sou alegre, amorosa e adoro brincadeiras radicais! Brincadeiras a parte, estou aguardando uma família amorosa e responsável pra cuidar de mim a vida toda. Que tal me conhecer?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/296935",
        tags: "jovem cao cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Flavinha",
        imagemUrl: "/img/Flavinha.jpg",
        especie: "cão",
        idade: "Aproximadamente 5 meses",
        descricao: "Tios, meu nome é Flavinha, sou medalhista em bagunça! Adoro brincar, correr e dormir. Ah! E carinho e petisco também me deixam muito feliz. Que tal me adotar?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/296935",
        tags: "jovem cao cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Dolinha",
        imagemUrl: "/img/Dolinha.jpg",
        especie: "cão",
        idade: "7 anos",
        descricao: "Tios, sou pequenina, bonitinha, aceito carinho, mas só na cabeça viu! Ah, não gosto muito que fiquem me segurando, mas tenho certeza que vou amar um sofá quentinho pra ficar do seu lado. Me mostra o que é ter uma família? ",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277564",
        tags: "idoso cao cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Vandinha",
        imagemUrl: "/img/Vandinha.jpg",
        especie: "cão",
        idade: "2 anos",
        descricao: "Oi titios, sou linda, agitada e adoro ganhar atenção. Só preciso de paciência, pois sou um pouco medrosa quando acabo de conhecer pessoas novas. Será que você vai me dar a família que tanto procuro?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277564",
        tags: "jovem cao cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Rabugento",
        imagemUrl: "/img/Rabugento.jpg",
        especie: "cão",
        idade: "8 anos",
        descricao: "Olá pessoal, vim aqui me apresentar. Sou desconfiado com quem não conheço e por causa disso, preciso de uma família que seja paciente e amorosa. Sei que é muito difícil, mas não vou perder a esperança de aparecer um adotante pra mim. Que tal me dar uma chance?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277564",
        tags: "idoso cao cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Coringa",
        imagemUrl: "/img/Coringa.jpeg",
        especie: "cão",
        idade: "11 anos",
        descricao: "Oie! Eu sou um menino agitado. Cheguei aqui bastante assustado, mas os tios daqui já ganharam meu coração. Gosto de passear e aceito carinho de quem eu conheço. Apesar de aprender por aqui que posso confiar nas pessoas, preciso de um pouco de paciência para interagir, aí sim me solto. Que tal me dar uma chance?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277564",
        tags: "idoso cao cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Spike",
        imagemUrl: "/img/Spike (1).jpg",
        especie: "cão",
        idade: "9 anos",
        descricao: "Meu nome é Spike, já sou adulto, mas com jeitinho de filhotão e vim pra cá há cerca de dois anos. Sou um pouco temperamental e não me dou muito bem com as crianças. Mas gosto muito de brincadeiras com os tios grandões e com alguns cachorrinhos. Que tal bater uma bolinha comigo?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277564",
        tags: "cao idoso cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Jamal",
        imagemUrl: "/img/jamal.jpeg",
        especie: "cão",
        idade: "9 anos",
        descricao: "Oi, galera bacana! me chamo Jamal. Sou um jovem senhor, porém bastante ativo. Gosto de pular, brincar e adoro um bom bate-papo, só não sou acostumado com crianças. Estou esperando a sua visita.",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277564",
        tags: "cao idoso cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Charles Henrique",
        imagemUrl: "/img/carlos hentique.jpeg",
        especie: "cão",
        idade: "13 anos",
        descricao: "Meu nome é Charles Henrique. Cheguei aqui com minhas duas perninhas fraturadas e por conta disto, tenho bastante dificuldade de locomoção. Sou um pouquinho temperamental e preciso ser conquistado. Também sou muito ciumento com a minha comida e com as pessoas que eu gosto. Convivo bem com outros cães.",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277564",
        tags: "cao idoso cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Sugar",
        imagemUrl: "/img/sugar.jpeg",
        especie: "cão",
        idade: "15 anos",
        descricao: "Quem me vê passeando todo serelepe nem acredita que já sou um senhorzinho. Já fui um cão difícil, mas hoje estou bem mais tranquilo, até gosto de carinho (um pouco tá?). Embora meu corpinho esteja enxuto, já tenho alguns probleminhas de saúde, mas tomo meus remédios na comidinha pastosa e sigo super bem, na esperança de um dia ter um lar pra chamar de meu.",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277564",
        tags: "cao idoso cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Kimbo",
        imagemUrl: "/img/Kimbo.jpg",
        especie: "cão",
        idade: "4 anos", // Calculado com base nas datas
        descricao: "Turminha, sou um cão muito brincalhão, e quando pego confiança sou muito carinhoso. Estou aqui, só aguardando o dia em que uma família amorosa e responsável vai me adotar. Pode ser a sua?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao jovem cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Marina",
        imagemUrl: "/img/Marina.jpg",
        especie: "cão",
        idade: "2 anos",
        descricao: "Tios, sou uma pequena carinhosa e brincalhona, mas confesso que sou um pouco assustada com quem não conheço. Sou muito ativa e convivo com outros cães, mas preciso conhecer antes. Me adota?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao jovem cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "César",
        imagemUrl: "/img/Cesar1.jpg",
        especie: "cão",
        idade: "8 anos",
        descricao: "Turma, sou um senhor muito bonzinho, brincalhão e agitado. Confesso que amo carinho e atenção. Não tenho uma patinha, mas isso não atrapalha em nada minha vida, eu nem lembro desse detalhe pois sou muito feliz. Me adota e deixa eu mostrar a felicidade e o amor verdadeiro?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao idoso cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Baxter",
        imagemUrl: "/img/Baxter.jpg",
        especie: "cão",
        idade: "8 anos",
        descricao: "Pessoal, sou um cão muito carinhoso e que gosta de passear. Aguardo uma família amorosa e responsável, que me dê muito amor, carinho e uma cama bem quentinha! Que tal me adotar?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao cão idoso cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Juliano",
        imagemUrl: "/img/Juliano.jpg",
        especie: "cão",
        idade: "4 anos",
        descricao: "Pessoal, sou um cãozinho que já passou por muita coisa. Sou bem agitado e gosto de correr e pular, por isso cuidado com portões, muros e janelas baixas. Sou dócil e convivo com outros cães, mas sempre interagindo previamente. Que tal você ser a família amorosa que vai mudar a minha vida?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "jovem cao cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Luizinho",
        imagemUrl: "/img/Luizinho.jpg ",
        especie: "cão",
        idade: "4 anos",
        descricao: "Pessoal, sou um cãozinho cheio de qualidades: carinhoso, meigo, brincalhão, lindo. A única coisa que falta é uma família muito especial para que minha vida fique completa! Deixa eu fazer parte da sua vida?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao jovem cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Pepita",
        imagemUrl: "/img/Pepita_Site.jpg",
        especie: "cão",
        idade: "2 anos",
        descricao: "Oi pessoal, sou linda, dócil e encantadora. Adoro ganhar carinho e passear. Aguardo uma família amorosa e muito responsável que queira cuidar verdadeiramente de mim como membro da família.",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao jovem cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Stanley",
        imagemUrl: "/img/Stanley.jpg",
        especie: "cão",
        idade: "8 anos",
        descricao: "Oi aumigos, sou um pequeno dócil e que adora uma boa companhia. Que tal deixar eu fazer parte da sua família? Tenho certeza que você e eu seremos muito felizes. ",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao idoso cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Zezinho",
        imagemUrl: "/img/Zezinho3.jpeg",
        especie: "cão",
        idade: "10 anos",
        descricao: "Titios, sou um senhorzinho muito carente. Gosto de carinho e de fazer companhia, mas confesso que preciso conhecer antes de confiar totalmente. Sonho com uma família que me entenda e me mostre o que é ser feliz. ",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao idoso cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Lasanha",
        imagemUrl: "/img/Lasanha.jpg",
        especie: "cão",
        idade: "4 anos",
        descricao: "Tios, sou tranquilo e lindo, mas confesso que preciso ser conquistado antes de confiar. Não gosto muito de ser segurado, sinto medo ainda desse tipo de contato. Que tal me dar uma chance? Vou te mostrar o que é amor verdadeiro.",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao jovem cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Enzo",
        imagemUrl: "/img/Enzo (1).jpeg",
        especie: "cão",
        idade: "1 ano",
        descricao: "Pessoal, sou um garotão muito ativo, que adora correr e brincar. Gosto de dar e receber carinho, sou uma ótima companhia. Que tal você me adotar e assim me dar o amor que tanto mereço? Só não me adote por empolgação, tem que ser com muita responsabilidade.",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao jovem cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Bless",
        imagemUrl: "/img/Bless_Site.jpg",
        especie: "cão",
        idade: "3 anos",
        descricao: "Pessoal, não tenho muita noção do meu tamanho, pois o que amo é ficar junto e ganhar carinho! Se você parar de fazer, vou pedir mais. Sou muito ativo, por isso preciso ter uma rotina de passeios e brincadeiras. Que tal me deixar fazer a sua vida mais alegre?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao cão jovem cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Radha",
        imagemUrl: "/img/Radha.jpg",
        especie: "cão",
        idade: "4 anos",
        descricao: "Oie, sou a Radha, dizem por aqui que sou inteligente e carente. Adoro ganhar petiscos e sair para passear. Me dou bem com outros cães, só que às vezes fico assustada com pessoas que não conheço. Quer uma companhia fiel e carinhosa? Então vem me conhecer.",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao jovem cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Tony",
        imagemUrl: "/img/Tony .jpg",
        especie: "cão",
        idade: "5 anos",
        descricao: "Oi turma, meu nome é Tony. Sou um doguinho muito, muito ativo. Adoro brincar e, por isso, preciso gastar muita energia. Gosto de carinho só para mim, então já sabem, preciso ser filho único. Que tal me adotar e ter uma vida fitness ao meu lado?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao jovem cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Boris",
        imagemUrl: "/img/Boris.jpeg",
        especie: "cão",
        idade: "3 anos",
        descricao: "Tios, antes de me apresentar quero contar uma coisa: passei maus bocados nas ruas e isso me traumatizou um pouco. É por isso que tenho medo das pessoas... nunca sei se elas vão querer me fazer mal. Sou bonzinho mas preciso confiar nos humanos novamente, então, peço que tenha paciência comigo e me dê uma chance. Fora isso, adoro brincar e agitar o pedaço. Acredito que poderemos fazer isso juntos. Que tal?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao jovem cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Bob",
        imagemUrl: "/img/Bob (2).jpg",
        especie: "cão",
        idade: "3 anos",
        descricao: "Oi titios, sou agitado e adoro uma brincadeira. Só cuidado, pois quando me empolgo nas brincadeiras, acabo brincando mais forte. Não gosto de outros cães, por isso preciso ser filho único. Que tal você me mostrar o que é ter uma família? Me adota?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao jovem cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Micaela",
        imagemUrl: "/img/Micaela.jpg",
        especie: "cão",
        idade: "5 anos",
        descricao: "Oi pessoal, cheguei aqui com meus bebês. Eles já foram adotados e agora estou prontinha para saber o que é ter uma família e um lar. Sou boazinha, mas assustada com quem não conheço, por isso preciso de um tempinho para me acostumar. Ah, tenho que ser filha única, pois não curto muito outros cães. Que tal me conhecer oferecer o amor e o cuidado que mereço?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao cão jovem cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Bentinho",
        imagemUrl: "/img/Bentinho (2).jpg",
        especie: "cão",
        idade: "14 anos",
        descricao: "Turminha, sou um senhorzinho calmo e que gosta de carinho. Confesso que não curto muito que me segurem e que mexam na minha orelhinha. Deve ser por causa dos traumas que carrego de quando vivia nas ruas. ",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao idoso cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Vovô",
        imagemUrl: "/img/Vovô.jpg",
        especie: "cão",
        idade: "12 anos",
        descricao: "Tios, olhem bem pra mim, mas olhem com o coração principalmente. Já sou idoso, mas isso não me impede de sonhar em ter uma família e um lar bem quentinho. Eu não enxergo, mas meu coração enxerga tudo que acontece em minha volta. Sou muito carinhoso e gosto de companhia. Realiza meu sonho de ter uma família?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao idoso cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Baladeva",
        imagemUrl: "/img/Bebezão1.jpg",
        especie: "cão",
        idade: "4 anos",
        descricao: "Oi, galera. Sou o Baladeva, um cão bem tranquilo e dócil. Amo carinho e vou sempre te pedir atenção. Me dou bem com outros cães, gosto de passear, brincar e de companhia. Sou fiel com quem amo, brincalhão, muito bonito e inteligente. Quer me dar uma chance?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao cão jovem cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Pantera",
        imagemUrl: "/img/Pantera (2).jpg",
        especie: "cão",
        idade: "4 anos",
        descricao: "Oie, meu nome é Pantera. Sou muito fiel e carente. Gosto de passeios, de outros cães e de estar sempre acompanhada. Sou bem brincalhona e curto atividades ao ar livre. Se é companhia que você está buscando, acabou de tirar a sorte grande.",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao cão jovem cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Bebezão",
        imagemUrl: "/img/Baladeva 02_10.jpg",
        especie: "cão",
        idade: "3 anos",
        descricao: "Oi, pessoal. Meu nome é Bebezão. Cheguei aqui com meus outros 14 irmãos e já estou prontinho para ser mimado, digo, adotado... hihihi. Me dou bem com outros cães, gosto de passear e amo carinho (principalmente se for na cabeça). Sou bonzinho e tranquilo, além de lindo. Que tal me adotar?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao jovem cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Bandit",
        imagemUrl: "/img/Bandit.jpg",
        especie: "cão",
        idade: "4 anos",
        descricao: "Turminha linda, sou agitado e também desconfiado. Mas olha, quero deixar registrado que quando gosto, gosto de verdade. Preciso de interação prévia para me acostumar e me soltar. Fico sonhando com o dia que irei encontrar uma família que me dê muito amor, carinho e que cuide de mim com responsabilidade. Pode ser a sua?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao jovem cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Luana",
        imagemUrl: "/img/Luana (3).jpg",
        especie: "cão",
        idade: "6 anos",
        descricao: "Oi tios, sou uma cachorrinha linda e bem agitada. Confesso que devo ter algum trauma, pois não gosto nadinha de vassouras e mangueiras, elas me assustam muito. Outro detalhe sobre mim é que preciso ser filha única, pois não gosto de outros cães, confio. Sei que sou um tanto exigente mas que tal me dar uma chance?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao idoso cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Ioga",
        imagemUrl: "/img/Ioga.jpg",
        especie: "cão",
        idade: "3 anos",
        descricao: "Olá pessoal, eu sou o Ioga. Confesso que sou um pouco desconfiado, mas sou muito bonzinho e aceito outros cães. Quero muito uma família para brincar, passear, dar e receber muito amor e carinho. Garanto que a família que me adotar terá um amor de verdade para sempre.",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao jovem cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Neguinha",
        imagemUrl: "/img/Neguinha.jpg",
        especie: "cão",
        idade: "10 anos",
        descricao: "Titios, sou um pouco assustada e, por isso, preciso ser cativada antes de fazermos amizade. Estou aqui só esperando o dia em que uma família muito especial virá me adotar. Que tal me dar uma chance? Observação: quem me adotar receberá o cartão Cuida Bem Idoso, que dá acesso prioritário e vitalício em qualquer uma das unidades dos hospitais veterinários públicos da cidade de São Paulo. Saiba mais aqui.",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao idoso cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    },
    {
        nome: "Jão",
        imagemUrl: "/img/Jão.jpg",
        especie: "cão",
        idade: "9 anos",
        descricao: "Oi tios. Sou um senhor tranquilo e introspectivo. Adoro uma boa cama e comidinha deliciosa. Não sou muito chegado a outros cães e preciso de um tempo para me adaptar. Quando conheço uma pessoa, sou muito carinhoso e gosto de receber atenção. Vamos tornar meus sonhos realidade?",
        linkAdocao: "https://capital.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/277567",
        tags: "cao idoso cão cachorro dog vira-lata vira lata rua adotar companheiro amigo cãozinho dog adoção melhor amigo"
    }
];