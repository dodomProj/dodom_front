import axios from 'axios';

const postData = async (uri: string, data: string, headers: {} = {}) => {
  try {
    const response = await axios.post(uri, data, {
      headers: {
        ...headers,
      },
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export default postData;
