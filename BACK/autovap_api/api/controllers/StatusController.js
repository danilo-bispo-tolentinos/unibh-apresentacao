/**
 * StatusController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    // Create/Criar
    create: async function (req, res) {
        let statusData = req.allParams();
        let statusFind = await Status.find({ name: statusData.name }).then();
        if (statusFind.length > 0) {
            return res.status(500).send({
                success: false,
                message: 'O nome: ' + statusData.name + ' já está sendo utilizado.',
            });
        } else {
            let ReturnStatus = await Status.create({
                name: statusData.name,
            }).fetch();

            let data;
            if (ReturnStatus) {
                data = {
                    success: true,
                    message: 'Tipo do status criado com sucesso.',
                }
            } else {
                data = {
                    success: false,
                    message: 'Erro ao criar o Tipo do status.',
                }

            }
            return res.ok(data);
        }
    },

    // GetAll/ListarTodos
    getAll: async function (req, res) {
        let statusData = await Status.find();
        if (statusData) {
            return res.ok(statusData);
        } else {
            return res.status(500).send({
                success: false,
                message: 'Erro ao listar os tipos dos status.',
            });
        }

    },


    // Delete/Deletar
    delete: async function (req, res) {
        var id = req.param('id');
        var StatusDestroy = await Status.destroyOne({
            id: id
        });

        if (StatusDestroy) {
            return res.ok({
                success: true,
                message: 'Deletado com sucesso.',
            });
        } else {
            return res.status(500).send({
                success: false,
                message: 'Erro ao excluir tipo do status.',
            });
        }
    },
};

