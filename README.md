# express-aula-04-base-express-generator
Aula Express 04 - Express Generator

1. Instala express-package de forma global

```sh
npm install express-generator -g
```

2. Cria projeto node com o express-generator

```sh
express NomeDoProjeto --view=ejs
```

`ejs` é o template engine que utilizaremos (há outros, como pug, por exemplo)

3. Instala as dependências do projeto com `npm install` (dentro da pasta - `cd NomeDoProjeto`)

4. Vamos alterar o script do `package.json` para que o comando `start` use o `nodemon`

```json
"start": "nodemon ./bin/www"
```

5. Por fim, vamos adicionar os controllers (precisaremos criar a pasta), realizar os ajustes necessários e criar mais algumas rotas para usuários (todas utilizando o método GET). Sugerimos que crie as rotas:

* `index` (listar todos registros)

* `show` (lista um registro de ID específico)

* `add` (adicionar um registro de ID específico)

* `edit` (editar um registro de ID específico)

* `delete` (excluir um registro de ID específico)