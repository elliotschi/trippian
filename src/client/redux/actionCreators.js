import {
  SET_DESTINATIONS, SET_TRIPPIANS, GET_DESTINATIONS_FAIL, GET_DESTINATION_BY_ID, GET_TRIPPIAN_BY_ID, GET_DESTINATIONS, GET_TRIPPIANS,
  SET_LOCALE, SET_LOCALE_MESSAGES, SET_USERNAME, SET_DISPLAYNAME
}
from './actionTypes'

// appState related
export function setLocale(locale) {
  return {
    type: SET_LOCALE,
    payload: {
      locale
    }
  }
}
export function setUsername(username) {
  return {
    type: SET_LOCALE,
    payload: {
      username
    }
  }
}
export function setLocaleMessages(messages) {
  return {
    type: SET_LOCALE_MESSAGES,
    payload: {
      messages
    }
  }
}

export function setDisplayName(displayName) {
  return {
    type: SET_DISPLAYNAME,
    payload: {
      displayName
    }
  }
}

// apiTrippian related
export function setDestinations(destinations) {
  return {
    type: SET_DESTINATIONS,
    payload: {
      destinations
    }
  }
}

export function setTrippians(trippians) {
  return {
    type: SET_TRIPPIANS,
    payload: {
      trippians
    }
  }
}

export function apologize(errorMessage) {
  return {
    type: GET_DESTINATIONS_FAIL,
    payload: {
      errorMessage
    }
  }
}
