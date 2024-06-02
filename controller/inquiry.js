var inquiry = require('../model/inquiry')

const storage = require("node-persist");
storage.init(/* options ... */);

exports.add_inq = async (req,res) => {
   
        var data = await inquiry.create(req.body);
        res.status(200).json({
            data,
            status: "data inserted...."
          });

   
}

exports.inquiry_update = async (req, res) => {
   
      var id = req.params.id;
      var data = await inquiry.findByIdAndUpdate(id, req.body);
  
      res.status(200).json({
        data,
        status: "data-updated.....!",
      });
   
  };
  
// exports.inquiry_update = async (req, res) => {
//      var id = req.params.id;
//     var data = await inquiry.findById(id, req.body);

//     res.status(200).json({
//       data,
//       status: "data-updated.....!",
//     });
 
// };
  exports.inquiry_delete = async (req, res) => {
 
      var id = req.params.id;
      var data = await inquiry.findByIdAndDelete(id, req.body);
      res.status(200).json({
        status: "data-deleted.....!",
      });
   
  };
  exports.inquiry_view = async (req, res) => {
  
      var data = await inquiry.find().populate('branch_id').populate('ref_id').populate('inq_by').populate('status').populate('course_id');
      var dat = await inquiry.find().count();
      res.status(200).json({
        dat,
        data,
        status: "data-viewed......!",
      });
   
  };
  exports.search_inquiry = async (req, res) => {
  
      var query = req.query;
      var data = await inquiry.find(query);
      res.status(200).json({
        data,
        status: "data-searched.....!",
      });
    
  };
  