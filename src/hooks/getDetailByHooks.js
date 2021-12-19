import { useEffect, useState } from "react";
import { GetDetailsById } from "../api/AxiosRequest";

export default (props) => {
  const [detailsById, setDetailsById] = useState({});
  const GetDetailsByHooks = (id) => {
    return GetDetailsById(id).then((res) => {
      console.log(res);
      setDetailsById(res.data);
    });
  };
  useEffect(() => {
    GetDetailsByHooks(props);
  }, []);
  return [detailsById];
};
