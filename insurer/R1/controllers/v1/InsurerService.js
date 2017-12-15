'use strict';
  var InsurerFD = require('../../sampleData/v1/Insurer.json');
  var InsurerData = InsurerFD;


var Promise = require('bluebird');
var paginationService = require('../../services/pagination.js');
 

exports.getInsurer = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(InsurerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, InsurerData).then(function(result) {
        res.writeHead(200, {
            "Total": result.total,
            "Per-Page": result.pageSize,
            "Total-Pages": result.totalPages
        });
        res.end(JSON.stringify(result.pagedData));
    }).catch(function(error) {
        res.end(JSON.stringify(error));
    });
                        } else {
      res.end();
  }
}





exports.putInsurer = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(InsurerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(InsurerData[Object.keys(InsurerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postInsurer = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(InsurerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(InsurerData[Object.keys(InsurerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}

