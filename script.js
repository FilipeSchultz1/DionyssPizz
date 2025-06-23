function changePrice(button, price) {
  const container = button.closest('.pizza-item');

  // Atualiza o preço
  container.querySelector('.price').textContent = '€' + price.toFixed(2);

  // Remove active de todos os botões de tamanho da pizza atual
  const buttons = container.querySelectorAll('.sizes button');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Adiciona active ao clicado
  button.classList.add('active');
}

function buildPizzaList(containerId, pizzas) {
  const container = document.getElementById(containerId);
  pizzas.forEach(pizza => {
    const div = document.createElement('div');
    div.classList.add('pizza-item');
    div.classList.add('pizza-item-flex');
    

    let buttonsHTML = '';
    for (const [size, price] of Object.entries(pizza.prices)) {
      // Marca como ativo o tamanho Senior
      const isActive = (size === 'Senior') ? 'active' : '';
      buttonsHTML += `<button class="${isActive}" onclick="changePrice(this, ${price})">${size}</button>`;
    }

    div.innerHTML = `
  <div class="pizza-content">
    <h5>${pizza.name}</h5>
    <p>${pizza.description}</p>
    <img src="images/pizza.jpeg" alt="${pizza.name}" class="pizza-img">

    <div class="sizes">${buttonsHTML}</div>
    <p class="price">€${pizza.prices.Senior.toFixed(2)}</p>
  </div>
  
  </div>
`;
    container.appendChild(div);
  });
}




// Dados das pizzas da base "sauce tomate"
const pizzasSauceTomate = [
  {
    name: 'MARGHERITA',
    description: "Mozzarella avec supplément basilic et huile d'olives",
    prices: { Junior: 7.00, Senior: 8.00, Mega: 13.00 }
  },
  {
    name: 'PORKY',
    description: "Mozzarella et jambon",
    prices: { Junior: 9.00, Senior: 11.00, Mega: 15.00 }
  },
  {
    name: 'REINE',
    description: "Mozzarella, jambon, champignons et olives",
    prices: { Junior: 10.00, Senior: 12.00, Mega: 18.00 }
  },
  {
    name: 'VEGAN',
    description: "Pommes de terre, champignons, poivrons, artichauts, tomates et olives",
    prices: { Junior: 10.00, Senior: 12.00, Mega: 18.00 }
  },
  {
    name: 'MODENA',
    description: "Mozzarella, jambon, œuf, olives et olives",
    prices: { Junior: 10.00, Senior: 12.00, Mega: 18.00 }
  },
  {
    name: 'ORIENTALE',
    description: "Mozzarella, merguez, poivrons, oignons et olives",
    prices: { Junior: 10.50, Senior: 12.50, Mega: 19.00 }
  },
  {
    name: 'VEGETARIENNE',
    description: "Mozzarella, champignons, poivrons, artichauts, tomates, olives et basilic",
    prices: { Junior: 11.00, Senior: 13.00, Mega: 19.00 }
  },
  {
    name: 'CALZONE',
    description: "Mozzarella, jambon et œuf",
    prices: { Junior: 11.00, Senior: 13.50, Mega: 19.00 }
  },
  {
    name: 'NAPOLITAINE',
    description: "Mozzarella, anchois, câpres et olives",
    prices: { Junior: 11.00, Senior: 13.00, Mega: 19.00 }
  },
  {
    name: '5 FROMAGES',
    description: "Mozzarella, cheddar, chèvre, reblochon et emmental",
    prices: { Junior: 12.00, Senior: 14.00, Mega: 18.00 }
  },
  {
    name: 'BOLOGNAISE',
    description: "Mozzarella, Sauce tomate, viande hachée, oignons et origan",
    prices: { Junior: 12.50, Senior: 14.50, Mega: 18.50 }
  },
  {
    name: 'KEBAB',
    description: "Mozzarella, kebab, oignons, sauce Pita et Olives",
    prices: { Junior: 12.00, Senior: 14.00, Mega: 18.00 }
  },
  {
    name: 'MAHARADTA',
    description: "Mozzarella, poulet, lardons, champignons, Olives et Tandoori",
    prices: { Junior: 12.00, Senior: 15.00, Mega: 19.00 }
  },
  {
    name: 'CHO / CHEVRE',
    description: "Mozzarella, chorizo, chèvre olives et miel",
    prices: { Junior: 12.00, Senior: 15.00, Mega: 19.00 }
  },
  {
    name: 'BARBECUE',
    description: "Mozzarella, poulet, merguez, viande hachée et sauce Barbecue",
    prices: { Junior: 13.00, Senior: 15.00, Mega: 19.00 }
  },
  {
    name: 'MIXTE',
    description: "Mozzarella, chorizo, merguez, viande hachée et olives",
    prices: { Junior: 13.00, Senior: 15.00, Mega: 19.00 }
  },
  {
    name: 'BURGER',
    description: "Mozzarella, viande Hachée, oignons, cheddar, cornichons et sauce Burger",
    prices: { Junior: 13.00, Senior: 15.00, Mega: 19.00 }
  },
  {
    name: 'MAMA BOLO',
    description: "Mozzarella, double concentré de tomates, carottes, viande hachée, oignons, vin blanc et basilic",
    prices: { Junior: 13.50, Senior: 15.50, Mega: 19.50 }
  },
  {
    name: 'PANDINO',
    description: "Mozzarella, coppa, burrata, tomates séchées, huile d'olives et basilic",
    prices: { Junior: 13.50, Senior: 15.50, Mega: 19.50 }
  }
];

// Dados das pizzas da base "crème fraiche"
const pizzasCremeFraiche = [
  {
    name: 'CHEVRE MIEL',
    description: "Mozzarella, parmesan, chèvre, olives et miel",
    prices: { Junior: 11.00, Senior: 13.00, Mega: 18.00 }
  },
  {
    name: 'FLAMENKUCH',
    description: "Lardons et oignons",
    prices: { Junior: 11.00, Senior: 13.00, Mega: 18.00 }
  },
  {
    name: 'PARISIENNE',
    description: "Mozzarella, jambon, emmental et cornichons",
    prices: { Junior: 12.00, Senior: 14.00, Mega: 18.00 }
  },
  {
    name: 'CAMPAGNARDE',
    description: "Mozzarella, poulet, pommes de terre et champignons",
    prices: { Junior: 12.00, Senior: 14.50, Mega: 18.50 }
  },
  {
    name: 'CARBONARA',
    description: "Mozzarella, parmesan, lardons, oignons et œuf",
    prices: { Junior: 13.00, Senior: 15.00, Mega: 19.00 }
  },
  {
    name: 'SAVOYARDE',
    description: "Mozzarella, jambon, pommes de terre et reblochon",
    prices: { Junior: 13.00, Senior: 15.00, Mega: 19.00 }
  },
  {
    name: 'TARTIFLETTE',
    description: "Mozzarella, lardons, pommes de terre, oignons et reblochon",
    prices: { Junior: 13.00, Senior: 15.00, Mega: 19.00 }
  },
  {
    name: 'POULZONE (CHAUSSON OU OUVERTE)',
    description: "Mozzarella, poulet, cheddar, œuf et emmental",
    prices: { Junior: 13.00, Senior: 15.00, Mega: 19.00 }
  },
  {
    name: 'NORVEGIENNE',
    description: "Mozzarella, saumon, pommes de terre, oignons et aneth",
    prices: { Junior: 13.00, Senior: 15.50, Mega: 20.00 }
  },
  {
    name: 'SAMOURAI',
    description: "Mozzarella, chorizo, jambon, merguez, emmental et sauce Samourai",
    prices: { Junior: 13.00, Senior: 15.50, Mega: 20.00 }
  },
  {
    name: 'MONTAGNARDE',
    description: "Mozzarella, jambon de pays, pommes de terre, reblochon et tomates",
    prices: { Junior: 13.00, Senior: 15.50, Mega: 20.00 }
  }
];

// Executa as funções para construir as duas seções de pizzas
buildPizzaList('pizzas-sauce-tomate', pizzasSauceTomate);
buildPizzaList('pizzas-creme-fraiche', pizzasCremeFraiche);