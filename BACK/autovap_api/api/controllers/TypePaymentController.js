/**
 * TypePaymentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    // Create/Criar
    create: async function (req, res) {
        let paymentData = req.allParams();
        let paymentFind = await TypePayment.find({ name: paymentData.name }).then();
        if (paymentFind.length > 0) {
            return res.status(500).send({
                success: false,
                message: 'O nome: ' + paymentData.name + ' já está sendo utilizado.',
            });
        } else {
            let ReturnPayment = await TypePayment.create({
                name: paymentData.name,
            }).fetch();

            let data;
            if (ReturnPayment) {
                data = {
                    success: true,
                    message: 'Tipo do pagamento criado com sucesso.',
                }
            } else {
                data = {
                    success: false,
                    message: 'Erro ao criar o Tipo do pagamento.',
                }

            }
            return res.ok(data);
        }
    },

    // GetAll/ListarTodos
    getAll: async function (req, res) {
        let paymentData = await TypePayment.find();
        if (paymentData) {
            return res.ok(paymentData);
        } else {
            return res.status(500).send({
                success: false,
                message: 'Erro ao listar os tipos de pagamentos.',
            });
        }

    },

    // Update/Atualizar
    update: async function (req, res) {
        let paymentData = req.allParams();
        let paymentFind = await TypePayment.find({ name: paymentData.newName }).then();
        if (paymentFind.length > 0) {
            return res.status(500).send({
                success: false,
                message: 'O nome: ' + paymentData.newName + ' já está sendo utilizado.',
            });
        } else {
            var newPayment = await TypePayment.updateOne({ "id": paymentData.id }).set({
                name: paymentData.newName
            });
            if (!newPayment) {
                return res.status(500).send({
                    success: false,
                    message: 'Erro ao atualizar o pagamento.',
                });
            } else {
                return res.ok({
                    success: true,
                    message: 'Tipo do pagamento atualizado com sucesso.',
                });
            }
        }
    },

    // Delete/Deletar
    delete: async function (req, res) {
        var id = req.param('id');
        var typePaymentDestroy = await TypePayment.destroyOne({
            id: id
        });

        if (typePaymentDestroy) {
            return res.ok({
                success: true,
                message: 'Deletado com sucesso.',
            });
        } else {
            return res.status(500).send({
                success: false,
                message: 'Erro ao excluir tipo do pagamento.',
            });
        }
    },
};

