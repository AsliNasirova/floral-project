import React from 'react'
import './add.scss'
import { Helmet } from 'react-helmet-async'
import AddPage from '../../Components/AddPageComp/addpc'

function Add() {
  return (
    <>
    <Helmet>
        <title>
            Add Page
        </title>
    </Helmet>

  <AddPage/>
    
    
    </>
    
  )
}

export default Add