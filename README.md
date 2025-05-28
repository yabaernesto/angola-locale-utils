# Angola Locale Utils

<p>
  É uma solução focada na formatação de números “moedas” e datas para a localidade angolana (pt-AO). Ela permitirá que desenvolvedores trabalhem com dados financeiros e temporais formatados para Angola com facilidade e precisão, adaptando-se às convenções de idioma e moeda específicas do país.
</p>

## Funcionalidades Principais:
1. Formatação de Moeda (AOA - Kz):
- [x] Formatação de valores monetários em Kwanza (Kz), incluindo símbolo da moeda e separadores numéricos angolanos.
- [x] Exibição personalizada de acordo com as convenções locais, posicionando o símbolo da moeda à direita ou esquerda conforme o uso mais comum.
- [x] Configuração de estilo com Intl.NumberFormat, mas com adaptações manuais para garantir que o símbolo apareça de maneira consistente em todos os ambientes.

2. Formatação de Números para pt-AO
- [x] Adaptação de números para o formato angolano, como separadores de milhar com ponto (.) e decimais com vírgula (,).
- [x] Funções para controle de precisão, arredondamento e exibição para garantir consistência no estilo angolano.

3. Formatação de Datas e Horas
- [x] Funções baseadas em Intl.DateTimeFormat para exibir datas no estilo dia/mês/ano, comum em Angola.
- [x] Formatação de datas completas e opções para datas abreviadas.
- [x] Configuração de fuso horário padrão de Angola (UTC+1), ajustando datas automaticamente para essa região.

4. Configurações e Personalização:
- [x] Configurações padrão baseadas em Angola, mas com opções para personalizar a exibição de moeda, estilo de números e formatos de data.
- [x] Facilidade de uso para adaptar valores rapidamente ao contexto angolano em aplicações web e móveis.

### Exemplo de uso
```js
import { locale } from 'angola-locale-utils'

// Exemplos de valores
const currencyValue = 9876543.21
// Data com dia, mês, hora e minutos
const dateValue = new Date(2024, 9, 31, 10, 15) 
const numberValue = 1234567.89

// Usando a função formatCurrency para formatar moeda
console.log(locale.formatCurrency(currencyValue, 'before')) 
// Saída: "Kz 9.876.543,21"
console.log(locale.formatCurrency(currencyValue, 'after'))
// Saída: "9.876.543,21 Kz"

// Usando a função formatDate para formatar datas
console.log(locale.formatDate(dateValue))
// Saída: "31/10/2024"
console.log(locale.formatDate(dateValue, 'MM/DD/YYYY'))
// Saída: "10/31/2024"
console.log(locale.formatDate(dateValue, 'YYYY-MM-DD'))
// Saída: "2024-10-31"
console.log(locale.formatDate(dateValue, 'extenso'))
// Saída: "31 de outubro de 2024"
console.log(locale.formatDate(dateValue, 'DD/MM/YYYY', true))
// Saída: "31/10/2024 10:15:00"
console.log(locale.formatDate(dateValue, 'DD/MM/YYYY', true, true))
// Saída: "31/10/2024 10:15:00 AM/PM"

// Usando a função formatNumber para formatar números
console.log(locale.formatNumber(numberValue))
// Saída: "1.234.567,89"
```

## Como usar?
```bash
npm i angola-locale-utils
```

## Benefícios da Biblioteca
- Facilidade de Uso: Funções prontas para uso direto em JavaScript/TypeScript, sem necessidade de configurações extras.
- Consistência Regional: Garantia de que os dados financeiros e temporais serão exibidos conforme as normas angolanas.
- Aprimoramento de Internacionalização: Facilita o desenvolvimento de aplicações direcionadas para o mercado angolano com precisão e conformidade.

### Nota:
Esta biblioteca foi feita para cobrir uma necessidade essencial para o mercado angolano, trazendo padronização para dados locais e facilitando o trabalho de desenvolvedores que precisam lidar com formatos de exibição específicos de Angola.
