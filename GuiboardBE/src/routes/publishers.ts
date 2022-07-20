/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable new-cap */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import express from "express";
import mongoose from "mongoose";

import {PublisherModel} from "../models/publishers.models";

export const publisherRouter = express.Router();

const publisherSchema = new mongoose.Schema({
  completed: Boolean,
  lastName: String,
  firstName: String,
  hope: String,
  birthdate: {type: Date, default: Date.now},
  baptismDate: Date,
  gender: String,
  phoneNumber: String,
  emergencyContact: String,
  adress: JSON,
  elder: Boolean,
  ministerialServant: Boolean,
  commonPrivileges: [String],
  brotherPrivileges: [String],
});

const Publisher = mongoose.model("publisher", publisherSchema);

publisherRouter.get("/", async (req, res) => {
  const publishers = await Publisher.find();
  res.send(publishers);
});
publisherRouter.post("/", (req, res) => {
  const publisherFromForm: PublisherModel = req.body;
  const publisherToDB = new Publisher(publisherFromForm);
  publisherToDB.save((err) => {
    if (err) return err;
  });
  res.status(204).end();
});
publisherRouter.get("/:id", async (req, res) => {
  if (req.params.id) {
    const publisherFound = await Publisher.findById(req.params.id);
    res.send(publisherFound);
  } else {
    res.send(console.error("Message d'erreur"));
  }
});
publisherRouter.delete("/:id/delete", async (req, res) => {
    const publisherRemoved = await Publisher.findByIdAndRemove(req.params.id);
      res.send(publisherRemoved);
});
publisherRouter.patch("/:id/update", async (req, res) => {
const publisherUpdated = await Publisher.findByIdAndUpdate(req.params.id, req.body);
  res.send(publisherUpdated);
});
