// ** React import
import { createContext, useState } from 'react';

interface IsLoadingContextType {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const initialValue: IsLoadingContextType = {
  isLoading: true,
  setIsLoading: () => {},
};

export const IsLoadingContext = createContext(initialValue);

export const IsLoadingContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>{children}</IsLoadingContext.Provider>;
};
