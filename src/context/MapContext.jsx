import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import axios from 'axios';

const MapContext = createContext();

const useMap = () => useContext(MapContext);

const initialState = {
  isLoading: true,
  lamp1: {},
  lamp2: {},
  lamp3: {},
  place: '',
  battery_voltage: 0,
  battery_current: 0,
  battery_power: 0,
  solar_voltage: 0,
  solar_current: 0,
  solar_power: 0,
  luminosity: 0,
  temperature: 0,
  rssi: 0,
  actionId: -1,
  isOpen: true,
};

function reducer(state, action) {
  const { type, errorMsg, ...payload } = action;
  switch (type) {
    case 'FETCHING':
      return { ...state, isLoading: true };
    case 'SAVING':
      return { ...state, isSaving: true };
    case 'FETCHED': {
      return { ...state, isLoading: false, ...payload, actionId: -1 };
    }

    case 'VIEW_LAMPS': {
      return { ...state, isOpen: true, actionId: payload.id };
    }

    default:
      return state;
  }
}

function MapProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isLoading, lamp1, lamp2, lamp3 } = state;

  const getLamp1 = useCallback(async () => {
    dispatch({ type: 'FETCHING' });
    try {
      await axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/Node1`)
        .then((resp) => {
          let data = [];
          data = resp.data;
          const {
            place,
            battery_voltage,
            battery_current,
            battery_power,
            solar_voltage,
            solar_current,
            solar_power,
            luminosity,
            temperature,
            rssi,
          } = data;

          dispatch({
            type: 'FETCHED',
            lamp1: data,
            place,
            battery_voltage,
            battery_current,
            battery_power,
            solar_voltage,
            solar_current,
            solar_power,
            luminosity,
            temperature,
            rssi,
          });
        });
      return lamp1;
    } catch (e) {
      dispatch({
        type: 'ERROR',
        errorMsg: 'Something went wrong in fetching lamps.',
      });
    }
  }, []);

  const getLamp2 = useCallback(async () => {
    dispatch({ type: 'FETCHING' });
    try {
      await axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/Node2`)
        .then((resp) => {
          let data = [];
          data = resp.data;
          const {
            place,
            battery_voltage,
            battery_current,
            battery_power,
            solar_voltage,
            solar_current,
            solar_power,
            luminosity,
            temperature,
            rssi,
          } = data;
          dispatch({
            type: 'FETCHED',
            lamp2: data,
            place,
            battery_voltage,
            battery_current,
            battery_power,
            solar_voltage,
            solar_current,
            solar_power,
            luminosity,
            temperature,
            rssi,
          });
        });
      return lamp2;
    } catch (e) {
      dispatch({
        type: 'ERROR',
        errorMsg: 'Something went wrong in fetching lamps.',
      });
    }
  }, []);

  const getLamp3 = useCallback(async () => {
    dispatch({ type: 'FETCHING' });
    try {
      await axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/Node3`)
        .then((resp) => {
          let data = [];
          data = resp.data;
          const {
            place,
            battery_voltage,
            battery_current,
            battery_power,
            solar_voltage,
            solar_current,
            solar_power,
            luminosity,
            temperature,
            rssi,
          } = data;

          dispatch({
            type: 'FETCHED',
            lamp3: data,
            place,
            battery_voltage,
            battery_current,
            battery_power,
            solar_voltage,
            solar_current,
            solar_power,
            luminosity,
            temperature,
            rssi,
          });
        });
      return lamp3;
    } catch (e) {
      dispatch({
        type: 'ERROR',
        errorMsg: 'Something went wrong in fetching lamps.',
      });
    }
  }, []);

  useEffect(() => {
    async function fetchManilaLamp() {
      await getLamp1();
    }
    if (!lamp1) {
      fetchManilaLamp();
    }
  }, [getLamp1, lamp1]);

  useEffect(() => {
    async function fetchMakatiLamp() {
      await getLamp2();
    }
    if (!lamp2) {
      fetchMakatiLamp();
    }
  }, [getLamp2, lamp2]);

  useEffect(() => {
    async function fetchLamp3() {
      await getLamp3();
    }
    if (!lamp3) {
      fetchLamp3();
    }
  }, [getLamp3, lamp3]);

  return (
    <MapContext.Provider
      value={{ ...state, dispatch, getLamp1, getLamp2, getLamp3 }}
    >
      {children}
    </MapContext.Provider>
  );
}

export { MapProvider, useMap };
