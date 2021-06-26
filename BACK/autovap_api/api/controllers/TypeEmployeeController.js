/**
 * TypeEmployeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    // Create/Criar
    create: async function (req, res) {
        let employeeData = req.allParams();
        let employeeFind = await TypeEmployee.find({ name: employeeData.name }).then();
        if (employeeFind.length > 0) {
            return res.status(500).send({
                success: false,
                message: 'O nome: ' + employeeData.name + ' já está sendo utilizado.',
            });
        } else {
            let ReturnPayment = await TypeEmployee.create({
                name: employeeData.name,
            }).fetch();

            let data;
            if (ReturnPayment) {
                data = {
                    success: true,
                    message: 'Tipo do funcionário criado com sucesso.',
                }
            } else {
                data = {
                    success: false,
                    message: 'Erro ao criar o Tipo do funcionário.',
                }

            }
            return res.ok(data);
        }
    },

    // GetAll/ListarTodos
    getAll: async function (req, res) {
        let employeeData = await TypeEmployee.find();
        if (employeeData) {
            return res.ok(employeeData);
        } else {
            return res.status(500).send({
                success: false,
                message: 'Erro ao listar os tipos de funcionários.',
            });
        }

    },

    // Update/Atualizar
    update: async function (req, res) {
        let employeeData = req.allParams();
        let employeeFind = await TypeEmployee.find({ name: employeeData.newName }).then();
        if (employeeFind.length > 0) {
            return res.status(500).send({
                success: false,
                message: 'O nome: ' + employeeData.newName + ' já está sendo utilizado.',
            });
        } else {
            var newPayment = await TypeEmployee.updateOne({ "id": employeeData.id }).set({
                name: employeeData.newName
            });
            if (!newPayment) {
                return res.status(500).send({
                    success: false,
                    message: 'Erro ao atualizar o funcionário.',
                });
            } else {
                return res.ok({
                    success: true,
                    message: 'Tipo do funcionário atualizado com sucesso.',
                });
            }
        }
    },

    // Delete/Deletar
    delete: async function (req, res) {
        var id = req.param('id');
        var TypeEmployeeDestroy = await TypeEmployee.destroyOne({
            id: id
        });

        if (TypeEmployeeDestroy) {
            return res.ok({
                success: true,
                message: 'Deletado com sucesso.',
            });
        } else {
            return res.status(500).send({
                success: false,
                message: 'Erro ao excluir tipo do funcionário.',
            });
        }
    },
};

