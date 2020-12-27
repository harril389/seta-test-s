import axios from "axios";

export const createApiRequest = async ({ url, method, data, params }) => {
  try {
    const { data: res } = await axios({
      method,
      url: `${url}`,
      data,
      params,
    });
    return {
      success: true,
      data: res,
    };
  } catch (e) {
    const { response } = e;
    console.log(response);
    const message = response ? response.data.message : e.message || e;

    return {
      success: false,
      data: message,
    };
  }
};
