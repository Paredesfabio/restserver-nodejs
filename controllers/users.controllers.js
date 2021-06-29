/*jshint esversion: 6 */

const { response } = require("express");

const usersGet = (req, res) => {
  // const query = req.query;
  const { q, nombre = 'No Name', apiKey } = req.query;
  res.json({
    message: "get API - Controller",
    q,
    nombre,
    apiKey
  });
};

const usersPost = (req, res) => {
  //const body = req.body;
  const { name, age } = req.body;
  res.status(201).json({
    message: "post API - Controller",
    name,
    age
  });
};

const usersPut = (req, res) => {
  const id = req.params.id;
  res.json({
    message: "put API - Controller",
    id
  });
};

const usersPatch = (req, res) => {
  res.json({
    message: "put API - Controller",
  });
};

const usersDelete = (req, res) => {
  res.json({
    message: "delete API - Controller",
  });
};

module.exports = { usersGet, usersPost, usersPut, usersPatch, usersDelete };
