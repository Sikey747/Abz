import axios from 'axios';
import { FormSendUser } from '../../interfaces/interfaces';

export const getToken = async () => {
  try {
    const res = await axios({
      method: 'get',
      url: 'https://frontend-test-assignment-api.abz.agency/api/v1/token',
    });
    return res.data.token;
  } catch (error: any) {
    return new Error(error);
  }
};

export const getUsers = async (page = 1) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`,
    });
    return data;
  } catch (error: any) {
    return new Error(error);
  }
};

export const addUsers = async (data: FormSendUser) => {
  try {
    const token = await getToken();
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('position_id', data.position_id.toString());
    formData.append('photo', data.photo);
    const res = await axios({
      method: 'post',
      url: `https://frontend-test-assignment-api.abz.agency/api/v1/users`,
      data: formData,
      headers: {
        Token: token,
        'Content-Type': 'multipart/form-data',
      },
    });
    return res;
  } catch (error: any) {
    return new Error(error);
  }
};

export const getPositions = async () => {
  try {
    const { data } = await axios({
      method: 'get',
      url: `https://frontend-test-assignment-api.abz.agency/api/v1/positions`,
    });

    return data.positions;
  } catch (error: any) {
    return new Error(error);
  }
};
