/**
 * VehiclesUsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    // GetAll/ListarTodos
    getAll: async function (req, res) {
        let userVehicleData = await VehiclesUsers.find();
        if (userVehicleData) {
            return res.ok(userVehicleData);
        } else {
            return res.status(500).send({
                success: false,
                message: 'Erro ao listar veículos.',
            });
        }

    },

    // GetAllById/ListarTodosPorId
    getAllById: async function (req, res) {
        var idUser = req.param('id');
        let userVehicleData = await VehiclesUsers.find({"idUser": idUser});
        if (userVehicleData) {
            return res.ok(userVehicleData);
        } else {
            return res.status(500).send({
                success: false,
                message: 'Erro ao listar veículos.',
            });
        }
    },

    // Create/Criar
    create: async function (req, res) {
        let userVehicleData = req.allParams();

        let ReturnUserVehicle = await VehiclesUsers.create({
            name: userVehicleData.name,
            typeVehicle: userVehicleData.typeVehicle,
            brand: userVehicleData.brand,
            model: userVehicleData.model,
            placa: userVehicleData.placa,
            color: userVehicleData.color,
            isActive: userVehicleData.isActive,
            idUser: userVehicleData.idUser,
        }).fetch();

        let data;
        if (ReturnUserVehicle) {
            data = {
                success: true,
                message: 'Veículo criado com sucesso.',
            }
        } else {
            data = {
                success: false,
                message: 'Erro ao criar o Veículo.',
            }

        }
        return res.ok(data);
    },

    // Update/Atualizar
    update: async function (req, res) {
        let userVehicleData = req.allParams();

        var newUserVehicle = await VehiclesUsers.updateOne({ "id": userVehicleData.id }).set({
            name: userVehicleData.name,
            typeVehicle: userVehicleData.typeVehicle,
            brand: userVehicleData.brand,
            model: userVehicleData.model,
            placa: userVehicleData.placa,
            color: userVehicleData.color,
        });
        if (!newUserVehicle) {
            return res.status(500).send({
                success: false,
                message: 'Erro ao atualizar o veículo.',
            });
        } else {
            return res.ok({
                success: true,
                message: 'Veículo atualizado com sucesso.',
            });
        }
    },

    // Delete/Deletar
    delete: async function (req, res) {
        var id = req.param('id');
        var VehiclesUsersDestroy = await VehiclesUsers.destroyOne({
            id: id
        });
        let vehiclesUsersFind = await User.find({ id: id }).then();
        if (vehiclesUsersFind.length > 0) {
            var vehiclesUsersUpdate = await VehiclesUsers.updateOne({ "id": id }).set({
                isActive: 'false',
            });
            if (!vehiclesUsersUpdate) {
                return res.status(500).send({
                    success: false,
                    message: 'Erro ao excluir o veículo.',
                });
            } else {
                return res.ok({
                    success: true,
                    message: 'Veículo excluído com sucesso.',
                });
            }
        } else {
            if (VehiclesUsersDestroy) {
                return res.ok({
                    success: true,
                    message: 'Deletado com sucesso.',
                });
            } else {
                return res.status(500).send({
                    success: false,
                    message: 'Erro ao excluir veículo.',
                });
            }
        }
    },
};

