## Tecnologia utilizadas

As tecnologia principais foram o React para a criação de componentes, aliado à tipagem do Typescript. Para o gerenciamento de estado foi usado o Context API do próprio React. Para os formulários foi usado o Formik na criação dos campos e o Yup para validá-los. Os gráficos foram criados com o Nivo. Para os estilos foi utilizado o Styled Components.

## Geração dos gráfico

A lógica dos dados do gráfico se localizam no reducer do Context. Para o bitcoin foi utilizada a API de dados históricos da CryptoCompare. O reducer calcula a quantidade inicial de bitcoins do usuário com base no seu investimento inicial e na cotação da moeda no dia. A partir deste valor é calculado a rentabilidade graças a cotação dos dias seguintes. Para o tesouro direto prefixado foi utilizada a fórmula do juros composto considerando uma taxa anual de 10%.

## Projeto

O projeto utiliza o Yarn como gerenciador de pacotes. Ao baixá-lo, deve-se instalar as dependências com o comando "yarn install". Para rodar o projeto deve-se utilizar o comando "yarn start".