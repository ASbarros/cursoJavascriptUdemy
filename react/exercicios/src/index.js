import React from "react"
import ReactDOM from "react-dom"

import Multi from './componentes/Multiplos'

ReactDOM.render(
    <div>
        <Multi.BoaNoite nome="Ana" />
        <Multi.BoaTarde nome="Bia" />
    </div>
, document.getElementById('root'))