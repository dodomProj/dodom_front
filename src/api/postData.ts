import { dodomAPI } from '.';

const postData = async (uri: string, data: any) => {
  try {
    const response = await dodomAPI.post(uri, data);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export default postData;
