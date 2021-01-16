import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import api from '../services/api';

export interface Place {
  id: string;
  country: string;
  flag: string;
  place: string;
  goal: string;
}

interface PlacesContextData {
  places: Place[];
  addPlace({ id, country, flag, place, goal }: Place): void;
  editPlace(id: string, place: string, goal: string): void;
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

  const addPlace = useCallback(
    ({ id, country, flag, place, goal }: Place) => {
      const data = {
        id,
        country,
        flag,
        place,
        goal,
      };

      api.post('places', data);

      setPlaces([...places, data]);
    },
    [places],
  );

  const editPlace = useCallback(
    (id: string, place: string, goal: string) => {
      const editedPlace = places.find(p => p.id === id);

      setPlaces(places.map(p => (p.id === id ? { ...p, place, goal } : p)));

      api.put(`/places/${id}`, { ...editedPlace, place, goal });
    },
    [places],
  );

  const deletePlace = useCallback(
    (id: string) => {
      const newPlaces = places.filter(p => {
        return p.id !== id;
      });

      setPlaces(newPlaces);

      api.delete(`/places/${id}`);
    },
    [places],
  );

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
