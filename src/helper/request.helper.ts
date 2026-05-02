import { AsyncLocalStorage } from "async_hooks";

type AsyncLocalStorageType={
    requestId:string
}
export const asyncLocalStorage=new AsyncLocalStorage<AsyncLocalStorageType>();

export const getAsyncLocalStorage=()=>{
    const asyncStore=asyncLocalStorage.getStore();
    return asyncStore?.requestId;
}