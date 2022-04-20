class GridComponent {
  constructor(config) {
    // Define a configuração padrão da classe
    this.config = {
      add: true,
      module: 123,
      workflow: [
        {
          id: 1,
          label: "Título",
          add: true,
          style: {
            border: "#CCC",
            background: "#EEE",
          },
        },
      ],
    };

    // Sobrescreve a configuração padrão da classe
    if (this.config) {
      this.config = $.extend(true, this.config, config);
    }

    this.cardsData = this.getCards();

    //Constroi o layout
    this.body = $("body");

    this.workflows = this.config.workflow.map((wkf) => {
      this.workflowLabel = new Div().append(wkf.label);
      this.addCard = new Button().append("Adicionar").click(() => {
        this.newCard();
      });

      this.cardsMap = this.cardsData.map((card) => {
        if (card.parent == wkf.id) {
          this.tagsMap = card.tags.map((tag) => {
            return (this.tagLabel = new Div(`tag-${tag.id}`).append(tag.label));
          });
          this.tagContainer = new Div("tg-ctn").append(this.tagsMap);
          this.cardTitle = new Div().append(card.title);
          this.cardDate = new Div("date").append(card.date.value);
          return new Div("card")
            .append(this.tagContainer, this.cardTitle, this.cardDate)
            .attr("draggable", true);
        }
      });

      return new Div("wkf").append(
        this.workflowLabel,
        this.cardsMap,
        this.addCard
      );
    });

    this.addWorkflow = new Button().append("Adicionar").click(() => {
      this.newWorkflow();
    });

    this.container = Div("main").append(this.workflows, this.addWorkflow);

    this.body.html(this.container);
  }

  getCards() {
    let configCard = [
      {
        id: "c01",
        parent: "03",
        drag: true,
        style: {
          border: "#CCC",
          background: "#EEE",
        },
        tags: [
          {
            id: 1,
            label: "Etiqueta",
            color: "#CCC",
            background: "#EEE",
          },
          {
            id: 2,
            label: "Prioridadess",
            color: "#CCC",
            background: "#EEE",
          },
        ],
        title: "Espaço para adicionar uma mensagem sobre este card",
        date: {
          value: "2022-04-06",
          color: "#CCC",
          background: "#EEE",
        },
        markers: [
          {
            type: "icon",
            value: "ic-test",
            side: "left",
            hint: "descricao do icone",
          },
          {
            type: "value",
            value: "0/6",
            side: "left",
            hint: "descricao do icone",
          },
          {
            type: "image",
            value: "https://",
            side: "right",
            hint: "descricao do icone",
          },
        ],
      },
      {
        id: "c02",
        parent: "02",
        drag: true,
        style: {
          border: "#CCC",
          background: "#EEE",
        },
        tags: [
          {
            id: 1,
            label: "Etiqueta",
            color: "#CCC",
            background: "#EEE",
          },
          {
            id: 2,
            label: "Prioridade",
            color: "#CCC",
            background: "#EEE",
          },
        ],
        title: "Espaço para adicionar uma mensagem sobre este card 2",
        date: {
          value: "2022-03-13",
          color: "#CCC",
          background: "#EEE",
        },
        markers: [
          {
            type: "icon",
            value: "ic-test",
            side: "left",
            hint: "descricao do icone",
          },
          {
            type: "value",
            value: "0/8",
            side: "left",
            hint: "descricao do icone",
          },
          {
            type: "image",
            value: "https://",
            side: "right",
            hint: "descricao do icone",
          },
        ],
      },
    ];

    return configCard;
  }

  //Cria novo card
  newCard() {
    alert("novo card");
  }

  //Cria novo workflow
  newWorkflow() {
    alert("novo workflow");
  }

  //Inicializa o componente
  init() {
    this.body.html(this.container);
  }
}
