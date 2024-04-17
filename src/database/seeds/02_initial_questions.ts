exports.seed = function (knex) {
  return knex('questions')
    .del()
    .then(function () {
      return knex('questions').insert([
        {
          id: 1,
          title:
            'Você e sua equipe realizam algum tipo de planejamento na sua rotina de trabalho ?',
          position: 2,
          text: '_h_1.PLANEJAMENTO EM SAÚDE_h__t1_Pode-se compreender o planejamento como uma prática social que é ao mesmo tempo técnica, política, econômica e ideológica. É um processo de transformação de uma situação em outra, levando em consideração uma dada finalidade e recorrendo a instrumentos (meios de trabalho tais como técnicas e saberes) e a atividades (trabalho propriamente dito), sob determinadas relações sociais, em uma dada organização (PAIM, 2002, 2006). Além de um requisito previsto em legislação, o planejamento no âmbito do Sistema Único de Saúde (SUS) se constitui como um dos mecanismos relevantes que visam assegurar a unidade e os princípios constitucionais do SUS, uma vez que expressa as responsabilidades dos gestores em cada esfera de governo no que se refere à saúde da população e à integração da organização sistêmica. Assim, o ato de planejar exige que haja conhecimento técnico, o qual se expressa em instrumentos e ferramentas que são desenvolvidas em processos de trabalho (BRASIL, 2016).Vale aqui sinalizar, entretanto, que ao longo da história diferentes noções a respeito do que é o planejamento emergiram, e a seguir estudaremos um pouco mais sobre._t1_ _q1_2_q1_ _t2_Sabemos que essa questão já foi abordada como indicador avaliativo do GestBucalSD, mas aqui vocês poderão aprofundar essa reflexão para à ação. A importância da realização do planejamento pode ser vista já no senso comum, onde o ato de planejar está ligado à organização de atividades, à busca por melhores resultados. Uma ação planejada é uma ação não improvisada (WERNECK, 2012) e, no geral, pode-se afirmar que planejar é reduzir incertezas, o que leva a algum grau de intervenção na economia, orientando investimentos e estando vinculado à alocação eficiente de recursos e à busca por melhores resultados. Na saúde, as práticas de planejamento estão presentes em todo o processo de gestão do Sistema Único de Saúde (BRASIL, 2016), desde níveis mais locais e seus microterritórios até a esfera federal._t2_',
        },
        {
          id: 2,
          title:
            'Agora que estudamos um pouco sobre o Planejamento Normativo, você consegue observar se algumas dessas características estão presentes na sua rotina de trabalho da Unidade de Saúde à qual você está vinculado?',
          position: 3,
          text: `_h_1.1. PLANEJAMENTO NORMATIVO_h_ _t1_Em 1965, Mário Testa, em conjunto com a Organização Pan-Americana da Saúde (OPAS) e o Centro de Estudos para o Desenvolvimento Econômico e Saúde (CENDES) introduziu o chamado Método CENDES/OPAS, considerado o marco inicial do planejamento na América Latina. Esse se constituiu numa forma de programação sanitária onde o desenvolvimento de métodos e técnicas de programação social impunham mudanças racionalmente planejadas como alternativa para a crise social. Esse método, também denominado de planejamento normativo, representa o marco inicial do desenvolvimento do planejamento em saúde na América Latina. A lógica interna do método CENDES/OPAS tem por base ser economicista e administrativo, a partir da ideia da eficiência na utilização dos recursos disponíveis e teve por principais características:
**● Uma visão ecológica (geral) do processo saúde-doença para a aplicação do diagnóstico, onde as prioridades são tratadas de acordo com a análise custo/benefício numa perspectiva economicista que tem por objetivo aumentar a eficiência na prestação de serviços, em termos de quantidade, alinhada à redução de custos (LANA; GOMES, 1996);
**● Não considera as causas sociais dos problemas (LANA; GOMES, 1996), uma vez que separa o sujeito do objeto de atuação (LACERDA; BOTELHO; COLUSSI, 2013);
**● A sociedade é resumida a comportamentos previsíveis e ausência de incertezas (LACERDA; BOTELHO; COLUSSI, 2013);
**● A garantia de êxito do planejamento quando seguidos à risca os cálculos previstos (LACERDA; BOTELHO; COLUSSI, 2013). O modelo conduzido pela OPAS perdeu importância ao longo do tempo por fatores relacionados à dificuldade na obtenção de informações adequadas e ao foco na produtividade e eficiência econômica. Nesse sentido, as abordagens relacionadas ao planejamento estratégico e as práticas da programação em saúde se disseminaram e ganharam força (BRASIL, 2016)._t1_ _q1_2_q1_ _t2_O enfoque normativo do planejamento na área da saúde caracteriza-se como um enfoque basicamente descritivo, fundamentado no levantamento de informações e sistematização de variáveis demográficas, epidemiológicas e sociais para a construção de indicadores de saúde e, consequentemente, fazer um diagnóstico. É possível verificar a influência do planejamento normativo no trabalho cotidiano dos estabelecimentos de saúde da rede de atenção em saúde bucal, a qual busca alcançar os objetivos das secretarias de saúde de acordo com as metas estabelecidas pelo Ministério da Saúde. Nesse sentido, destacam-se que, por vezes, as exigências sobre as metas a serem alcançadas com relação às instalações físicas, aos recursos humanos e financeiros, equipamentos e materiais de consumo, às políticas e aos programas (imunizações, saúde da mulher, saúde da criança, saúde adulto e idoso, saúde bucal e vigilância epidemiológica), que acabam por engessar algumas iniciativas, limitando as adaptações necessárias às características locais e aumentando a distância dos resultados desejados._t2_`,
        },
        {
          id: 3,
          title: 'Planeja Estrategico',
          position: 4,
          text: `_h_1.2. PLANEJAMENTO ESTRATÉGICO_h__t1_O Planejamento Estratégico pode ser reconhecido como um modo de planejar que não se reduz à elaboração de um plano de ação, mas considera refletir sobre aspectos organizacionais e variáveis que podem exercer influência interna e externa na execução do plano. Nesse sentido, considera elementos estratégicos presentes na dinâmica organizacional, tendo por objetivo compreendê-los e aprovisionar sua concretização e melhoria (PARENTE, 2011). Esse modelo, ainda, considera as relações entre os atores políticos e instituições como arena de disputa de poder, analisando-as a partir da ótica e equilíbrios de poder (MATUS, 1993).**SAIBA MAIS!**Para saber mais detalhes sobre o Planejamento Estratégico, indicamos a leitura do seguinte artigo:
**●GIOVANELLA. Planejamento estratégico em saúde: uma discussão da abordagem de Mário Testa. Cadernos de Saúde Pública, v. 2, n. 6, 1990.**Disponível em: https://www.scielo.br/j/csp/a/y9Jxy9qpphd6YGnMyJRYTyq/?lang=pt_t1_`,
        },
        {
          id: 4,
          title:
            'Você consegue perceber ações e/ou componentes do Planejamento Estratégico Situacional (PES) realizados no contexto da sua Unidade de Saúde e/ou município?',
          position: 5,
          text: `_h_1.3. PLANEJAMENTO ESTRATÉGICO SITUACIONAL (PES)_h_ _t1_O Planejamento Estratégico Situacional (PES) se configura como uma das soluções de planejamento em saúde que emergiu enquanto o Método CENDES/OPAS perdia a relevância (BRASIL, 2016).
Mario Testa e Carlos Matus foram fundamentais na introdução do PES com suas discussões. A partir do fracasso de movimentos populares e da ideologia de governos autoritários, ambos enfatizaram a necessidade de discutir questões relacionadas ao poder e à ideologia e Testa, avançando ao propor que o planejamento em saúde deve estar atento às relações de poder existentes na organização das práticas em saúde, sendo o poder constituído como uma categoria explicativa da realidade (WERNECK, 2012).
Demonstrando preocupação com a elaboração de instrumentos de condução que confiram maior governabilidade a um sistema político, Matus propôs o PES enquanto um método de planejamento que considera a "situação" como o lugar em que estão os atores e suas ações. Esse método de processamento de problemas é estruturado em quatro momentos: explicativo, normativo, estratégico e tático-operacional (WERNECK, 2012) (Quadro 01). Na figura 1, você pode observar os principais passos para execução desses momentos.
Quadro 1 - Momentos do Planejamento Estratégico Situacional.**
<table>
  <thead>
    <tr>
      <th>MOMENTO</th>
      <th>DESCRIÇÃO</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Explicativo</td>
      <td>
        Realiza-se um diagnóstico situacional, onde os problemas são
        selecionados e analisados, especificando-se nós críticos (causas que
        explicam o problema que, quando modificadas, por si só promovem a
        alteração de outra ou de uma série de causas).
      </td>
    </tr>
    <tr>
      <td>Normativo</td>
      <td>
        Construção do plano de ação/intervenção, onde são definidos o que se
        deseja alcançar e as respectivas estratégias.
      </td>
    </tr>
    <tr>
      <td>Estratégico</td>
      <td>
        Análise de viabilidade das ações a serem realizadas, incluindo a análise
        dos recursos econômicos, administrativos e políticos necessários e/ou
        disponíveis a partir das propostas traçadas.
      </td>
    </tr>
    <tr>
      <td>Tático-Operacional</td>
      <td>Implementação do plano de ação/intervenção.</td>
    </tr>
  </tbody>
</table>**Fonte: Adaptado de Camargo et al. (2020), Kleba, Krauser e
              Vendruscolo (2011) e Werneck (2012).
**Figura 1 - 10 Passos do PES**

              <table>
    <thead>
        <tr>
            <th>PASSOS</th>
            <th>MOMENTOS DO PES</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Primeiro Passo - Definição de Problemas</td>
            <td>Explicativo</td>
        </tr>
        <tr>
            <td>Segundo passo - Priorização de problemas</td>
            <td>Explicativo</td>
        </tr>
        <tr>
            <td>Terceiro passo - Descrição dos problemas selecionados</td>
            <td>Explicativo</td>
        </tr>
        <tr>
            <td>Quarto passo - Explicação dos problemas selecionados</td>
            <td>Explicativo</td>
        </tr>
        <tr>
            <td>Quinto passo - Seleção de nós críticos</td>
            <td>Normativo</td>
        </tr>
        <tr>
            <td>Sexto passo - Desenho das operações</td>
            <td>Normativo</td>
        </tr>
        <tr>
            <td>Sétimo passo - Identificação dos recursos críticos</td>
            <td>Normativo</td>
        </tr>
        <tr>
            <td>Oitavo passo - Análise da viabilidade do plano</td>
            <td>Estratégico</td>
        </tr>
        <tr>
            <td>Nono passo - Definição dos responsáveis pelas operações do plano</td>
            <td>Tático-operacional</td>
        </tr>
        <tr>
            <td>Décimo passo - Gestão do plano</td>
            <td>Tático-operacional</td>
        </tr>
    </tbody>
</table>
**O método PES é particularmente potente para o nível de direção central, onde se enfrentam problemas de alta complexidade. Ele admite que a explicação da realidade depende da inserção de cada ator que participa do problema, sendo, assim, parcial e múltiplo. É um método que responde fundamentalmente às questões de ordem política, com envolvimento de outros atores, além daqueles diretamente relacionados com as ações de assistência à saúde, como, por exemplo, representantes da sociedade civil, empresários, políticos, secretários da Saúde e prefeitos de outros municípios (TANCREDI; BARRIOS; FERREIRA, 1998; AGUIAR et al., 2006).**
Nesse sentido, esse método de planejamento assume uma postura de maior complexidade. Esse tipo de gestão é, portanto, caracterizado pela incerteza, onde (LACERDA; BOTELHO; COLUSSI, 2013):**
● O sujeito, que é parte de um todo social, e o objeto de atuação se confundem;**
● Há inexistência de um único diagnóstico situacional, uma vez que considera as diferentes visões, valores, interesses e posições de cada grupo social envolvido no contexto;**● Considera que o comportamento dos sujeitos não pode ser reduzido meramente às respostas prévias.
_t1_ _q1_2_q1_ _t2__
O PES tem como uma de suas características a adoção de práticas, que efetivam a participação popular e promovem a cooperação, o compartilhamento, transparência e protagonismo social como formas de promover o exercício democrático e a cidadania. A gestão participativa, nas Unidades e demais serviços de saúde, pressupõe a ampliação de arranjos organizacionais que estimulem a participação de sujeitos e de coletivos no gerenciamento de ações e práticas políticas do controle social.**
No entanto, a participação da população no processo de planejamento em saúde ainda é incipiente. Deste modo, ampliar os espaços de participação social e reivindicar que usuários e trabalhadores atuem em associação com os gestores, no processo de planejamento social, tem sido um desafio para o planejamento participativo na Atenção Primária à Saúde.**Vale destacar que o SUS preconiza o modelo do PES desde o final da década de 1980 (BRASIL, 2016; FERREIRA; SILVA; MIYASHIRO, 2017), e, dessa forma, o ideal é que sejam observados elementos desse tipo de planejamento no âmbito da sua Unidade de Saúde e/ou município.

Veja a seguir um quadro comparativo que distingue as características do planejamento normativo e planejamento estratégico.**Quadro 02 - Planejamento normativo X Planejamento Estratégico.
<table>
    <thead>
        <tr>
            <th>PLANEJAMENTO NORMATIVO</th>
            <th>PLANEJAMENTO ESTRATÉGICO</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Plano por setores</td>
            <td>Plano por problemas</td>
        </tr>
        <tr>
            <td>Predições únicas ou previsão probabilística</td>
            <td>Combina apostas bem fundamentadas com apostas difusas</td>
        </tr>
        <tr>
            <td>Incerteza “bem definida”</td>
            <td>Incertezas e surpresas</td>
        </tr>
        <tr>
            <td>Cálculo técnico</td>
            <td>Cálculo técnico-político</td>
        </tr>
        <tr>
            <td>Os sujeitos são agentes</td>
            <td>Os sujeitos são atores</td>
        </tr>
        <tr>
            <td>Metas únicas</td>
            <td>Várias possibilidades</td>
        </tr>
    </tbody>
</table>
**Fonte: Adaptado de Lacerda, Botelho e Colussi (2013) e Santana e Tahana (2008).
**SAIBA MAIS!
**Para saber mais detalhes sobre o Planejamento Estratégico Situacional sugerimos a leitura do seguinte texto:
**●FERREIRA; SILVA; MIYASHIRO. Planejamento em Saúde. In: GONDIM; CHRISTÓFARO; MIYASHIRO. Técnico de Vigilância em Saúde. Fundamentos. Rio de Janeiro: FIOCRUZ, 2017. p.137-164.
**Disponível em: https://www.arca.fiocruz.br/handle/icict/39910
`,
        },
        {
          id: 5,
          title: 'No Title',
          position: 1,
          text: `_h_Olá! Bem-vindo (a) ao PlanejaSD!_h_ _t1_Para a execução deste módulo operacional da plataforma
              GestBucalSD, propomos uma qualificação profissional
              teórico-prática - autoinstrucional em planejamento sistematizado
              de ações em saúde bucal, inclusive com garantia de certificação,
              como curso de extensão (30h). Portanto, você terá disponível o
              PlanejaSD-componente teórico e PlanejaSD-componente prático.**Vamos vivenciar o planejamento de ações em saúde bucal, entendendo
              o ato de planejar como reduzir incertezas.**Discutiremos aqui os principais conceitos e instrumentos
              relacionados ao planejamento no âmbito do Sistema Único de Saúde
              (SUS), compreendendo-o principalmente com de âmbito local.**Trabalharemos as seguintes temáticas:**● Conceito de planejamento;**● Tipos de Planejamento;**● Planejamento Estratégico Situacional (PES) e Planejamento
              participativo;**● Processo decisório;**● Definições dos instrumentos de planejamento e gestão no
              Sistema Único de Saúde (SUS) (Plano de Saúde – PS, Programação
              Anual de Saúde – PAS, Relatório Detalhado do Quadrimestre Anterior
              – RDQA, Relatório Anual de Gestão – RAG) e a sua importância no
              contexto do planejamento no SUS;**● Planejamento local em saúde no contexto das Redes de
              Atenção à Saúde (RAS).**Espera-se que após o cumprimento do PlanejaSD-componente teórico,
              você realize na prática baseada do PES a construção de um Plano de
              Ação em Saúde Bucal (PA-SB). com o uso do PlanejaSD e demais dados
              da plataforma GestBucalSD. O componente teórico deve ser feito em
              caráter individual, mas a prática pode (e deve) envolver outros
              membros da equipe e ainda outros atores sociais implicados em
              nível local, se possível.**Certificação: a certificação será emitida para cada participante,
              após o cumprimento de atividades individuais formativas através do
              preenchimento de respostas as perguntas condutoras do componente
              teórico e da avaliação somativa (individual ou equipe profissional
              local), pela construção do Plano de Ação em Saúde Bucal (PA-SB).
              <br />A equipe do projeto estará disponível, para assessorá-los,
              através de agendamento prévio, numa perspectiva de ações de
              Telessaúde: telemonitoramento ao Planejamento, gestão e avaliação
              em saúde.**Vamos começar!_t1_
              
`,
        },
        {
          id: 6,
          title: 'No Title',
          position: 6,
          text: `_h_1.4 Planejamento participativo_h__t1_No coletivo vemos multiplicadas nossas forças e possibilidades. Por isso há o entendimento de que o trabalho que contemple a contribuição do maior número de pessoas tende a ser qualitativamente melhor do que os daqueles que se restringem a uma aristocracia organizacional (PARENTE, 2011).<br />Alguns marcos teórico-metodológicos no processo do planejamento participativo devem ser considerados como uma espécie de passo-a-passo que deve nortear a condução desse processo (Quadro 03) (GANDIN, 2002).**Quadro 03 - Marcos teórico-metodológicos a serem considerados no processo de planejamento participativo.<table>
	<thead>
		<tr>
			<th>MARCO</th>
			<th>DESCRIÇÃO</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Marco Situacional</td>
			<td>Etapa de contextualização crítica pelo grupo de trabalho do momento sócio-histórico local e global no qual se pretende operar o planejamento.</td>
		</tr>
		<tr>
			<td>Marco Doutrinal</td>
			<td>A discussão e definição dos valores, crenças e ideias gerais do coletivo, o modelo de sociedade que o grupo acredita. Os resultados consensuados destas reflexões deverão subsidiar o processo de planejamento e o próprio plano.</td>
		</tr>
		<tr>
			<td>Marco Operacional</td>
			<td>A tomada de decisão do grupo no sentido de construir o plano e aplicar aquilo que foi discutido.</td>
		</tr>
	</tbody>
</table>
**Fonte: GANDIN, 2002.**Logo após a discussão desses marcos há o momento do diagnóstico – etapa de geração e análise de dados que irão subsidiar o processo de construção do plano propriamente dito. Com a realização do diagnóstico, passa-se para a discussão e construção participativa do plano ou programação, que deve levar em consideração: os objetivos, as ações a serem desenvolvidas, os recursos necessários, o cronograma, o processo de acompanhamento e a avaliação. E por fim, constrói-se uma agenda com a contribuição de todos os atores sociais envolvidos no processo de promoção da saúde (PARENTE, 2011).**SAIBA MAIS!**Para conhecer melhor o Planejamento Participativo indicamos a leitura do seguinte artigo:**● PARENTE. Planejamento participativo em saúde. SANARE, v. 10, n. 1, 2011.**Disponível em: _a_https://sanare.emnuvens.com.br/sanare/article/view/144_a__t1_`,
        },
        {
          id: 7,
          title: 'No Title',
          position: 7,
          text: `_h_2. PROCESSO DECISÓRIO_h__t1_A tomada de decisão está intimamente ligada ao planejamento em saúde e deve ser considerada independentemente do método de planejamento escolhido. Entendendo o contexto desse planejamento, cabe aqui pontuar a importância do processo de tomada de decisão, ao qual está intrinsecamente ligado.**O processo de tomada de decisão em sistemas de saúde deve ser compreendido como um conjunto de passos estruturados que incluem desde a busca pelo consenso entre as partes envolvidas, de uma forma democrática, até a incorporação e o uso de informações coletadas nos níveis locais para tratar situações complexas, levando em consideração as especificidades do contexto e chegando ao desenvolvimento e à avaliação de soluções inovadoras (WICKREMASIGHE et al., 2016).**O processo de tomada de decisão envolve a definição de critérios e valores, além do uso de evidências e do julgamento de alternativas na formulação de políticas públicas em saúde. A complexidade do processo decisório em sistemas de saúde é ampliada dado o envolvimento de um grande número de atores, de diversas naturezas (técnicos, gestores, políticos, agentes sociais), em diferentes níveis de atuação (local, municipal, estadual e federal), com diferentes objetivos ou entendimentos sobre qual a melhor solução para um problema estabelecido (TANIOS et al., 2013). **Os elementos presentes da tomada de decisão são (BERTONCINI et al., 2013):**1 -	O tomador de decisão: é a pessoa que faz uma escolha ou opção entre várias alternativas futuras de ação;**2 -	Os objetivos: são o que o tomador de decisão pretende alcançar com suas ações;**3 -	As preferências: são os critérios que o tomador de decisão usa para fazer sua escolha;**4 -	A estratégia: é o curso de ação que o tomador de decisão escolhe para atingir seus objetivos dependendo dos recursos que pode dispor;**5 -	A situação: são os aspectos do ambiente que envolve o tomador de decisão, alguns deles fora do seu controle, conhecimento ou compreensão e que afetam sua escolha;**6 -	O resultado: é a consequência ou resultado de uma estratégia.****Como o processo de tomada de decisão é uma atividade passível de erros, pois ela será afetada pelas características pessoais e percepção do tomador de decisões, visando minimizá-los e chegar a um melhor resultado, deve-se efetuar um processo organizado e sistemático. Para isso, sugere-se que seja identificado o problema existente, em seguida, deve-se enumerar as alternativas possíveis para a solução do problema e a partir disso, selecionar a mais benéfica das alternativas, para então, implementar a alternativa escolhida e por fim reunir feedback para descobrir se a alternativa implementada está solucionando o problema identificado (BERTONCINI et al., 2013)._t1_
`,
        },
        {
          id: 8,
          title: `Você já teve a experiência de participar da Conferência Municipal ou das etapas estadual (Conferência Estadual de Saúde) e nacional (Conferência Nacional de Saúde)?**
Você já participou de alguma reunião ou foi membro de algum Conselho de Saúde (municipal, estadual ou nacional)?**
Você conhece os espaços de governança do SUS, nos quais a sociedade tem possibilidade de atuar nas políticas de saúde**
Compreendendo a importância do planejamento em saúde no âmbito do SUS, que tal relembrarmos quais são os instrumentos utilizados nesse planejamento?**
Você participou/participa da construção e do monitoramento das diretrizes, objetivos, metas, indicadores e respectivos resultados?**
Existem aspectos relacionados à Saúde Bucal nos instrumentos?**
Você conhece os instrumentos de planejamento em saúde do seu município?**`,
          position: 8,
          text: `_h_3. MARCOS LEGAIS E NORMATIVOS E INSTRUMENTOS DE PLANEJAMENTO EM SAÚDE_h__t1_No âmbito do Sistema Único de Saúde, diversos marcos legais e normativos abordam aspectos relacionados ao planejamento e seus instrumentos (Quadro 05). Nesse cenário, proporcionar o adequado planejamento das diretrizes, objetivos, metas e ações de saúde nas diferentes esferas de gestão do SUS leva à necessidade de constituir alguns instrumentos de planejamento que devem, por sua vez, se interligar sequencialmente e ciclicamente (CONASEMS, 2021).**Quadro 05 - Marcos legais e normativos que abordam aspectos relacionados ao planejamento no SUS.<table>
	<thead>
		<tr>
			<th>MARCO LEGAL / NORMATIVO</th>
			<th>EMENDA</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Lei nº 8.080, de 19 de setembro de 1990 (BRASIL,1990a)</td>
			<td>Lei Orgânica da Saúde, que define os princípios do SUS e as atribuições dos entes federativos e estabelece o planejamento ascendente (ou seja, partindo do micro para o macro).</td>
		</tr>
		<tr>
			<td>Lei nº 8.142, de 29 de novembro de 1990 (BRASIL, 2990b)</td>
			<td>Traz a necessidade de os entes federativos disporem de plano de saúde e relatórios de gestão para fazerem jus ao recebimento de recursos financeiros.</td>
		</tr>
		<tr>
			<td>Decreto nº 7.508, de junho de 2011 (BRASIL, 2011)</td>
			<td>Regulamenta a Lei nº 8.080, dispondo de um capítulo específico sobre planejamento da saúde, o estabelecimento de metas de saúde e a necessidade de o gestor público elaborar e apresentar instrumentos de planejamento.</td>
		</tr>
		<tr>
			<td>Lei Complementar nº 141, de janeiro de 2012 (BRASIL, 2012)</td>
			<td>Regulamenta o artigo 198 da Constituição Federal de 1988, definindo normas de fiscalização, avaliação e controle das despesas com o SUS nos entes federativos, e determina o planejamento ascendente e mecanismos de financiamento do SUS.</td>
		</tr>
		<tr>
			<td>Portaria de Consolidação nº 1, de 28 de setembro de 2017 (Título IV do Capítulo I) (substitui a Portaria nº 2.135, de setembro de 2013) (BRASIL, 2017)</td>
			<td>Estabelece diretrizes para o planejamento do SUS e define instrumentos do planejamento em saúde (Plano Municipal de Saúde, Programação Anual da Saúde, Relatório Anual de Gestão, Relatório Detalhado do Quadrimestre Anterior) e orienta pressupostos do planejamento.</td>
		</tr>
	</tbody>
</table>
**No Quadro 06 você poderá visualizar os principais instrumentos e suas características, a saber: Plano de Saúde; Programação Anual de Saúde; e Relatórios de Gestão.**Quadro 06 - Instrumentos de planejamento em saúde no âmbito do SUS.<table>
	<thead>
		<tr>
			<th>Plano de Saúde (PS)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>● Instrumento central do planejamento para definição e implementação das iniciativas no âmbito da saúde em cada esfera de gestão do SUS; ● Período de quatro anos, devendo ser elaborado no primeiro ano da gestão em curso, cuja execução se dá a partir do segundo ano da gestão até o primeiro ano da gestão seguinte; ● A elaboração do planejamento e do orçamento do que governo no que se refere à saúde é a sua base; ● Deve apresentar as diretrizes e objetivos que nortearão a condução da política de saúde nos quatro anos seguintes, especificando as respectivas metas e indicadores; ● Consolida as políticas e compromissos da saúde no ente federativo. Portanto, deve ser proposto com base na análise situacional da saúde e guardar íntima relação com instrumentos de governo do ente federativo, como o Plano Plurianual (PPA) e o projeto de lei orçamentária, e deve incorporar as recomendações das Conferências de Saúde; ● Deve ser construído conjuntamente com a sociedade civil, por meio do Conselho de Saúde, e aprovado por esse.</td>
		</tr>
	</tbody>
</table>
<table>
	<thead>
		<tr>
			<th>Programação Anual da Saúde (PAS)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>● Instrumento que operacionaliza as proposições contidas no Plano de Saúde; ● Seu objetivo é o de anualizar as metas do Plano e prever a alocação dos recursos orçamentários a serem executados; ● Deve ser elaborada e aprovada pelo Conselho de Saúde antes do encaminhamento da Lei de Diretrizes Orçamentárias, até o mês de março do ano anterior à sua vigência.</td>
		</tr>
	</tbody>
</table>
<table>
	<thead>
		<tr>
			<th>Relatório Anual de Gestão (RAG)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>● Instrumento destinado à apresentação de resultados atrelados à PAS, devendo conter as diretrizes, objetivos e os indicadores, especificando as metas previstas e executadas da Programação; a análise da execução orçamentária e recomendações necessárias; ● Poderá levar a redirecionamentos necessários à revisão do PMS; ● Resultado do somatório dos três Relatórios Detalhados do Quadrimestre Anterior anuais; ● Deverá ser enviado para apreciação e aprovação pelo Conselho de Saúde até março do ano seguinte à sua competência.</td>
		</tr>
	</tbody>
</table>
<table>
	<thead>
		<tr>
			<th>Relatório Detalhado do Quadrimestre Anterior (RDQA)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>● Instrumento de monitoramento da execução da política de saúde do ente federativo; ● Deve apresentar conteúdo semelhante ao RAG, cujo foco se dá no período quadrimestral; ● Deve ser entregue para apresentação em Audiência Pública na Casa Legislativa nos meses de maio (quadrimestre janeiro-abril), setembro (quadrimestre maio-agosto) e fevereiro (quadrimestre setembro-dezembro), sempre em referência ao quadrimestre anterior; ● Obrigatoriamente, deve conter informações referentes ao montante e a fonte de recursos aplicados no quadrimestre analisado, descrever auditorias realizadas ou em execução e descrever a produção e oferta de serviços na rede SUS, relacionando-o aos indicadores previstos.</td>
		</tr>
	</tbody>
</table>
_t1_
_q1_2,2,2,1,2,2,2_q1_
 _t2_Considerando a importância de o planejamento envolver todos os atores ligados direta e indiretamente ao contexto sanitário do território, seja micro ou macro, a Equipe deve estar familiarizada com os instrumentos de planejamento e esses devem contemplar aspectos referentes à Saúde Bucal, além de participarem ativamente do processo de elaboração, monitoramento, condução e avaliação.**SAIBA MAIS!**Para obter mais informações sobre os instrumentos de planejamento em saúde no SUS, as Conferências de Saúde e os Conselhos de Saúde indicamos a leitura do seguinte texto:**● CONASEMS. Manual do(a) gestor(a) municipal no SUS. Diálogos no cotidiano. 2a edição digital - revisada e ampliada. 2021. Disponível em: _a_https://portal.conasems.org.br/publicacoes?rows=16&start=48_a__t2_O processo de planejamento no âmbito do SUS deve ser realizado com base no contexto local da situação de saúde, ou seja, a partir da análise situacional e das proposições oriundas da Conferência de Saúde local. É dessa forma que se dá o planejamento denominado ascendente.
 **Nesse cenário, alguns instrumentos propostos devem ser utilizados, a saber: Plano de Saúde, Programação Anual da Saúde e os Relatórios de Gestão (Relatório Anual de Gestão e Relatórios Detalhados do Quadrimestre Anterior). Esses devem guardar relação entre si e expressar as diretrizes, objetivos, metas e os respectivos indicadores referentes à condução da política de saúde, além de terem relação com instrumentos gerais de planejamento do governo (Plano Plurianual e Lei de Diretrizes Orçamentárias).
 **A governança do SUS é composta por espaços em que a sociedade atua na política de saúde nas três esferas de governo. Dentre esses espaços estão os Conselhos de Saúde e as Conferências de Saúde. **Os conselhos de saúde que são espaços institucionais presentes em cada esfera de governo, cujo papel é consultivo e deliberativo. Esses devem, por sua vez, formular estratégias e controlar a execução da política de saúde em todos os aspectos. Para isso, sua composição deve ser paritária por representantes do governo (25%), dos usuários (50%), dos profissionais de saúde e dos prestadores de serviços (25%) e as decisões do conselho deverão ser homologadas pelo chefe do Poder Executivo correspondente.**Outro espaço importante são as Conferências de Saúde, realizadas minimamente a cada quatro anos, que têm por objetivo avaliar a situação de saúde da população e definir diretrizes que irão orientar a formulação e condução das políticas e programas dentro da respectiva esfera de governo.**Considerando a importância desses espaços no processo de decisão e do envolvimento de todos os atores ligados ao contexto, entende-se a necessidade de participação dos profissionais nesses espaços.**
`,
        },
        {
          id: 9,
          title: 'No Title',
          position: 9,
          text: `_h_4. PLANEJAMENTO LOCAL EM SAÚDE NO CONTEXTO DAS REDES DE ATENÇÃO À SAÚDE (RAS)_h__t1_Todo planejamento tem por ponto de partida o diagnóstico (CHORNY; KUSCHNIR; TAVEIRA, 2008). Diante disso, emergiu-se a proposta estratégica metodológica de planejamento aplicado ao nível local do SUS com ênfase na execução de ações de educação em saúde em relação aos problemas identificados e priorizados pela comunidade, denominada Planejamento Programação Local em Saúde (PPLS), envolvendo, especificamente, a vigilância à saúde (VILAS-BÔAS, 2004). **Nesse sentido, verifica-se que, na perspectiva do olhar estratégico-situacional, a atuação planejada sobre uma determinada realidade requer um entendimento entre os diversos atores sociais inseridos nesta, permitindo uma explicação abrangente sobre uma dada situação, assim como a análise de possíveis intervenções sobre os problemas que devem ser resolvidos e controlados**AGORA É COM VOCÊ!**Propomos agora, a partir do uso do PlanejaSD-componente prático, a construção de um Plano de Ação em Saúde Bucal (PA-SB), sendo metodologicamente uma adaptação do Planejamento Estratégico Situacional (PES).**O uso do PlanejaSD irá auxiliá-lo na construção passo a passo, através do artifício dinâmico de pergunta-resposta para a vivência dos momentos operacionais do PES. E, no término você terá seu Plano de Ação em Saúde Bucal (PA-SB) elaborado pronto para à intervenção.**Salienta-se que cada situação/contexto é única, emergindo muitos problemas à intervenção, porém o PlanejaSD irá direcioná-lo (a) à construção de um plano para a tomada de decisão baseada nos resultados dos outros módulos operativos da plataforma GestBucalSD, sumarizado no dashboards._t1_
`,
        },
      ]);
    });
};
