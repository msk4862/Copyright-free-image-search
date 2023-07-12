'use client';

import Image from '@/utils/models/Image';
import { TServices, TFilterKeys, TSortKey } from '@/utils/types';
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useReducer,
} from 'react';

type TImageStates = {
  images: Image[];
  filteredImages: Image[];
  filterKeys: TFilterKeys;
  sortKey: TSortKey;
  totalProviders: TServices[];
};

type TImagesContext = TImageStates & {
  setFilterKey: (
    filterKey: keyof TFilterKeys,
    value: TFilterKeys[keyof TFilterKeys]
  ) => void;
  clearFilters: () => void;
  setImages: (images: Image[], imageProviders: TServices[]) => void;
  setSortKey: (sortKey: TSortKey) => void;
  setFilteredImages: (images: Image[]) => void;
};

type SetFilterAction = {
  type: 'SET_FILTER';
  payload: {
    filterKey: keyof TFilterKeys;
    value: TFilterKeys[keyof TFilterKeys];
  };
};

type SetSortKeyAction = {
  type: 'SET_SORT_KEY';
  sortKey: TSortKey;
};

type ClearFilterAction = {
  type: 'CLEAR_FILTER';
};

type SetImagesAction = {
  type: 'SET_IMAGES';
  payload: { images: Image[]; imageProviders: TServices[] };
};

type SetFilteredImagesAction = {
  type: 'SET_FILTERED_IMAGES';
  images: Image[];
};

type Action =
  | SetFilterAction
  | ClearFilterAction
  | SetImagesAction
  | SetSortKeyAction
  | SetFilteredImagesAction;

const initialState: TImageStates = {
  images: [],
  filteredImages: [],
  filterKeys: {} as TFilterKeys,
  sortKey: 'Default',
  totalProviders: [],
};

export const ImagesContext = createContext({} as TImagesContext);

const imageReducer = (state: TImageStates, action: Action): TImageStates => {
  switch (action.type) {
    case 'SET_IMAGES': {
      const { images, imageProviders } = action.payload;
      return {
        ...state,
        images,
        filteredImages: images,
        totalProviders: imageProviders,
      };
    }

    case 'SET_FILTERED_IMAGES': {
      return {
        ...state,
        filteredImages: action.images,
      };
    }

    case 'SET_FILTER': {
      const { filterKey, value } = action.payload;
      return {
        ...state,
        filterKeys: {
          ...state.filterKeys,
          [filterKey]: value,
        },
      };
    }

    case 'SET_SORT_KEY': {
      return {
        ...state,
        sortKey: action.sortKey,
      };
    }

    case 'CLEAR_FILTER': {
      return {
        ...state,
        filterKeys: {} as TFilterKeys,
      };
    }
  }
};

export const ImagesContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(imageReducer, initialState);

  const setFilterKey = useCallback(
    (filterKey: keyof TFilterKeys, value: TFilterKeys[keyof TFilterKeys]) => {
      dispatch({ type: 'SET_FILTER', payload: { filterKey, value } });
    },
    []
  );

  const clearFilters = useCallback(() => {
    dispatch({ type: 'CLEAR_FILTER' });
  }, []);

  const setImages = useCallback(
    (images: Image[], imageProviders: TServices[]) => {
      dispatch({ type: 'SET_IMAGES', payload: { images, imageProviders } });
    },
    []
  );

  const setFilteredImages = useCallback((images: Image[]) => {
    dispatch({ type: 'SET_FILTERED_IMAGES', images });
  }, []);

  const setSortKey = useCallback((sortKey: TSortKey) => {
    dispatch({ type: 'SET_SORT_KEY', sortKey });
  }, []);

  return (
    <ImagesContext.Provider
      value={{
        ...state,
        setFilterKey,
        clearFilters,
        setImages,
        setSortKey,
        setFilteredImages,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
};
