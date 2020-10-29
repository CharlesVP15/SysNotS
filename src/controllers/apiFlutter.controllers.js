const flutterControllers = {}

const Notas = require('../models/Notas');
const User = require('../models/User');

// Listar Notas API
flutterControllers.renderNotesAPI = async (req, res) => {
   // const listNotasAPI = await Notas.find({},  
   // await Notas.find({}, 
   //    (req, res) => {
   //       User.populate(res, {path: "userid"}, 
   //          (req, res) => {
   //             res.status(200).send(res);
   //          });
   // }).lean();
   /* ?Devuelve todo el campo del user completo */
   // const listNotasAPI = await Notas.find().populate("userid").exec();

   /* ?Devuelve determinados datos del user completo */
   const listNotasAPI = await Notas.find().populate("userid", "cedula apellidos nombres edad genero email").exec();
   res.json({ notes: listNotasAPI });
}

// Listar Usuarios API
flutterControllers.renderUsersAPI = async (req, res) => {
   const listUsersAPI = await User.find().lean().sort({createdAt: 'desc'});
   res.json({ users: listUsersAPI });
}

module.exports = flutterControllers;