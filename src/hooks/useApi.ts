import { useEffect, useState } from "react";

type State<S> =
  | {
      // pending
      data: undefined;
      isLoading: true;
      isError: false;
    }
  | {
      // fulfilled
      data: S;
      isLoading: false;
      isError: false;
    }
  | {
      data: undefined;
      isLoading: false;
      isError: true;
    };

export const useApi = <T>(fetcher: () => Promise<T>) => {
  // const [data, setData] = useState<T>();
  const [state, setState] = useState<State<T>>({
    data: undefined,
    isLoading: true,
    isError: false,
  });
  const { data, isLoading, isError } = state;

  const loadData = async () => {
    // pending
    setState({
      data: undefined,
      isLoading: true,
      isError: false,
    });

    try {
      const data = await fetcher();
      // setData(data);
      setState({
        data,
        isLoading: false,
        isError: false,
      });
    } catch {
      setState({
        data: undefined,
        isLoading: false,
        isError: true,
      });
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const refetch = () => {
    loadData();
  };

  return { data, isLoading, isError, refetch };
};
