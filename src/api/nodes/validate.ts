"use strict"

import * as Joi from '@hapi/joi';

const childSchema = Joi.object({
  id: Joi.number().integer().required(),
  title: Joi.string().required(),
  level: Joi.number().integer().required(),
  parent_id: Joi.number().integer().allow(null).required(),
  children: Joi.array().items(Joi.link('#node'))
}).id('node');


export default {
  formatChildren: {
    payload: Joi.object().pattern(/^/, Joi.array().items(childSchema))
  }
}