import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import { HeroesApp } from './components/HeroesApp/HeroesApp'

ReactDOM.render(
    <HeroesApp />,
    document.getElementById('root')
)