// import Task DB model
const Task = require("../starter/models/Task.js");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});

    // Different form of responses
    
    res.status(200).json({
      tasks
    });

    // res.status(200).json({
    //   tasks, amount:tasks.length
    // });

    // res.status(200).json({
    //   success:true, data:{tasks, nbHits: tasks.length}
    // });

  } catch (e) {
    res.status(500).json({
      msg: e
    });
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      task
    });
  } catch (error) {
    res.status(500).json({
      msg: error
    });
  }

}

const getTask = async (req, res) => {
  try {
    const {
      id: taskID
    } = req.params;
    const task = await Task.findOne({
      _id: taskID
    });
    if (!task) {
      return res.status(404).json({msg: `No task with the id: ${taskID}`})
    }
    res.status(200).json({
      task
    });

  } catch (e) {
    res.status(500).json({
      msg: e
    });
  }
}

const deleteTask = async(req, res) => {
  try {
    const {id:taskID} = req.params;
    const task = await Task.findOneAndDelete({_id:taskID});

    if(!task) {
      return res.status(404).json({msg: `No task with id: ${taskID}`})
    }
    res.status(200).json({task});
    // res.status(200).send();
    //  res.status(200).json({task:null, status: "success"});
  } catch (e) {
      res.status(500).json({msg: e})
  }
}


const updateTask = async(req, res) => {
  try {
    const {id:taskID} = req.params;

    const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {new:true, runValidators:true});

    if(!task) {
      return res.status(404).json({msg: `No task with id: ${taskID}`});
    }

    res.status(200).json({task});
  } catch (e) {
      res.status(500).json({msg:e});
  }
}


module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};
