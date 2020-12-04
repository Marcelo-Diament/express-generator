const controller = {
  index: (req, res, next) => res.render('users', {
    title: 'Usuários',
    subtitle: 'Página da view de Users'
  }),
  show: (req, res, next) => res.send(`<h1>Usuário ${req.params.id}</h1>`),
  add: (req, res, next) => res.send(`<h1>Adicionar Novo Usuário</h1>`),
  edit: (req, res, next) => res.send(`<h1>Editar Usuário ${req.params.id}</h1>`),
  delete: (req, res, next) => res.send(`<h1>Excluir Usuário ${req.params.id}</h1>`)
}

module.exports = controller