module.exports.routes = {
  
  // PAYMENT/PAGAMENTO

  'GET     /payment/all'      : 'TypePaymentController.getAll', // GetAll/ListarTodos
  'POST    /payment/create'   : 'TypePaymentController.create', // Create/Criar
  'PUT     /payment/update'   : 'TypePaymentController.update', // Update/Atualizar
  'DELETE  /payment/delete/:id': 'TypePaymentController.delete', // Delete/Deletar


};
