const investments = [
  {
    "id": "apple",
    "category": "stocks",
    "categoryLabel": "Акции",
    "categoryClass": "stocks",
    "name": "Apple",
    "ticker": "AAPL",
    "icon": "./assets/icons/apple.svg",
    "description": "Технологии и электроника",
    "fullDescription": "Apple — один из крупнейших мировых производителей потребительской электроники и программного обеспечения.",
    "price": 331.34,
    "currency": "USD",
    "unit": "акция",
    "change24h": 1.24,
    "risk": "Средний",
    "riskLevel": "medium",
    "sector": "Технологии",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],

      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],

      "expectedReturn": {
        "3 мес": 1.8,
        "6 мес": 5.2,
        "1 год": 12.4,
        "3 года": 39.6
      }
    }
  },

  {
    "id": "microsoft",
    "category": "stocks",
    "categoryLabel": "Акции",
    "categoryClass": "stocks",
    "name": "Microsoft",
    "ticker": "MSFT",
    "icon": "./assets/icons/microsoft.svg",
    "description": "Программное обеспечение и облачные технологии",
    "fullDescription": "Microsoft развивает программное обеспечение, облачные сервисы и технологии искусственного интеллекта.",
    "price": 500.59,
    "currency": "USD",
    "unit": "акция",
    "change24h": 0.52,
    "risk": "Средний",
    "riskLevel": "medium",
    "sector": "Технологии",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 1.6,
        "6 мес": 4.8,
        "1 год": 10.8,
        "3 года": 34.5
      }
    }
  },

  {
    "id": "nvidia",
    "category": "stocks",
    "categoryLabel": "Акции",
    "categoryClass": "stocks",
    "name": "NVIDIA",
    "ticker": "NVDA",
    "icon": "./assets/icons/nvidia.svg",
    "description": "Чипы и искусственный интеллект",
    "fullDescription": "NVIDIA разрабатывает графические процессоры и вычислительные технологии для искусственного интеллекта.",
    "price": 225.51,
    "currency": "USD",
    "unit": "акция",
    "change24h": -1.47,
    "risk": "Высокий",
    "riskLevel": "high",
    "sector": "Полупроводники",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 3.2,
        "6 мес": 7.4,
        "1 год": 18.5,
        "3 года": 62.0
      }
    }
  },

  {
    "id": "amazon",
    "category": "stocks",
    "categoryLabel": "Акции",
    "categoryClass": "stocks",
    "name": "Amazon",
    "ticker": "AMZN",
    "icon": "./assets/icons/amazon.svg",
    "description": "Онлайн-торговля и облачные технологии",
    "fullDescription": "Amazon работает в сфере электронной коммерции, облачных вычислений и цифровых сервисов.",
    "price": 249.27,
    "currency": "USD",
    "unit": "акция",
    "change24h": -2.24,
    "risk": "Средний",
    "riskLevel": "medium",
    "sector": "E-commerce",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 1.9,
        "6 мес": 5.5,
        "1 год": 13.2,
        "3 года": 41.0
      }
    }
  },

  {
    "id": "alphabet",
    "category": "stocks",
    "categoryLabel": "Акции",
    "categoryClass": "stocks",
    "name": "Alphabet",
    "ticker": "GOOGL",
    "icon": "./assets/icons/alphabet.svg",
    "description": "Интернет-сервисы и технологии",
    "fullDescription": "Alphabet развивает поисковые сервисы, облачные технологии, рекламу и решения на базе искусственного интеллекта.",
    "price": 337.83,
    "currency": "USD",
    "unit": "акция",
    "change24h": -3.8,
    "risk": "Средний",
    "riskLevel": "medium",
    "sector": "Интернет",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 1.7,
        "6 мес": 5.1,
        "1 год": 11.6,
        "3 года": 36.2
      }
    }
  },

  {
    "id": "meta",
    "category": "stocks",
    "categoryLabel": "Акции",
    "categoryClass": "stocks",
    "name": "Meta Platforms",
    "ticker": "META",
    "icon": "./assets/icons/meta.svg",
    "description": "Социальные сети и цифровые сервисы",
    "fullDescription": "Meta развивает социальные платформы, рекламные технологии и продукты виртуальной и дополненной реальности.",
    "price": 744.10,
    "currency": "USD",
    "unit": "акция",
    "change24h": 1.02,
    "risk": "Высокий",
    "riskLevel": "high",
    "sector": "Коммуникации",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 2.4,
        "6 мес": 6.8,
        "1 год": 15.7,
        "3 года": 48.0
      }
    }
  },

  {
    "id": "tesla",
    "category": "stocks",
    "categoryLabel": "Акции",
    "categoryClass": "stocks",
    "name": "Tesla",
    "ticker": "TSLA",
    "icon": "./assets/icons/tesla.svg",
    "description": "Электромобили и энергетика",
    "fullDescription": "Tesla производит электромобили, системы хранения энергии и развивает технологии автономного транспорта.",
    "price": 380.12,
    "currency": "USD",
    "unit": "акция",
    "change24h": 0.32,
    "risk": "Высокий",
    "riskLevel": "high",
    "sector": "Автомобили",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 3.8,
        "6 мес": 8.2,
        "1 год": 20.1,
        "3 года": 58.0
      }
    }
  },

  {
    "id": "jpmorgan",
    "category": "stocks",
    "categoryLabel": "Акции",
    "categoryClass": "stocks",
    "name": "JPMorgan Chase",
    "ticker": "JPM",
    "icon": "./assets/icons/jpmorgan.svg",
    "description": "Банковские и финансовые услуги",
    "fullDescription": "JPMorgan Chase — крупная финансовая группа, работающая в банковском секторе и сфере финансовых услуг.",
    "price": 312.45,
    "currency": "USD",
    "unit": "акция",
    "change24h": 0.86,
    "risk": "Средний",
    "riskLevel": "medium",
    "sector": "Финансы",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 1.4,
        "6 мес": 4.1,
        "1 год": 9.2,
        "3 года": 29.4
      }
    }
  },

  {
    "id": "us-treasury",
    "category": "bonds",
    "categoryLabel": "Облигации",
    "categoryClass": "bonds",
    "name": "US Treasury Bonds",
    "ticker": "UST",
    "icon": "./assets/icons/treasury.svg",
    "description": "Государственные облигации США",
    "fullDescription": "Государственные облигации США — долговые инструменты, выпускаемые правительством США.",
    "price": 100.18,
    "currency": "USD",
    "unit": "облигация",
    "change24h": 0.18,
    "risk": "Низкий",
    "riskLevel": "low",
    "sector": "Государственные облигации",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 1.1,
        "6 мес": 2.2,
        "1 год": 4.4,
        "3 года": 13.8
      }
    }
  },

  {
    "id": "germany-bund",
    "category": "bonds",
    "categoryLabel": "Облигации",
    "categoryClass": "bonds",
    "name": "Germany Bund",
    "ticker": "BUND",
    "icon": "./assets/icons/bund.svg",
    "description": "Государственные облигации Германии",
    "fullDescription": "Государственные облигации Германии — долговые инструменты немецкого государства.",
    "price": 99.42,
    "currency": "EUR",
    "unit": "облигация",
    "change24h": 0.12,
    "risk": "Низкий",
    "riskLevel": "low",
    "sector": "Государственные облигации",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 0.8,
        "6 мес": 1.7,
        "1 год": 3.2,
        "3 года": 9.8
      }
    }
  },

  {
    "id": "uk-gilt",
    "category": "bonds",
    "categoryLabel": "Облигации",
    "categoryClass": "bonds",
    "name": "UK Gilt",
    "ticker": "UKG",
    "icon": "./assets/icons/gilt.svg",
    "description": "Государственные облигации Великобритании",
    "fullDescription": "Государственные облигации Великобритании используются для привлечения финансирования государством.",
    "price": 98.75,
    "currency": "GBP",
    "unit": "облигация",
    "change24h": 0.09,
    "risk": "Низкий",
    "riskLevel": "low",
    "sector": "Государственные облигации",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 1.0,
        "6 мес": 2.1,
        "1 год": 4.0,
        "3 года": 12.5
      }
    }
  },

  {
    "id": "japan-gov",
    "category": "bonds",
    "categoryLabel": "Облигации",
    "categoryClass": "bonds",
    "name": "Japan Government Bond",
    "ticker": "JGB",
    "icon": "./assets/icons/jgb.svg",
    "description": "Государственные облигации Японии",
    "fullDescription": "Государственные облигации Японии — долговые инструменты японского правительства.",
    "price": 100.05,
    "currency": "JPY",
    "unit": "облигация",
    "change24h": 0.06,
    "risk": "Низкий",
    "riskLevel": "low",
    "sector": "Государственные облигации",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 0.5,
        "6 мес": 1.1,
        "1 год": 2.3,
        "3 года": 6.9
      }
    }
  },

  {
    "id": "canada-bond",
    "category": "bonds",
    "categoryLabel": "Облигации",
    "categoryClass": "bonds",
    "name": "Canada Government Bond",
    "ticker": "CAN",
    "icon": "./assets/icons/canada-bond.svg",
    "description": "Государственные облигации Канады",
    "fullDescription": "Долговые инструменты правительства Канады с фиксированным доходом.",
    "price": 99.84,
    "currency": "CAD",
    "unit": "облигация",
    "change24h": 0.11,
    "risk": "Низкий",
    "riskLevel": "low",
    "sector": "Государственные облигации",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 0.9,
        "6 мес": 1.9,
        "1 год": 3.7,
        "3 года": 11.2
      }
    }
  },

  {
    "id": "apple-bond",
    "category": "bonds",
    "categoryLabel": "Облигации",
    "categoryClass": "bonds",
    "name": "Apple Corporate Bond",
    "ticker": "AAPL-B",
    "icon": "./assets/icons/apple.svg",
    "description": "Корпоративные облигации Apple",
    "fullDescription": "Корпоративные долговые инструменты Apple с фиксированным доходом.",
    "price": 101.24,
    "currency": "USD",
    "unit": "облигация",
    "change24h": 0.14,
    "risk": "Низкий",
    "riskLevel": "low",
    "sector": "Корпоративные облигации",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 1.0,
        "6 мес": 2.4,
        "1 год": 4.8,
        "3 года": 14.7
      }
    }
  },

  {
    "id": "microsoft-bond",
    "category": "bonds",
    "categoryLabel": "Облигации",
    "categoryClass": "bonds",
    "name": "Microsoft Corporate Bond",
    "ticker": "MSFT-B",
    "icon": "./assets/icons/microsoft.svg",
    "description": "Корпоративные облигации Microsoft",
    "fullDescription": "Корпоративные долговые инструменты Microsoft с заранее определённой доходностью.",
    "price": 100.76,
    "currency": "USD",
    "unit": "облигация",
    "change24h": 0.16,
    "risk": "Низкий",
    "riskLevel": "low",
    "sector": "Корпоративные облигации",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 1.0,
        "6 мес": 2.3,
        "1 год": 4.6,
        "3 года": 14.1
      }
    }
  },

  {
    "id": "world-bank-bond",
    "category": "bonds",
    "categoryLabel": "Облигации",
    "categoryClass": "bonds",
    "name": "World Bank Bond",
    "ticker": "IBRD",
    "icon": "./assets/icons/world-bank.svg",
    "description": "Международные долговые инструменты",
    "fullDescription": "Облигации международной финансовой организации, используемые для финансирования проектов развития.",
    "price": 100.52,
    "currency": "USD",
    "unit": "облигация",
    "change24h": 0.08,
    "risk": "Низкий",
    "riskLevel": "low",
    "sector": "Международные облигации",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 0.9,
        "6 мес": 2.0,
        "1 год": 4.1,
        "3 года": 12.8
      }
    }
  },

  {
    "id": "nextera-energy",
    "category": "esg",
    "categoryLabel": "ESG",
    "categoryClass": "esg",
    "name": "NextEra Energy",
    "ticker": "NEE",
    "icon": "./assets/icons/nextera.svg",
    "description": "Возобновляемая энергетика",
    "fullDescription": "Компания развивает производство электроэнергии и проекты в сфере возобновляемой энергетики.",
    "price": 78.45,
    "currency": "USD",
    "unit": "акция",
    "change24h": 1.12,
    "risk": "Средний",
    "riskLevel": "medium",
    "sector": "Чистая энергетика",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 1.8,
        "6 мес": 4.6,
        "1 год": 10.2,
        "3 года": 31.5
      }
    }
  },

  {
    "id": "first-solar",
    "category": "esg",
    "categoryLabel": "ESG",
    "categoryClass": "esg",
    "name": "First Solar",
    "ticker": "FSLR",
    "icon": "./assets/icons/solar.svg",
    "description": "Солнечная энергетика",
    "fullDescription": "First Solar производит солнечные модули и развивает решения для производства чистой энергии.",
    "price": 186.40,
    "currency": "USD",
    "unit": "акция",
    "change24h": 1.56,
    "risk": "Высокий",
    "riskLevel": "high",
    "sector": "Солнечная энергетика",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 2.8,
        "6 мес": 6.5,
        "1 год": 15.4,
        "3 года": 47.2
      }
    }
  },

  {
    "id": "vestas",
    "category": "esg",
    "categoryLabel": "ESG",
    "categoryClass": "esg",
    "name": "Vestas Wind Systems",
    "ticker": "VWS",
    "icon": "./assets/icons/vestas.svg",
    "description": "Ветряная энергетика",
    "fullDescription": "Vestas разрабатывает и производит оборудование для ветровых электростанций.",
    "price": 21.84,
    "currency": "EUR",
    "unit": "акция",
    "change24h": 0.94,
    "risk": "Средний",
    "riskLevel": "medium",
    "sector": "Ветровая энергетика",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 1.6,
        "6 мес": 4.2,
        "1 год": 9.8,
        "3 года": 30.2
      }
    }
  },

  {
    "id": "enphase-energy",
    "category": "esg",
    "categoryLabel": "ESG",
    "categoryClass": "esg",
    "name": "Enphase Energy",
    "ticker": "ENPH",
    "icon": "./assets/icons/enphase.svg",
    "description": "Солнечные энергосистемы",
    "fullDescription": "Enphase Energy создаёт технологии для солнечных энергосистем и хранения электроэнергии.",
    "price": 58.30,
    "currency": "USD",
    "unit": "акция",
    "change24h": 2.04,
    "risk": "Высокий",
    "riskLevel": "high",
    "sector": "Энергетические технологии",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 3.4,
        "6 мес": 7.1,
        "1 год": 17.8,
        "3 года": 53.0
      }
    }
  },

  {
    "id": "orsted",
    "category": "esg",
    "categoryLabel": "ESG",
    "categoryClass": "esg",
    "name": "Ørsted",
    "ticker": "ORSTED",
    "icon": "./assets/icons/orsted.svg",
    "description": "Морская ветровая энергетика",
    "fullDescription": "Ørsted развивает проекты в области морской ветровой энергетики и других возобновляемых источников.",
    "price": 43.72,
    "currency": "EUR",
    "unit": "акция",
    "change24h": 1.18,
    "risk": "Средний",
    "riskLevel": "medium",
    "sector": "Возобновляемая энергетика",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 1.7,
        "6 мес": 4.5,
        "1 год": 10.5,
        "3 года": 32.1
      }
    }
  },

  {
    "id": "schneider-electric",
    "category": "esg",
    "categoryLabel": "ESG",
    "categoryClass": "esg",
    "name": "Schneider Electric",
    "ticker": "SU",
    "icon": "./assets/icons/schneider.svg",
    "description": "Энергоэффективность и автоматизация",
    "fullDescription": "Schneider Electric развивает технологии управления энергией, автоматизации и повышения энергоэффективности.",
    "price": 244.80,
    "currency": "EUR",
    "unit": "акция",
    "change24h": 0.72,
    "risk": "Средний",
    "riskLevel": "medium",
    "sector": "Энергоэффективность",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 1.4,
        "6 мес": 3.8,
        "1 год": 8.9,
        "3 года": 27.5
      }
    }
  },

  {
    "id": "veolia",
    "category": "esg",
    "categoryLabel": "ESG",
    "categoryClass": "esg",
    "name": "Veolia",
    "ticker": "VIE",
    "icon": "./assets/icons/veolia.svg",
    "description": "Вода, отходы и экологические решения",
    "fullDescription": "Veolia работает в сфере управления водными ресурсами, отходами и экологической инфраструктуры.",
    "price": 32.64,
    "currency": "EUR",
    "unit": "акция",
    "change24h": 0.63,
    "risk": "Низкий",
    "riskLevel": "low",
    "sector": "Экологические услуги",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 1.2,
        "6 мес": 3.1,
        "1 год": 7.4,
        "3 года": 22.8
      }
    }
  },

  {
    "id": "global-clean-energy",
    "category": "esg",
    "categoryLabel": "ESG",
    "categoryClass": "esg",
    "name": "Global Clean Energy",
    "ticker": "INRG",
    "icon": "./assets/icons/clean-energy.svg",
    "description": "Чистая энергетика",
    "fullDescription": "Инструмент, ориентированный на компании, работающие в сфере возобновляемой энергетики и экологических технологий.",
    "price": 26.55,
    "currency": "USD",
    "unit": "доля",
    "change24h": 1.34,
    "risk": "Высокий",
    "riskLevel": "high",
    "sector": "Возобновляемая энергетика",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 2.1,
        "6 мес": 5.7,
        "1 год": 13.8,
        "3 года": 42.5
      }
    }
  },

  {
    "id": "gold",
    "category": "gold",
    "categoryLabel": "Драгоценные металлы",
    "categoryClass": "gold",
    "name": "Gold",
    "ticker": "GOLD",
    "icon": "./assets/icons/gold.svg",
    "description": "Золото",
    "fullDescription": "Золото — драгоценный металл, который часто используется как инструмент сохранения стоимости.",
    "price": 4324.40,
    "currency": "USD",
    "unit": "тройская унция",
    "change24h": 0.73,
    "risk": "Средний",
    "riskLevel": "medium",
    "sector": "Драгоценные металлы",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 1.2,
        "6 мес": 3.1,
        "1 год": 7.3,
        "3 года": 22.0
      }
    }
  },

  {
    "id": "silver",
    "category": "gold",
    "categoryLabel": "Драгоценные металлы",
    "categoryClass": "gold",
    "name": "Silver",
    "ticker": "SILVER",
    "icon": "./assets/icons/silver.svg",
    "description": "Серебро",
    "fullDescription": "Серебро используется как промышленный металл и инвестиционный актив.",
    "price": 51.20,
    "currency": "USD",
    "unit": "тройская унция",
    "change24h": 1.15,
    "risk": "Средний",
    "riskLevel": "medium",
    "sector": "Драгоценные металлы",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 1.8,
        "6 мес": 4.2,
        "1 год": 9.5,
        "3 года": 29.0
      }
    }
  },

  {
    "id": "platinum",
    "category": "gold",
    "categoryLabel": "Драгоценные металлы",
    "categoryClass": "gold",
    "name": "Platinum",
    "ticker": "PLAT",
    "icon": "./assets/icons/platinum.svg",
    "description": "Платина",
    "fullDescription": "Платина — редкий драгоценный металл, востребованный в промышленности и ювелирной отрасли.",
    "price": 1685.30,
    "currency": "USD",
    "unit": "тройская унция",
    "change24h": 0.58,
    "risk": "Средний",
    "riskLevel": "medium",
    "sector": "Драгоценные металлы",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 1.3,
        "6 мес": 3.5,
        "1 год": 8.1,
        "3 года": 24.7
      }
    }
  },

  {
    "id": "palladium",
    "category": "gold",
    "categoryLabel": "Драгоценные металлы",
    "categoryClass": "gold",
    "name": "Palladium",
    "ticker": "PALL",
    "icon": "./assets/icons/palladium.svg",
    "description": "Палладий",
    "fullDescription": "Палладий — редкий металл, применяемый преимущественно в промышленности.",
    "price": 1240.60,
    "currency": "USD",
    "unit": "тройская унция",
    "change24h": -0.42,
    "risk": "Высокий",
    "riskLevel": "high",
    "sector": "Драгоценные металлы",

    "investment": {
      "defaultAmount": 100,
      "amountOptions": [100, 500, 1000, 5000],
      "defaultTerm": "1 год",
      "termOptions": ["3 мес", "6 мес", "1 год", "3 года"],
      "expectedReturn": {
        "3 мес": 2.0,
        "6 мес": 4.8,
        "1 год": 11.2,
        "3 года": 34.0
      }
    }
  }
]