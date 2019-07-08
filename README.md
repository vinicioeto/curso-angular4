curso-angular4
===================

tsc init
------------------
  * Cria o arquivo tsconfig.json

ts.config
------------------
  * "target":
    qual a versão de compilação
  * "outDir":
    define o local dos arquivos de compilação

 
tsc - w
------------------ 
  * assiste o diretório atualizando o projeto de acordo com as configuraçõs de ts.config
  compila os arquivos ts em js


Angular
------------------
  <h4>Criar novo projeto Angular</h4>
  
   * No prompt 'ng new nome_projeto'
   * No prompt 'ng new nome_projeto -p escreverPrefixoDoSeletor'
   * O prefixo fica configurado no .angular.json

  <h4>Criar componente sem spec </h4>
  
   * No prompt 'ng g c nome-componente --spec=false'

Instalar bootstrap, tether e jquery
------------------
  * 'npm install bootstrap --save' .: Adicionar em angular.json styles "../node_modules/bootstrap/dist/css/bootstrap.min.css" .: Adicionar em angular.json scripts "../node_modules/bootstrap/dist/js/bootstrap.min.js"
  * 'npm install jquery --save' .: Adicionar em angular.json scripts "../node_modules/jquery/dist/jquery.min.js"
  * 'npm install tether --save' .: Adicionar em angular.json scripts "../node_modules/tether/dist/js/tether.min.js"

Alterar o icone da aba que fica no navegador fav icon
------------------
  * Escolher uma imagem
  * Procurar fav icon generator no google 'https://www.favicon-generator.org/'
  * Escolher o arquivo da imagem > Create Favicon > downlodad the generated favicon

Fazer build do projeto
------------------
  <h4>Gerando Build</h4>
  * No prompt 'ng build'  (build de desenvolvimento)
  * No prompt 'ng build --prod'  (build de produção)
  * Ao fazer o Build é criado a pasta dist na pasta do projeto. O build de produção é mimificado

Deploy local via http-server ou lite-server
------------------
  <h4>Instalar ou lite-server ou http-server</h4>
  * lite server 'npm install lite-server -g'
  * http-server 'npm install http-server -g'

  <h4>Fazer deploy local</h4>
  * Na pasta dist, executar o comando 'http-server' ou 'lite-server'

Deploy local via XAMPP
------------------
  * Instalar o xamp 'https://www.apachefriends.org/pt_br/download.html'
  * Iniciar o Apahe do xammp
  * Na pasta 'C:\xampp\htdocs' copiar o conteudo do 'dist' feito no deploy
  * Acessar a url 'http://localhost:80'

Deploy na nuvem da Amazon
------------------
  * https://www.udemy.com/curso-de-desenvolvimento-web-com-es6-typescript-e-angular-4/learn/lecture/7575606#questions
  * 'https://aws.amazon.com/pt/free'
  * No site, em localizar serviços, procure por 's3'
  * criar bucket > clicar no bucket > copiar todos os arquivos e adicionar no bucket > upload
  * Na aba Properties > static website hosting > use this bucket host a website > preencher o resto
  * Na aba Permissions > Bucket Policy > Documentation > Bucket Policy Examples > Grantnig Read-Only Permission to an Anonumoys User > copiar o script e colar no Bucket Policy. (colocar o nome do nosso bucket no script onde está 'examplebucket')