import React from 'react'
import MealsSummary from './MealsSummary'
import "./Meals.css"
import AvailableMeals from './AvailableMeals'

const Meals = () => {
  return (
    <>
    <MealsSummary/>
    <AvailableMeals/>
    </>
  )
}

export default Meals