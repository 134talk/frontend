import axiosInstance from './instance';

export const getTeam = (tId: string) =>
  axiosInstance.get(`/teams/${tId}/users`);

export const getChatList = () => axiosInstance.get('/conversation-rooms');

export const searchChatList = (searchName: string) =>
  axiosInstance.get(`/chat/find-chatrooms-with-name?searchName=${searchName}`);

export const createRoom = (tId: string, userList: number[]) =>
  axiosInstance.post(`/teams/${tId}/conversation-room`, {
    user_array: userList,
  });

export const getTimer = (tId: string) => axiosInstance.get(`/teams/${tId}`);

export const setTimer = (tId: string, chatTime: string) =>
  axiosInstance.put(`/teams/${tId}`, {
    timeout: chatTime,
  });

export const updateGuideStatus = (uId: string) =>
  axiosInstance.post(`/users/${uId}/notify`);
