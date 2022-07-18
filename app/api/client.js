import { create } from "apisauce";
import cache from "../utility/cache";
import settings from "../config/settings";

const apiCLient = create({
  baseURL: settings.apiUrl,
});

const get = apiCLient.get;
apiCLient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiCLient;
