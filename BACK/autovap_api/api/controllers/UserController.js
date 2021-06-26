/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    // GetAll/ListarTodos
    getAll: async function (req, res) {
        let userData = await User.find();
        if (userData) {
            return res.ok(userData);
        } else {
            return res.status(500).send({
                success: false,
                message: 'Erro ao listar usuarios.',
            });
        }

    },

    // GetAllById/ListarTodosPorId
    getAllById: async function (req, res) {
        var idUser = req.param('id');
        let userData = await User.find({ "id": idUser });
        if (userData) {
            return res.ok(userData);
        } else {
            return res.status(500).send({
                success: false,
                message: 'Erro ao detalhar usuario.',
            });
        }
    },

    // Create/Criar
    create: async function (req, res) {
        let userData = req.allParams();

        let ReturnUser = await User.create({
            name: userData.name,
            phone: userData.phone,
            email: userData.email,
            password: userData.password,
            gender: userData.gender,
            isActive: userData.isActive,
            userTypeId: userData.userTypeId,
            dateBirthDate: userData.dateBirthDate,
        }).fetch();

        let data;
        if (ReturnUser) {
            data = {
                success: true,
                message: 'Usuario criado com sucesso.',
            }
        } else {
            data = {
                success: false,
                message: 'Erro ao criar o usuario.',
            }

        }
        return res.ok(data);
    },

    // Update/Atualizar
    update: async function (req, res) {
        let userData = req.allParams();

        var newUser = await User.updateOne({ "id": userData.id }).set({
            name: userData.name,
            phone: userData.phone,
            email: userData.email,
            password: userData.password,
            gender: userData.gender,
            isActive: userData.isActive,
            userTypeId: userData.userTypeId,
            dateBirthDate: userData.dateBirthDate,
        });
        if (!newUser) {
            return res.status(500).send({
                success: false,
                message: 'Erro ao atualizar o usuario.',
            });
        } else {
            return res.ok({
                success: true,
                message: 'Usuario atualizado com sucesso.',
            });
        }
    },

    // Delete/Deletar
    delete: async function (req, res) {
        var id = req.param('id');
        var UserDestroy = await User.destroyOne({
            id: id
        });
        let UserFind = await Scheduling.find({ idUser: id }).then();
        let UserFindTwo = await VehiclesUsers.find({ idUser: id }).then();
        if (UserFind.length > 0 || UserFindTwo.length > 0) {
            var UserUpdate = await User.updateOne({ "id": id }).set({
                isActive: 'false',
            });
            if (!UserUpdate) {
                return res.status(500).send({
                    success: false,
                    message: 'Erro ao excluir o usuario.',
                });
            } else {
                return res.ok({
                    success: true,
                    message: 'Usuario excluído com sucesso.',
                });
            }
        } else {
            if (UserDestroy) {
                return res.ok({
                    success: true,
                    message: 'Deletado com sucesso.',
                });
            } else {
                return res.status(500).send({
                    success: false,
                    message: 'Erro ao excluir usuario.',
                });
            }
        }
    },
};

