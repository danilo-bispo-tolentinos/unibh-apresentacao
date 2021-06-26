/**
 * ServicesCleanController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    // Create/Criar
    create: async function (req, res) {
        let servicesCleanData = req.allParams();
        let servicesCleanFind = await ServicesClean.find({ name: servicesCleanData.name }).then();
        if (servicesCleanFind.length > 0) {
            return res.status(500).send({
                success: false,
                message: 'O nome: ' + servicesCleanData.name + ' já está sendo utilizado.',
            });
        } else {
            let ReturnServicesClean = await ServicesClean.create({
                name:        servicesCleanData.name,
                description: servicesCleanData.description,
                price:       servicesCleanData.price,
                isActive:    servicesCleanData.isActive,
            }).fetch();

            let data;
            if (ReturnServicesClean) {
                data = {
                    success: true,
                    message: 'Serviço de Limpeza criado com sucesso.',
                }
            } else {
                data = {
                    success: false,
                    message: 'Erro ao criar Serviço de Limpeza.',
                }

            }
            return res.ok(data);
        }
    },

    // GetAll/ListarTodos
    getAll: async function (req, res) {
        let servicesCleanData = await ServicesClean.find();
        if (servicesCleanData) {
            return res.ok(servicesCleanData);
        } else {
            return res.status(500).send({
                success: false,
                message: 'Erro ao listar os Serviços de Limpezas.',
            });
        }

    },

    // Update/Atualizar
    update: async function (req, res) {
        let servicesCleanData = req.allParams();
        let servicesCleanFind = await ServicesClean.find({ name: servicesCleanData.newName }).then();
        if (servicesCleanFind.length > 0) {
            return res.status(500).send({
                success: false,
                message: 'O nome: ' + servicesCleanData.newName + ' já está sendo utilizado.',
            });
        } else {
            var newServicesClean = await ServicesClean.updateOne({ "id": servicesCleanData.id }).set({
                name:        servicesCleanData.newName,
                description: servicesCleanData.newDescription,
                price:       servicesCleanData.newPrice,
                isActive:    servicesCleanData.newisActive,
            });
            if (!newServicesClean) {
                return res.status(500).send({
                    success: false,
                    message: 'Erro ao atualizar o Serviço de Limpeza.',
                });
            } else {
                return res.ok({
                    success: true,
                    message: 'Serviço de Limpeza atualizado com sucesso.',
                });
            }
        }
    },

    // Delete/Deletar
    delete: async function (req, res) {
        var id = req.param('id');
        var ServicesCleanDestroy = await ServicesClean.destroyOne({
            id: id
        });

        if (ServicesCleanDestroy) {
            return res.ok({
                success: true,
                message: 'Deletado com sucesso.',
            });
        } else {
            return res.status(500).send({
                success: false,
                message: 'Erro ao excluir Serviço de Limpeza.',
            });
        }
    },
};
