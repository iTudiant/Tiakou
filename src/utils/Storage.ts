import { MMKV } from "react-native-mmkv";

const storage = new MMKV();

const storeDataToMmkvStorage = (key: string, value: string) => {
  return storage.set(key, value);
};

const getDataToMmkvStorage = (key: string) => {
  return storage.getString(key);
};

export { storeDataToMmkvStorage, getDataToMmkvStorage };
