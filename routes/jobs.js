const router = require('express').Router();
let Project = require('../models/project.model');

router.route('/').get(async (req, res) => {
    await Project.aggregate([
            {$lookup: {
              'from': 'jobs', 
              'localField': 'id', 
              'foreignField': 'project_id', 
              'as': 'jobs'
            }
            },
            {$unwind:{
                path: "$jobs",
                // includeArrayIndex: 'string',
                // preserveNullAndEmptyArrays: boolean
            }},
            {$project:{
                id:1,
                name:1,
                po_ref:1,
                user_id:1,
                "jobs._id":1,
                "jobs.approved":1,
                "jobs.job_number":1,
                "jobs.project_id":1,
                "jobs.status":1,
                "jobs.ETA" : {$dateToString: {
                                        date: "$jobs.ETA",
                                        format: "%d/%m/%Y",
                                        timezone: "Australia/Melbourne",
                                    }
                            }
            }},
            {$group:{
                _id:"$_id",
                id: {$first:"$id"},
                user_id: {$first:"$user_id"},
                name: {$first:"$name"},
                po_ref: {$first:"$po_ref"},
                jobs: {
                    $push: "$jobs"
                }
            }}
    ])

    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Error: ' + err));

})

module.exports = router;