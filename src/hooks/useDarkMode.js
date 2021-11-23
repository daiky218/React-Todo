// 获取localstorage里dark-mode-enabled的值，初始化当前状态
// set方法实现：修改localstoragem里mode参数，修改body节点class，修改state值

import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";
const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage("dark-mode-enabled");
  const enabled = typeof enabledState !== "undefined" ? enabledState : false;
  useEffect(() => {
      // const className = "dark-mode";
      // const element = window.document.body;
      // if (enabled) {
      //     element.classList.add(className);
      // } else {
      //     element.classList.remove(className);
      // }
  }, [enabled]);

  
  return [enabledState, setEnabledState];
};
export default useDarkMode;
