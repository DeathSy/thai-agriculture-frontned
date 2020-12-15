import React, { createContext, useState } from 'react'
export const ActionContext = createContext({})

export const ActionContextProvider = ({ children }) => {
  const [updateDeivce, setUpdateDevice] = useState({
    idDevice: undefined,
    temperature_max: undefined,
    temperature_min: undefined,
    temperature_avg: undefined,
    humidity_max: undefined,
    humidity_min: undefined,
    humidity_avg: undefined,
    wind_velocity_max: undefined,
    wind_velocity_min: undefined,
    wind_velocity_avg: undefined,
    sun_lux_max: undefined,
    sun_lux_min: undefined,
    sun_lux_avg: undefined
  })
  const actionValue = {
    deviceUpdate: [updateDeivce, setUpdateDevice]
  }
  return (
    <ActionContext.Provider value={actionValue}>
      {children}
    </ActionContext.Provider>
  )
}

export default ActionContext
