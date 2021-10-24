export const errorSelector = (state) => state.register.error;
export const loaderSelector = (state) => state.register.loader;
export const isRegisterSelector = (state) => state.register.tokens;
export const registerEmailSelector = (state) => state.register.user?.email;
