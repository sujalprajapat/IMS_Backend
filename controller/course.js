const course = require("../model/course");
const storage = require("node-persist");
storage.init(/* options ... */);

exports.add_course = async (req, res) => {
  var admin_id = await storage.getItem("admin-login");
  if (admin_id) {
    var data = await course.create(req.body);

    res.status(200).json({
      data,
      status: "course-inserted......!",
    });
  } else {
    res.status(200).json({
      status: "data error....",
    });
  }
};

exports.course_update = async (req, res) => {
  var admin_id = await storage.getItem("admin-login");
  if (admin_id) {
    var id = req.params.id;
    var data = await course.findByIdAndUpdate(id, req.body);

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

// exports.course_update = async (req, res) => {
//       var id = req.params.id;
//     var data = await course.findById(id, req.body);

//     res.status(200).json({
//       data,
//       status: "data-updated.....!",
//     });
 
// };
exports.course_delete = async (req, res) => {
  
    var id = req.params.id;
    var data = await course.findByIdAndDelete(id, req.body);
    res.status(200).json({
      status: "data-deleted.....!",
    });
  
};
exports.course_view = async (req, res) => {
  var dat = await course.find().count();
    var data = await course.find();
    res.status(200).json({
      dat,
      data,
      status: "data-viewed......!",
    });
  
};
exports.search_course = async (req, res) => {
  
    var query = req.query;
    var data = await course.find(query);
    res.status(200).json({
      data,
      status: "data-searched.....!",
    });
  
};
