const express = require("express");
const router = express.Router();
const TodoModel = require('../Model/Todo');


router.post('/create', (req, res) => {
  try {
    const todo = new TodoModel(
      {
        title: req.body.title,
        description: req.body.description,
        currentState: req.body.currentState,
        dueDate: new Date(req.body.dueDate).toISOString(),
        priority: req.body.priority,
      });

    todo.save((err) => {
      if (err) { return res.send(err); }
      return res.status(200).send({ message: "Task added Successfully.", data: todo });
    });

  } catch (err) {
    console.error(err);
    return res.send(err);
  }
});

router.get('/todo', async (req, res) => {
  try {
    const query = {};
    if (req.query.status) {
      query['currentState'] = req.query.status
    }
    if (req.query.groupBy) {

      const todiListData = await TodoModel.aggregate([
        {
          $match: query
        },
        {
          $sort: { createdAt: -1 }
        },
        {
          $group: {
            _id: req.query.groupBy !== 'createdAt'
              ? `$${req.query.groupBy}`
              : {
                $dateToString: {
                  format: "%Y-%m-%d",
                  date: `$createdAt`
                }
              },
            todoList: { $push: "$$ROOT" }
          },
        },
        { "$unwind": "$todoList" },
      ]);
      
      res.status(200).send({
        data: todiListData.map((item) => {
          return {
            ...item.todoList
          }
        })
      });
    } else {
      const todoList = await TodoModel.find(query).sort({ createdAt: -1 });
      res.status(200).send({ data: todoList });
    }
  } catch (error) {
    console.error(error);
    return res.send(error);
  }
});

router.delete('/todo/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const todoList = await TodoModel.deleteOne({ _id: id });
    res.status(200).send({ massege: 'deleted successfully', data: todoList });
  } catch (error) {
    console.error(error);
    return res.send(error);
  }
});

router.post('/todo/:id', async (req, res) => {
  try {
    const id = req.params.id;
    if (req.body.title && req.body.description && req.body.currentState && req.body.dueDate && req.body.priority) {
      const data = {
        title: req.body.title,
        description: req.body.description,
        currentState: req.body.currentState,
        dueDate: new Date(req.body.dueDate).toISOString(),
        priority: req.body.priority,
      };
      const todoList = await TodoModel.findByIdAndUpdate({ _id: id }, data);
      res.status(200).send({ massege: 'added successfully', data: todoList });
    } else {
      res.status(200).send({ massege: 'Invad request' });
    }
  } catch (error) {
    console.error(error);
    return res.send(error);
  }
});

module.exports = router;
