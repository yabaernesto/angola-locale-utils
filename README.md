# angola-locale-utils

<p>
  É uma solução focada na formatação de números “moedas” e datas para a localidade angolana (pt-AO). Ela permitirá que desenvolvedores trabalhem com dados financeiros e temporais formatados para Angola com facilidade e precisão, adaptando-se às convenções de idioma e moeda específicas do país.
</p>

## Funcionalidades Principais:
1. Formatação de Moeda (AOA - Kz):
 - Formatação de valores monetários em Kwanza (Kz), incluindo símbolo da moeda e separadores numéricos angolanos.
 - Exibição personalizada de acordo com as convenções locais, posicionando o símbolo da moeda à direita ou esquerda conforme o uso mais comum.
 - Configuração de estilo com Intl.NumberFormat, mas com adaptações manuais para garantir que o símbolo apareça de maneira consistente em todos os ambientes.
2. Formatação de Números para pt-AO
 - Adaptação de números para o formato angolano, como separadores de milhar com ponto (.) e decimais com vírgula (,).
 - Funções para controle de precisão, arredondamento e exibição para garantir consistência no estilo angolano.
3. Formatação de Datas e Horas
 - Funções baseadas em Intl.DateTimeFormat para exibir datas no estilo dia/mês/ano, comum em Angola.
 - Formatação de datas completas e opções para datas abreviadas.
 - Configuração de fuso horário padrão de Angola (UTC+1), ajustando datas automaticamente para essa região.
4. Configurações e Personalização:
 - Configurações padrão baseadas em Angola, mas com opções para personalizar a exibição de moeda, estilo de números e formatos de data.
 - Facilidade de uso para adaptar valores rapidamente ao contexto angolano em aplicações web e móveis.

### Exemplo de uso
```js
import { angolaLocaleUtils } from 'angola-locale-utils'

// Exemplos de valores
const currencyValue = 9876543.21
const dateValue = new Date(2024, 9, 31, 10, 15) // Data com dia, mês, hora e minutos
const numberValue = 1234567.89

// Usando a função formatCurrencyAOA para formatar moeda
console.log(angolaLocaleUtils.formatCurrencyAOA(currencyValue, 'before')) // Saída: "Kz 9.876.543,21"
console.log(angolaLocaleUtils.formatCurrencyAOA(currencyValue, 'after')) // Saída: "9.876.543,21 Kz"

// Usando a função formatDateAO para formatar datas
console.log(angolaLocaleUtils.formatDateAO(dateValue)) // Saída: "31/10/2024"
console.log(angolaLocaleUtils.formatDateAO(dateValue, 'MM/DD/YYYY')) // Saída: "10/31/2024"
console.log(angolaLocaleUtils.formatDateAO(dateValue, 'YYYY-MM-DD')) // Saída: "2024-10-31"
console.log(angolaLocaleUtils.formatDateAO(dateValue, 'extenso')) // Saída: "31 de outubro de 2024"
console.log(angolaLocaleUtils.formatDateAO(dateValue, 'DD/MM/YYYY', true)) // Saída: "31/10/2024 10:15:00"
console.log(angolaLocaleUtils.formatDateAO(dateValue, 'DD/MM/YYYY', true, true)) // Saída: "31/10/2024 10:15:00 AM/PM"
console.log(
  angolaLocaleUtils.formatDateAO(dateValue, 'DD/MM/YYYY', true, false, true)
) // Saída: "31/10/2024 10:15:00"

// Usando a função formatNumberAO para formatar números
console.log(angolaLocaleUtils.formatNumberAO(numberValue)) // Saída: "1.234.567,89"
```

## Benefícios da Biblioteca
- Facilidade de Uso: Funções prontas para uso direto em JavaScript, sem necessidade de configurações extras.
- Consistência Regional: Garantia de que os dados financeiros e temporais serão exibidos conforme as normas angolanas.
- Aprimoramento de Internacionalização: Facilita o desenvolvimento de aplicações direcionadas para o mercado angolano com precisão e conformidade.

### Nota:
Esta biblioteca foi feita para cobrir uma necessidade essencial para o mercado angolano, trazendo padronização para dados locais e facilitando o trabalho de desenvolvedores que precisam lidar com formatos de exibição específicos do país, Angola.

## Intalação
