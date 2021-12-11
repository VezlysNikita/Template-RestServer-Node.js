const { response } = require('express');

const getUser = (req, res = response) => {
      const query = req.query;
      res.json({
            msg: 'get API',
            query,
      });
};

const postUser = (req, res = response) => {
      const { nombre } = req.body;
      res.json({
            msg: 'post API',
            nombre,
      });
};

const putUser = (req, res = response) => {
      const { id } = req.params;
      res.json({
            msg: 'put API',
            id,
      });
};

const deleteUser = (req, res = response) => {
      res.json({
            msg: 'delete API',
      });
};

module.exports = {
      getUser,
      postUser,
      putUser,
      deleteUser,
};
