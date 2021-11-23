// 检查是否已存在键值对
// 存在则取用，不存在则设为初始值
// 包装set方法实现：修改state值、写入localstroage
import { useState } from "react";
const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = (value) => {
        // 尚未理解
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
    };
    return [storedValue, setValue];
};
export default useLocalStorage;
