const branch = require("../model/branch");
const storage = require("node-persist");
storage.init(/* options ... */);

exports.add_branch = async (req, res) => {
  var admin_id = await storage.getItem("admin-login");
  console.log(admin_id);
  if (admin_id) {
    var data = await branch.create(req.body);

    res.status(200).json({
      data,
      status: "branch-inserted......!",
    });
  } else {
    res.status(200).json({
      status: "data error....",
    });
  }
};

exports.branch_update = async (req, res) => {
  var admin_id = await storage.getItem("admin-login");
  console.log(admin_id);
  if (admin_id) {
    var id = req.params.id;
    var data = await branch.findByIdAndUpdate(id,req.body);
    res.status(200).json({
      data,
      status: "data-updated.....!",
    });
  } else {
    res.status(200).json({
      status: "data error....",
    });
  }
};

// exports.branch_update = async (req, res) => {
  
//     var id = req.params.id;
//     var data = await branch.findById(id, req.body);

//     res.status(200).json({
//       data,
//       status: "data-updated.....!",
//     });
  
// };
exports.branch_delete = async (req, res) => {
  
    var id = req.params.id;
    var data = await branch.findByIdAndDelete(id, req.body);
    res.status(200).json({
      status: "data-deleted.....!",
    });
  
};
exports.branch_view = async (req, res) => {
  
    var data = await branch.find();
    var dat = await branch.find().count();
    res.status(200).json({
      dat,
      data,
      status: "data-viewed......!",
    });
  
};
exports.search_branch = async (req, res) => {
  
    var search = req.query;
    var data = await branch.find(search);
    res.status(200).json({
      data,
      status: "data-searched.....!",
    });
  
};
