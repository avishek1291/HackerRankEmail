export const STORE_COMPOSE_MAIL = "STORE_COMPOSE_MAILS";

export const storeComposeMail = composeData => ({
  type: STORE_COMPOSE_MAIL,
  payload: composeData
});
