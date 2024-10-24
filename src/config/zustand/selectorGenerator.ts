import type {StoreApi, UseBoundStore} from 'zustand';

type WithSelectors<S> = S extends {getState: () => infer T}
  ? S & {use: {[K in keyof T]: () => T[K]}}
  : never;

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store(s => s[k as keyof typeof s]);
  }

  return store;
};
// import type {StoreApi, UseBoundStore} from 'zustand';

// type WithSelectors<T> = {
//   getState: () => T;
//   use: {[K in keyof T]: () => T[K]};
// };

// export const createSelectors = <T>(
//   _store: UseBoundStore<StoreApi<T>>,
// ): UseBoundStore<StoreApi<T>> & WithSelectors<T> => {
//   const store = _store as UseBoundStore<StoreApi<T>> & WithSelectors<T>;
//   store.use = {} as {[K in keyof T]: () => T[K]};

//   for (const k of Object.keys(store.getState()) as (keyof T)[]) {
//     store.use[k] = () => store(s => s[k]);
//   }

//   return store;
// };
