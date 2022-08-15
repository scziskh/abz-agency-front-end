/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { config } from '../config';

export const useGetRequest = (resolve, reject, subUrl) => {
  const [isLoading, setIsLoading] = useState(true);

  const request = async (resolve, reject, subUrl) => {
    const { baseUrl } = config;

    try {
      const response = await fetch(`${baseUrl}${subUrl}`);
      try {
        const result = await response.json();
        if (response.ok) {
          resolve(result);
        } else {
          reject(result.message);
        }
      } catch (error) {
        reject(`Error ${response.status}`);
      } finally {
        setIsLoading(false);
      }
    } catch (error) {
      setTimeout(() => request(resolve, reject, subUrl), 2000);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    request(resolve, reject, subUrl);
  }, [subUrl]);

  return isLoading;
};
