/**
 * SchedulingController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    // GetAll/ListarTodos
    getAll: async function (req, res) {
        let schedulingData = await Scheduling.find().populate('idUser').populate('idVehicle').populate('status').populate('idServicesClean').populate('typePayment').populate('idEmployee');
        if (schedulingData) {
            return res.ok(schedulingData);
        } else {
            return res.status(500).send({
                success: false,
                message: 'Erro ao listar agendamento.',
            });
        }

    },

    // GetAllById/ListarTodosPorId
    getAllById: async function (req, res) {
        var idUser = req.param('id');
        let schedulingData = await Scheduling.find({ "idUser": idUser }).populate('idUser').populate('idVehicle').populate('status').populate('idServicesClean').populate('typePayment').populate('idEmployee');
        if (schedulingData) {
            return res.ok(schedulingData);
        } else {
            return res.status(500).send({
                success: false,
                message: 'Erro ao detalhar agendamento.',
            });
        }
    },

    // Create/Criar
    create: async function (req, res) {
        let schedulingData = req.allParams();

        let ReturnScheduling = await Scheduling.create({
            schedulingDate: schedulingData.schedulingDate,
            status: schedulingData.status,
            description: schedulingData.description,
            idUser: schedulingData.idUser,
            idVehicle: schedulingData.idVehicle,
            idServicesClean: schedulingData.idServicesClean,
            typePayment: schedulingData.typePayment,
            idEmployee: schedulingData.idEmployee,
        }).fetch();

        let data;
        if (ReturnScheduling) {
            data = {
                success: true,
                message: 'Agedamento criado com sucesso.',
            }
        } else {
            data = {
                success: false,
                message: 'Erro ao criar o Agedamento.',
            }

        }
        return res.ok(data);
    },

    // Update/Atualizar
    update: async function (req, res) {
        let schedulingData = req.allParams();

        var newScheduling = await Scheduling.updateOne({ "id": schedulingData.id }).set({
            schedulingDate: schedulingData.schedulingDate,
            status: schedulingData.status,
            description: schedulingData.description,
            idUser: schedulingData.idUser,
            idVehicle: schedulingData.idVehicle,
            idServicesClean: schedulingData.idServicesClean,
            typePayment: schedulingData.typePayment,
            idEmployee: schedulingData.idEmployee,
        });
        if (!newScheduling) {
            return res.status(500).send({
                success: false,
                message: 'Erro ao atualizar o agendamento.',
            });
        } else {
            return res.ok({
                success: true,
                message: 'Agendamento atualizado com sucesso.',
            });
        }
    },

    // Update/Atualizar
    updateStatus: async function (req, res) {
        let schedulingData = req.allParams();

        var newScheduling = await Scheduling.updateOne({ "id": schedulingData.id }).set({
            status: schedulingData.status,
        });
        if (!newScheduling) {
            return res.status(500).send({
                success: false,
                message: 'Erro ao atualizar o Status.',
            });
        } else {
            return res.ok({
                success: true,
                message: 'Status atualizado com sucesso.',
            });
        }
    },

    // Delete/Deletar
    delete: async function (req, res) {
        var id = req.param('id');
        var SchedulingDestroy = await Scheduling.destroyOne({
            id: id
        });

        if (SchedulingDestroy) {
            return res.ok({
                success: true,
                message: 'Deletado com sucesso.',
            });
        } else {
            return res.status(500).send({
                success: false,
                message: 'Erro ao excluir agendamento.',
            });
        }
    },
};
