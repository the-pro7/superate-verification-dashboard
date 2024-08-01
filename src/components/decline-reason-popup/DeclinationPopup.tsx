import React from 'react'
import { DeclinationForm } from '../form/declination-form/DeclinationForm'

const DeclinationPopup = () => {
  return (
    <dialog>
        <h1>Reason for declination</h1>
        <DeclinationForm />
    </dialog>
  )
}

export default DeclinationPopup