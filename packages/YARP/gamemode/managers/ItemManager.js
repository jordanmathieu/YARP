'use strict';
/**
 * @file ItemManager class
 */
module.exports = class ItemManager{
  static add(item){
    yarp.db.insertOne("items", item);
  }

  static findAll(){
    return yarp.db.findMany("items", {});
  }

  static findById(id){
    return yarp.db.findOne("items", {_id: id});
  }

  static indexById(){
    let result = {};
    let collection = this.findAll();
    for (object of collection){
      result[object._id] = object;
    }
    return result;
  }

}