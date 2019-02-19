const COUNTER_BUTTON_CREATE = 'COUNTER_BUTTON_CREATE';
const PUSH_CATALOG = 'PUSH_CATALOG';
const POP_UP = 'POP_UP';
const LEGAL_PRIVATE = 'LEGAL_PRIVATE';
const DRIVERS_LIST = 'DRIVERS_LIST';
const DRIVER_ADD_EDIT_FLAG = 'DRIVER_ADD_EDIT_FLAG';
const DELETE_DRIVER = 'DELETE_DRIVER';
const ADD_DRIVER = 'ADD_DRIVER';
const TRANSPORT_LIST = 'TRANSPORT_LIST';
const PERSONAL_DATA = 'PERSONAL_DATA';

const getPersonalData=function(data){
  return{
    type: PERSONAL_DATA,
    data: data
  }
}

const counterButton_create = function (counterid) {
  return {
    type: COUNTER_BUTTON_CREATE,
    counterid: counterid,
  };
}

const pushCatalog = function (data) {
  return {
    type: PUSH_CATALOG,
    data: data,
  };
}

const popUp = function (id) {
  return {
    type: POP_UP,
    activePopupId: id,
  };
}

const legalPrivate = function (str,path) {
  return {
    type: LEGAL_PRIVATE,
    legalPrivate: str,
    path:path,
  };
}

const getDriversList = (data) => {
  return {
    type: DRIVERS_LIST,
    data
  }
}

const setDriverAddEditFlag = (flag) => {
  return {
    type: DRIVER_ADD_EDIT_FLAG,
    flag
  }
}

const deleteDriver = (id) => {
  return {
    type: DELETE_DRIVER,
    data: id
  }
}

const addDriver = (data) => {
  return {
    type: ADD_DRIVER,
    data
  }
}

const getTransportList = (data) => {
  return {
    type: TRANSPORT_LIST,
    data: data
  }
}

export {
  counterButton_create, COUNTER_BUTTON_CREATE, 
  pushCatalog, PUSH_CATALOG,
  popUp, POP_UP,
  legalPrivate, LEGAL_PRIVATE,
  getDriversList, DRIVERS_LIST,
  setDriverAddEditFlag, DRIVER_ADD_EDIT_FLAG,
  deleteDriver, DELETE_DRIVER,
  getTransportList, TRANSPORT_LIST,
  addDriver, ADD_DRIVER,
  getPersonalData,PERSONAL_DATA
}






// const COUNTER_BUTTON_CREATE = 'COUNTER_BUTTON_CREATE';

// const counterButton_create = function (counterid) {
//   return {
//     type: COUNTER_BUTTON_CREATE,
//     counterid: counterid,
//   };
// }

// export {
//   counterButton_create, COUNTER_BUTTON_CREATE,
// }