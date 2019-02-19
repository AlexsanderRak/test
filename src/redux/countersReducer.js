import {
  COUNTER_BUTTON_CREATE,
  PUSH_CATALOG,
  POP_UP,
  LEGAL_PRIVATE,
  DRIVERS_LIST,
  DRIVER_ADD_EDIT_FLAG,
  DELETE_DRIVER,
  TRANSPORT_LIST,
  ADD_DRIVER,
  PERSONAL_DATA
} from './countersAC';


const initState = {
  user: {},
  popupID: {},
  activePopupToShow: null,
  activePopupId: 100,

  // drivers должен быть массивом!!!
  drivers: [],
  driverAddOrEdit: null, // не удалять! Хорошо не буду!
  transports: [],
  legalPrivate: null, // true - Физ. лицо false - Юр.Лицо
  legalOrPrivatePath: null, // Путь для перехода после выбора Физ.Лицо и Юр.Лица

}

function countersReducer(state = initState, action) {
  switch (action.type) {
    case COUNTER_BUTTON_CREATE:
      {
        // надо создать новый счётчик
        // редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!
        // console.log('action:',action);
        // console.log('state до обработки редьюсером:',state);
        // let newState={...state};
        let newState = { ...state,
          user: action.counterid
        };
        // newState.cnt++;
        // console.log('state после обработки редьюсером:',newState);
        return newState;
      }
    case PUSH_CATALOG:
      {
        // надо создать новый счётчик
        // редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!
        // console.log('action:',action);
        // console.log('state до обработки редьюсером:',state);
        // let newState={...state};
        let newState = { ...state,
          equipCatalog: action.data
        };
        // newState.cnt++;
        // console.log('state после обработки редьюсером:',newState);
        return newState;
      }
      case POP_UP: {
        let newState = { ...state, activePopupId: action.activePopupId };
        return newState;
      }
    case LEGAL_PRIVATE:
      {
        let newState = { ...state,
          legalPrivate: action.legalPrivate,
          legalOrPrivatePath: action.path
        };
        console.log("++")
        return newState;
      }
    case DRIVERS_LIST:
      {
        let newState = { ...state,
          drivers: action.data
        };
        return newState;
      }

      case PERSONAL_DATA:
      {
        let newState = { ...state,
          user: action.data
        };
        return newState;
      }


    case TRANSPORT_LIST: {
      let newState = {
        ...state,
        transports: action.data
      };
      return newState;
    }

    case DRIVER_ADD_EDIT_FLAG: {
      let newState = { ...state,
          driverAddOrEdit: action.flag
        };
        return newState;
    }

    case DELETE_DRIVER: {
      debugger
      console.log(action.data)
      let index = state.drivers.findIndex((el) => el.id === action.data);

      const before = state.drivers.slice(0, index);
      const after = state.drivers.slice(index+1);
      const newArray = [ ...before, ...after];

      let newState = { ...state,
          drivers: newArray
        };
        return newState;
    }

    case ADD_DRIVER: {
      debugger
      console.log(action.data)

      const newArray = [ ... state.drivers, action.data];

      let newState = { ...state,
          drivers: newArray
        };
        return newState;
    }

    default:
      return state;
  }
}

export default countersReducer;
