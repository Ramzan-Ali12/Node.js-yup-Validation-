const yup = require("yup");
const express = require("express");
const validate = (schema, params) => async (req, res, next) => {
  try {
    await schema.validate(
      params === "body"
        ? req.body
        : params === "params"
        ? req.params
        : req.query,
      {
        abortEarly: false,
      }
    );
    // console.log(req.params);

    next();
  } catch (err) {
    return res.status(422).json({
      error: err.inner.reduce(
        (acc, error) => ({ ...acc, [error.path]: error.message }),
        {}
      ),
    });
  }
};


const parseMiddleWare = (req, res, next, arr, full) => {
  if (full) {
    req.query = JSON.parse(req.query[0]);
  } else {
    arr.forEach((x) => {
      req.query[x] = req.query[x] ? JSON.parse(req.query[x]) : req.query[x];
    });
  }
  next();
};
 

module.exports = {validate,parseMiddleWare};
