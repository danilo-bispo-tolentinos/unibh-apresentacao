/**
 * TypeUserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    // Create/Criar
    create: async function (req, res) {
        let userTypeData = req.allParams();
        let userTypeFind = await TypeUser.find({ name: userTypeData.name }).then();
        if (userTypeFind.length > 0) {
            return res.status(500).send({
                success: false,
                message: 'O nome: ' + userTypeData.name + ' já está sendo utilizado.',
            });
        } else {
            let ReturnPayment = await TypeUser.create({
                name: userTypeData.name,
            }).fetch();

            let data;
            if (ReturnPayment) {
                data = {
                    success: true,
                    message: 'Tipo do usuário criado com sucesso.',
                }
            } else {
                data = {
                    success: false,
                    message: 'Erro ao criar o Tipo do usuário.',
                }

            }
            return res.ok(data);
        }
    },

    // GetAll/ListarTodos
    getAll: async function (req, res) {
        let userTypeData = await TypeUser.find();
        if (userTypeData) {
            return res.ok(userTypeData);
        } else {
            return res.status(500).send({
                success: false,
                message: 'Erro ao listar os tipos de usuários.',
            });
        }

    },

    // Update/Atualizar
    update: async function (req, res) {
        let userTypeData = req.allParams();
        let userTypeFind = await TypeUser.find({ name: userTypeData.newName }).then();
        if (userTypeFind.length > 0) {
            return res.status(500).send({
                success: false,
                message: 'O nome: ' + userTypeData.newName + ' já está sendo utilizado.',
            });
        } else {
            var newPayment = await TypeUser.updateOne({ "id": userTypeData.id }).set({
                name: userTypeData.newName
            });
            if (!newPayment) {
                return res.status(500).send({
                    success: false,
                    message: 'Erro ao atualizar o usuário.',
                });
            } else {
                return res.ok({
                    success: true,
                    message: 'Tipo do usuário atualizado com sucesso.',
                });
            }
        }
    },

    // Delete/Deletar
    delete: async function (req, res) {
        var id = req.param('id');
        var TypeUserDestroy = await TypeUser.destroyOne({
            id: id
        });

        if (TypeUserDestroy) {
            return res.ok({
                success: true,
                message: 'Deletado com sucesso.',
            });
        } else {
            return res.status(500).send({
                success: false,
                message: 'Erro ao excluir tipo do usuário.',
            });
        }
    },
};

