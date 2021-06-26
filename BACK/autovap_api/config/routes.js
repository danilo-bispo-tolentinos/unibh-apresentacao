module.exports.routes = {
  
  // PAYMENT/PAGAMENTO
  'GET     /payment/all'            : 'TypePaymentController.getAll', // GetAll/ListarTodos
  'POST    /payment/create'         : 'TypePaymentController.create', // Create/Criar
  'PUT     /payment/update'         : 'TypePaymentController.update', // Update/Atualizar
  'DELETE  /payment/delete/:id'     : 'TypePaymentController.delete', // Delete/Deletar

  // EMPLOYEE/FUNCIONARIO TIPOS
  'GET     /employee/all'           : 'TypeEmployeeController.getAll', // GetAll/ListarTodos
  'POST    /employee/create'        : 'TypeEmployeeController.create', // Create/Criar
  'PUT     /employee/update'        : 'TypeEmployeeController.update', // Update/Atualizar
  'DELETE  /employee/delete/:id'    : 'TypeEmployeeController.delete', // Delete/Deletar

  // TYPEUSER/USUARIOS TIPOS
  'GET     /typeUser/all'            : 'TypeUserController.getAll', // GetAll/ListarTodos
  'POST    /typeUser/create'         : 'TypeUserController.create', // Create/Criar
  'PUT     /typeUser/update'         : 'TypeUserController.update', // Update/Atualizar
  'DELETE  /typeUser/delete/:id'     : 'TypeUserController.delete', // Delete/Deletar

  // SERVICESCLEAN/SERVIÇOS DE LIMPEZA
  'GET     /servicesclean/all'       : 'ServicesCleanController.getAll', // GetAll/ListarTodos
  'POST    /servicesclean/create'    : 'ServicesCleanController.create', // Create/Criar
  'PUT     /servicesclean/update'    : 'ServicesCleanController.update', // Update/Atualizar
  'DELETE  /servicesclean/delete/:id': 'ServicesCleanController.delete', // Delete/Deletar

  // VEHICLESUSERS/VEICULOS-USUARIO
  'GET     /vehiclesusers/all'       : 'VehiclesUsersController.getAll'    , // GetAll/ListarTodos
  'GET     /vehiclesusers/byId/:id'  : 'VehiclesUsersController.getAllById', // GetById/ListarPorId
  'POST    /vehiclesusers/create'    : 'VehiclesUsersController.create'    , // Create/Criar
  'PUT     /vehiclesusers/update'    : 'VehiclesUsersController.update'    , // Update/Atualizar
  'DELETE  /vehiclesusers/delete/:id': 'VehiclesUsersController.delete'    , // Delete/Deletar

  // USER/USUARIO
  'GET     /users/all'               : 'UserController.getAll'    , // GetAll/ListarTodos
  'GET     /users/byId/:id'          : 'UserController.getAllById', // GetById/ListarPorId
  'POST    /users/create'            : 'UserController.create'    , // Create/Criar
  'PUT     /users/update'            : 'UserController.update'    , // Update/Atualizar
  'DELETE  /users/delete/:id'        : 'UserController.delete'    , // Delete/Deletar
};
