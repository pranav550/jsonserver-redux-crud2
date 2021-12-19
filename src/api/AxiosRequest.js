import axios from "axios";

function AxiosRequest(url, method, headers, params) {
  return params
    ? axios({
        url: url,
        method: method,
        headers: headers,
        data: params,
        timeout: 1000,
      })
    : axios({
        url: url,
        method: method,
        headers: headers,
        data: {},
        timeout: 1000,
      });
}

const GetApiDetails = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  return AxiosRequest("http://localhost:3002/details", "GET", headers, {});
};

const PostApiDetails = (data) => {
  console.log(data);

  const headers = {
    "Content-Type": "application/json",
  };
  return AxiosRequest("http://localhost:3002/details", "POST", headers, data);
};

const DeleteApiDetails = (id) => {
  console.log(id);

  const headers = {
    "Content-Type": "application/json",
  };
  return AxiosRequest(
    `http://localhost:3002/details/${id}`,
    "DELETE",
    headers,
    {}
  );
};

const GetDetailsById = (id) => {
  console.log(id);

  const headers = {
    "Content-Type": "application/json",
  };
  return AxiosRequest(
    `http://localhost:3002/details/${id}`,
    "GET",
    headers,
    {}
  );
};

const UpdateDetailsById = (data, id) => {
  console.log(id);

  const headers = {
    "Content-Type": "application/json",
  };
  return AxiosRequest(
    `http://localhost:3002/details/${id}`,
    "PUT",
    headers,
    data
  );
};

export {
  GetApiDetails,
  PostApiDetails,
  DeleteApiDetails,
  GetDetailsById,
  UpdateDetailsById,
};
