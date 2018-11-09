var Ninja = require('./models.js');

module.exports ={
    home: function(req, res) {
      console.log('hitting controller');
      Ninja.find({})
        .then (data => {console.log(data)||res.json({message: "Success", data: data})})
        .catch (err => {console.log(err)||res.json({message: "Error", error: err})})
    },
    farmGold: function(req, res){
      const name = req.body.name;
        Ninja.findOneAndUpdate({name: name},{$set:{farm:req.body.farmGold}})
          .then (data => {console.log(data)||res.json({message: "farm gold added!", data: data})})
          .catch (err => {console.log(err)||res.json({message: "Error", error: err})})
    },
    add: function(req, res) {
      Ninja.create(req.body)
      .then((data)=>{console.log(data)||res.json({message: "Ninja added!", data: data})})
      .catch((err)=>{console.log(err)||res.json({message: "Error", error: err})})
    },
    update: function(req, res) {
      Ninja.findOneAndUpdate({_id:req.params.id}, req.body)
      .then (data => {console.log(data)||res.json({message: "Gold Added", data: data})})
      .catch (err => {console.log(err)||res.json({message: "Error", error: err})})
    },
    delete: function(req, res) {
      Ninja.findOneAndDelete({_id:req.params.id})
      .then (data => {console.log(data)||res.json({message: "RECORD DELETED", data: data})})
      .catch (err => {console.log(err)||res.json({message: "Error", error: err})})
    }
} //end of module.exports