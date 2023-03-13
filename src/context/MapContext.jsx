import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
  useEffect,
} from 'react';

import { get } from '../api';

const MapContext = createContext();

const useMap = () => useContext(MapContext);

const initialState = {
  isLoading: false,
  lamp1: {},
  lamp2: {},
  lamp3: {},
  nodeId: '',
  batteryCurrent: 0,
  batteryPower: 0,
  batteryVoltage: 0,
  isOnline: 0,
  luminosity: 0,
  rssi: 0,
  solarCurrent: 0,
  solarPower: 0,
  solarVoltage: 0,
  temperature: 0,
  receivedAt: null,
  actionId: -1,
  isOpen: true,
  lists: [],
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

  const { isLoading, lamp1, lamp2, lamp3, lists } = state;

  const list = useCallback(async (nodeId, limit = 9999) => {
    dispatch({ type: 'FETCHING' });
    try {
      let allData = [];
      await get(
        `${
          import.meta.env.VITE_API_ENDPOINT
        }/list?limit=${limit}&nodeId=${encodeURIComponent(nodeId)}`
      ).then((res) => {
        console.log('list', res.data);
        allData = res.data;
      });

      dispatch({
        type: 'FETCHED',
        lists: allData,
      });
      return lists;
    } catch (e) {
      dispatch({
        type: 'ERROR',
        errorMsg: 'Something went wrong while fetching list.',
      });
    }
  }, []);

  const exportSummary = useCallback(async () => {
    dispatch({ type: 'FETCHING' });
    try {
      await get(`${import.meta.env.VITE_API_ENDPOINT}/export?limit=9999`).then(
        (res) => {
          const { url } = res.data;
          console.log(url);
          window.open(url, '_blank');
        }
      );
      dispatch({
        type: 'FETCHED',
      });
    } catch (e) {
      dispatch({
        type: 'ERROR',
        errorMsg: 'Something went wrong while exporting summary.',
      });
    }
  }, []);

  const getLamp1 = useCallback(async () => {
    dispatch({ type: 'FETCHING' });
    try {
      await get(`${import.meta.env.VITE_API_ENDPOINT}?nodeId=1`).then(
        (resp) => {
          let data = [];
          data = resp.data;
          const {
            batteryCurrent,
            batteryPower,
            batteryVoltage,
            isOnline,
            luminosity,
            rssi,
            solarCurrent,
            solarPower,
            solarVoltage,
            temperature,
            receivedAt,
            nodeId,
          } = data;

          dispatch({
            type: 'FETCHED',
            lamp1: data,
            batteryCurrent,
            batteryPower,
            batteryVoltage,
            isOnline,
            luminosity,
            rssi,
            solarCurrent,
            solarPower,
            solarVoltage,
            temperature,
            receivedAt,
            nodeId,
            lists,
          });
        }
      );
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
      await get(`${import.meta.env.VITE_API_ENDPOINT}?nodeId=2`).then(
        (resp) => {
          let data = [];
          data = resp.data;
          const {
            batteryCurrent,
            batteryPower,
            batteryVoltage,
            isOnline,
            luminosity,
            rssi,
            solarCurrent,
            solarPower,
            solarVoltage,
            temperature,
            receivedAt,
            nodeId,
          } = data;
          dispatch({
            type: 'FETCHED',
            lamp2: data,
            batteryCurrent,
            batteryPower,
            batteryVoltage,
            isOnline,
            luminosity,
            rssi,
            solarCurrent,
            solarPower,
            solarVoltage,
            temperature,
            receivedAt,
            nodeId,
            lists,
          });
        }
      );
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
      await get(`${import.meta.env.VITE_API_ENDPOINT}?nodeId=3`).then(
        (resp) => {
          let data = [];
          data = resp.data;
          const {
            batteryCurrent,
            batteryPower,
            batteryVoltage,
            isOnline,
            luminosity,
            rssi,
            solarCurrent,
            solarPower,
            solarVoltage,
            temperature,
            receivedAt,
            nodeId,
          } = data;

          dispatch({
            type: 'FETCHED',
            lamp3: data,
            batteryCurrent,
            batteryPower,
            batteryVoltage,
            isOnline,
            luminosity,
            rssi,
            solarCurrent,
            solarPower,
            solarVoltage,
            temperature,
            receivedAt,
            nodeId,
            lists,
          });
        }
      );
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
    async function fetchAllLists() {
      await list();
    }
    if (!lists && !lists.length > 0) {
      fetchAllLists();
    }
  }, [list, lists]);

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
      value={{
        ...state,
        dispatch,
        getLamp1,
        getLamp2,
        getLamp3,
        exportSummary,
        list,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

export { MapProvider, useMap };
