import React, { useState} from 'react';
import Functionality from './functionality'
function App() {

  const[html,HTML] = useState('')
  const[css,Css] = useState('')
  const[js,Js] = useState('')

  const load = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html
  `

  return (
    <div>

      <div> 
        <ul>
          <li><button class="nav">HTML</button></li>
          <li><button class="nav">CSS</button></li>
          <li><button class="nav">JavaScript</button></li>
          <li><button id="save">Save</button></li>
        </ul>
      </div>


      <div className="top-pane">
      
         <Functionality 
          Title="CSS Editor"
          value={css}
          language="css"
          onchange={Css}
        />

        <Functionality 
          Title="HTML Editor"
          value={html}
          language="xml"
          onchange={HTML}
        />

        <Functionality 
          Title="JavaScript Editor"
          value={js}
          language="javascript"
          onchange={Js}
        />

      </div>

      <div>
        <iframe
          srcDoc = {load}
          sandbox="allow-scripts"
          width="100%"
        />
      </div>
    
    </div>
  )   
}

export default App;
