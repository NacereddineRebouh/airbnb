import useSWRInfinite from "swr/infinite";
type room = {
  id: string;
  property_name: string;
  type: string;
  guests: string;
  bedrooms: string;
  bathrooms: string;
  veds: string;
  location: string;
  long: string;
  lat: string;
  images: string;
  price: string;
  distance: string;
};

type pdata = {
  rooms_bigint: room[];
  nextId: number;
};
export const usePagination = <T>(url: string) => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  const getKey = (pageIndex: number, previousPageData: any) => {
    // if (previousPageData && !previousPageData.length) return null; // reached the end
    console.log("pageindex::", pageIndex + 1);
    console.log("previousPageData::", previousPageData);
    return `${url}?cursor=${previousPageData.nextId}`; // SWR key
  };

  const {
    data: paginatedData,
    size,
    isLoading,
    setSize,
    error,
  } = useSWRInfinite(getKey, fetcher);

  // console.log("paginatedData");
  // @ts-ignore
  let rooms = paginatedData ? paginatedData[0]?.rooms_bigint : [];
  // console.log("paginatedDatarooms_bigint");
  console.log("size: ", size);
  // @ts-ignore
  console.log(paginatedData?.rooms_bigint);
  const isReachedEnd = rooms?.length < 10;
  const loadingMore = rooms && typeof rooms[size - 1] === "undefined";
  // console.log("gather data");
  console.log(rooms);
  // rooms = rooms ? rooms[0] : rooms;
  return {
    rooms,
    isReachedEnd,
    loadingMore,
    isLoading,
    paginatedData,
    setSize,
    size,
    error,
  };
};
