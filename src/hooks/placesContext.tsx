import React, { createContext, useContext, useEffect, useState } from 'react';

import api from '../services/api';

import { Place } from '../App';

interface PlacesContextData {
  places: Place[];
  // eslint-disable-next-line no-unused-vars
  addPlace({ id, country, flag, place, goal }: Place): void;
  // eslint-disable-next-line no-unused-vars
  editPlace(id: string, place: string, goal: string): void;
  // eslint-disable-next-line no-unused-vars
  deletePlace(id: string): void;
}

const PlacesContext = createContext<PlacesContextData>({} as PlacesContextData);

export const PlacesProvider: React.FC = ({ children }) => {
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    async function loadPlaces(): Promise<void> {
      await api.get('/places').then(res => {
        setPlaces(res.data);
      });
    }
    loadPlaces();
  }, []);

  const addPlace = ({ id, country, flag, place, goal }: Place) => {
    const data = {
      id,
      country,
      flag,
      place,
      goal,
    };

    api.post('places', data);

    setPlaces([...places, data]);
  };

  const editPlace = (id: string, place: string, goal: string) => {
    const foundPlace = places.find(p => p.id === id);

    const editedPlace = { ...foundPlace, place, goal };

    console.log(editedPlace);
  };

  const deletePlace = (id: string) => {
    const newPlaces = places.filter(p => {
      return p.id !== id;
    });

    setPlaces(newPlaces);

    api.delete(`/places/${id}`);
  };

  return (
    <PlacesContext.Provider
      value={{ addPlace, editPlace, deletePlace, places }}
    >
      {children}
    </PlacesContext.Provider>
  );
};

export const usePlaces = (): PlacesContextData => {
  const context = useContext(PlacesContext);

  if (!context) {
    throw new Error('usePlaces must be used within an PlacesProvider');
  }

  return context;
};

export default PlacesContext;
