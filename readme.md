# Tecnologias e pacotes

+ back end
- graphql library(api)
  - recomendado colocar a estenxão graphql
- graphcms (headlesscms)
+ frontend
- vite react-ts
- apollo
- tailwindcss
  - recomendado colocar a estenxão tailwindcss
- phosphor-react
- date-fns
- Vimejs
  - para o play de video
    * O Vimejs não suporta uma das features do react v18 streaming server side render, como não estamos utilizando essa features utilizamos --force para fazer a instalação Vimejs 
    npm i @vime/core @vime/react --force
    Outra opção seria troca para v17 do react