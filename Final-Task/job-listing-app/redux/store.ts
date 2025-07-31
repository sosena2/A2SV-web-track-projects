// import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import { jobsApi } from "./services/jobApi";
// import { bookmarkApi } from "./services/bookmarkApi";

// export const store = configureStore({
//   reducer: {
//     [jobsApi.reducerPath]: jobsApi.reducer,
//     [bookmarkApi.reducerPath]: bookmarkApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware()
//       .concat(jobsApi.middleware)
//       .concat(bookmarkApi.middleware),
// });

// setupListeners(store.dispatch);
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jobsApi } from "./services/jobApi";
import { bookmark } from "./services/bookmarkApi";

export const store = configureStore({
  reducer: {
    [jobsApi.reducerPath]: jobsApi.reducer,
    [bookmark.reducerPath]: bookmark.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(jobsApi.middleware)
      .concat(bookmark.middleware),
});

setupListeners(store.dispatch);

// Export the types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
