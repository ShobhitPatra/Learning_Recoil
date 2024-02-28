import logo from "./logo.svg";
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
  NetworkAtom,
  jobsAtom,
  msgAtom,
  notiAtom,
  notificationAtom,
  totalNotificationSelector,
} from "./atom";
import { useMemo } from "react";

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  );
}

function MainApp() {
  const networkCount = useRecoilValue(NetworkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const msgCount = useRecoilValue(msgAtom);
  const notiCount = useRecoilValue(notiAtom);

  const notifications = useRecoilValue(notificationAtom);
  // const totalNotificationCount = useMemo(
  //   function () {
  //     return networkCount + jobsCount + msgCount + notiCount;
  //   },
  //   [networkCount, msgCount, jobsCount, notiCount]
  // );
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Networks ({networkCount < 100 ? networkCount : "99+"})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messages ({msgCount})</button>
      <button>Notifications ({notiCount})</button>
      <button>me ({totalNotificationCount})</button>

      <br />

      <ul>
        <li>networks : {notifications.network}</li>
        <li>jobs : {notifications.jobs}</li>
        <li>messages : {notifications.messaging}</li>
        <li>notification : {notifications.notifications}</li>
      </ul>
    </>
  );
}

export default App;
