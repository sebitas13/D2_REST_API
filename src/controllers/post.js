const postSchema = require('../modelos/post');

const getPosts = (req, res, next) => {
  postSchema
    .find() 
    .then((data) => res.json(data))
    .catch((error)=> res.json({message:error}));

  };
   
  const createPost = (req, res) => {
    console.log(req.body);
    const post = postSchema(req.body); 
    post.save()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message:error}));
  }

  const updatePost = (req,res) => {
  
    const {id} = req.params;
    const {titulo, contenido} = req.body;
    postSchema
    .updateOne(
      {_id:id},
      {$set:{titulo,contenido}}
      )
    .then((data)=>res.json(data))
    .catch((error) => res.json({message:error}));

  }

  const deletePost = (req,res) => {
    const {id} = req.params;
    postSchema
    .remove(
      {_id:id}
    )
    .then((data)=>res.json(data))
    .catch((error)=>res.json({messasge:error}));
  }


  const findById = (req,res) => {
    const {id} = req.params;
    postSchema
    .findById(id) 
    .then((data) => res.json(data))
    .catch((error)=> res.json({message:error}));
  }

  module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    findById 
  }

