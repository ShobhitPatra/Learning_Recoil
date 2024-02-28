import { atom, selector } from "recoil";
import axios from "axios";

export const NetworkAtom = atom({
  key: "networkAtom",
  default: 104,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const msgAtom = atom({
  key: "msgAtom",
  default: 12,
});

export const notiAtom = atom({
  key: "notiAtom",
  default: 33,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const msgCount = get(msgAtom);
    const notiCount = get(notiAtom);
    const networkCount = get(NetworkAtom);
    const jobsCount = get(jobsAtom);
    return networkCount + jobsCount + msgCount + notiCount;
  },
});

//note(async data queries) : default value of an atom must be synchronous value ----however
//       it can be a selector in turn whose default value can be
//       an asynchronous data call

export const notificationAtom = atom({
  key: "notificationAtom",
  default: selector({
    key: "notificationAtomSelector",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});
