var Note = require('../Model/client.model');

// Create and Save a new Note
module.exports.PosteList = function(req,res) {
   
    var nom = req.body.nom
    var prenom = req.body.prenom
    Note.find()
        .then(note => {
            if(note.length==0) {
                id = 0;
                console.log('tafa',id);
                
            }else{
                id = parseInt(note[note.length-1].id)+1;
            }

            const insert = new Note({id:id,nom:nom,prenom:prenom});
            (!nom || !prenom)? console.log("manque des données"):insert.save()
                .then(()=>{
                    Note.find()
                        .then(note=>{
                            res.send(note);
                        })
                })
                .catch(e=>{
                    res.status(500).send({mes:e.mes || "erreur"})
                })
        })
    }

    module.exports.GetList = (req, res) => {
        Note.find()
            .then(note=>{
                res.send(note)
            })
            .catch (e =>{
                res.status(500).send({mes:e.mes || "erreur"})
            });
    };
    









//     if(!req.body.prenom) {
//         return res.status(400).send({
//             message: "Note content can not be empty"
//         });
//     }

//     // Create a Note
//     const note = new Note({
//         nom: req.body.nom || "Untitled Note", 
//         prenom: req.body.prenom
//     });

//     // Save Note in the database
//     note.save()
//     .then(data => {
//         res.send(data);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while creating the Note."
//         });
//     });
// };