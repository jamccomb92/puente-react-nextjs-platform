import { Parse } from 'parse';

/**
  * Performs a query based on the parameter defined in a column
  *
  * @example
  * customQueryService(0,1000,SurveyData,organization,Puente)
  *
  * @param {number} offset First number
  * @param {number} limit Max limit of results
  * @param {string} parseModel Name of Backend Model
  * @param {string} parseColumn Name of Column in Backend Model
  * @param {string} parseParam Name of Parameter in Column
  * @returns Results of Query
  */
function customQueryService(offset, limit, parseModel, parseColumn, parseParam) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const Model = Parse.Object.extend(parseModel);

      const query = new Parse.Query(Model);

      query.skip(offset);

      query.limit(limit || 5000);

      query.descending('createdAt');

      query.equalTo(parseColumn, parseParam);

      query.find().then((records) => {
        resolve(records);
      }, (error) => {
        reject(error);
      });
    }, 1500);
  });
}

function removeQueryService(parseModel, objectId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const Model = Parse.Object.extend(parseModel);

      const query = new Parse.Query(Model);

      query.get(objectId).then((obj) => {
        resolve(obj.destroy());
      }, (error) => {
        reject(error);
      });
    }, 1500);
  });
}

export { customQueryService, removeQueryService };
