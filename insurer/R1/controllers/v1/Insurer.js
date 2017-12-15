'use strict';
var url = require('url');
var Insurer = require('./InsurerService');

module.exports.getInsurer = function getInsurer (req, res, next) {
    Insurer.getInsurer (req.swagger.params, res, next);
};

module.exports.putInsurer = function putInsurer (req, res, next) {
    Insurer.putInsurer (req.swagger.params, res, next);
};

module.exports.postInsurer = function postInsurer (req, res, next) {
    Insurer.postInsurer (req.swagger.params, res, next);
};

