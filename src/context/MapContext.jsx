import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
  useEffect,
} from 'react';

import { get } from '../api';
import toast, { Toaster } from 'react-hot-toast';

const MapContext = createContext();

const useMap = () => useContext(MapContext);

const initialState = {
  isLoading: false,
  lamp1: {},
  lamp2: {},
  lamp3: {},
  nodeId: '',
  startDate: new Date(),
  endDate: new Date(),
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
    case 'ERROR':
      return { ...state, isLoading: false };

    case 'VIEW_LAMPS': {
      return { ...state, isOpen: true, actionId: payload.id };
    }

    default:
      return state;
  }
}

function MapProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isLoading, lamp1, lamp2, lamp3, lists, startDate, endDate } = state;

  const list = useCallback(async (nodeId, limit = 9999) => {
    dispatch({ type: 'FETCHING' });
    try {
      let allData = [];
      console.log('here');
      const request = {
        url: `${
          import.meta.env.VITE_API_ENDPOINT
        }/voltaic/list?limit=${limit}&nodeId=${encodeURIComponent(nodeId)}`,
      };
      const resp = await get(request);
      console.log('resp', resp);
      if ([200].includes(resp.status)) {
        console.log('list', resp.data);
        allData = resp.data;
        dispatch({
          type: 'FETCHED',
          lists: allData,
        });
      } else {
        dispatch({
          type: 'ERROR',
          errorMsg: 'Something went wrong ',
        });
        toast.error('Session Expired...');
      }

      return lists;
    } catch (e) {
      dispatch({
        type: 'ERROR',
        errorMsg: 'Something went wrong while fetching list.',
      });
    }
  }, []);

  const exportSummary = useCallback(async (startDateTime, endDateTime) => {
    dispatch({ type: 'FETCHING' });

    try {
      console.log('set');

      const request = {
        url: encodeURI(
          `${
            import.meta.env.VITE_API_ENDPOINT
          }/voltaic/export?limit=9999&startDate=${startDateTime.toISOString()}&endDate=${endDateTime.toISOString()}`
        ),
      };
      const resp = await get(request);
      console.log('res', resp);

      if ([200].includes(resp.status)) {
        const { url } = resp.data;
        console.log(url);
        window.open(url, '_blank');
        dispatch({
          type: 'FETCHED',
        });
      } else {
        window.location.replace('/login');
        dispatch({
          type: 'ERROR',
          errorMsg: 'Something went wrong ',
        });
        toast.error('Session Expired...');
      }
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
      const request = {
        url: `${import.meta.env.VITE_API_ENDPOINT}/voltaic?nodeId=1`,
      };
      const resp = await get(request);
      console.log('res', resp);

      if ([200].includes(resp.status)) {
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
      } else {
        window.location.replace('/login');
        dispatch({
          type: 'ERROR',
          errorMsg: 'Something went wrong ',
        });
        toast.error('Session Expired...');
      }

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
      const request = {
        url: `${import.meta.env.VITE_API_ENDPOINT}/voltaic?nodeId=2`,
      };
      const resp = await get(request);
      console.log('res', resp);

      if ([200].includes(resp.status)) {
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
      } else {
        window.location.replace('/login');
        dispatch({
          type: 'ERROR',
          errorMsg: 'Something went wrong ',
        });
        toast.error('Session Expired...');
      }

      return lamp1;
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
      const request = {
        url: `${import.meta.env.VITE_API_ENDPOINT}/voltaic?nodeId=3`,
      };
      const resp = await get(request);
      console.log('res', resp);

      if ([200].includes(resp.status)) {
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
      } else {
        window.location.replace('/login');
        dispatch({
          type: 'ERROR',
          errorMsg: 'Something went wrong ',
        });
        toast.error('Session Expired...');
      }

      return lamp1;
    } catch (e) {
      dispatch({
        type: 'ERROR',
        errorMsg: 'Something went wrong in fetching lamps.',
      });
    }
  }, []);

  const getDateRange = useCallback(async (startDateParam, endDateParam) => {
    dispatch({ type: 'FETCHING' });

    try {
      dispatch({
        type: 'FETCHED',
        startDate: startDateParam,
        endDate: endDateParam,
      });
    } catch (e) {
      dispatch({
        type: 'ERROR',
        errorMsg: 'Something went wrong in fetching dates.',
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
  useEffect(() => {
    async function fetchDateRange() {
      await getDateRange();
    }
    if (!startDate && !endDate) {
      fetchDateRange(startDate, endDate);
    }
  }, [getDateRange, startDate, endDate]);

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
        getDateRange,
      }}
    >
      <Toaster />
      {children}
    </MapContext.Provider>
  );
}

export { MapProvider, useMap };
