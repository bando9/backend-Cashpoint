// Import express
const express = require("express");

// Import JWT
const jwt = require("jsonwebtoken");

// Middleware for token verify
const verifyToken = (req, res, next) => {
  // Get token from header 'authorization'
  const token = req.headers["authorization"];

  // if token empty, send message
  if (!token) return res.status(401).json({ message: "Tidak terautentikasi" });

  // verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    // if token isn't valid, send message
    if (err) return res.status(401).json({ message: "Token tidak valid" });

    // if token valid, save id user from token to request
    req.userId = decoded.id;

    // continue to next middleware
    next();
  });
};

modeule.export = verifyToken;
