'use strict';

function index(req, res){
    let todos = [{
        title: 'Do Groceries',
        done: true
    },{
        title: 'Do homework',
        done: true
    },{
        title: 'Feed turtle',
        done: false
    },{
        title: 'Drop brother to his friend\'s',
        done: false
    }];

    res.status(200).json(todos);
}

function hello(req, res){
    res.send('Hello world');
}

function create(req, res){
    let newTodo = req.body;

    res.status(200).json({
        result: 'success',
        todo: newTodo
    })
}


exports = module.exports = {
    index: index,
    hello: hello,
    create: create
}