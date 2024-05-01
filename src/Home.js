import React from 'react'

function Home() {
  return (
    <div style={{background:"lightgrey",width:"100%", height:"max-content"}}>
        <h1 style={{color:"black",fontFamily:"cursive", fontStyle:"italic", textDecoration:"underline"}}>What is Lorem Ipsum?</h1>
        <p style={{color:"darkblue",fontFamily:"monospace", fontSize:22}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,     <br />
          when an unknown printer took a galley of type and scrambled it to make a type <br />
          specimen book. It has survived not only five centuries, but also the leap into<br />
           electronic typesetting, remaining essentially unchanged. It was popularised in<br />
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,<br />
             and more recently with desktop publishing software like Aldus PageMaker<br />
            including versions of Lorem Ipsum.
        </p>

        <h1 style={{color:"black",fontFamily:"cursive", fontStyle:"italic", textDecoration:"underline"}}>Why do we use it?</h1>
        <p style={{color:"darkblue",fontFamily:"monospace", fontSize:22}}>
        It is a long established fact that a reader will be distracted by the readable   <br />
        content of a page when looking at its layout. The point of using Lorem Ipsum is that<br />
         it has a more-or-less normal distribution of letters, as opposed to using<br />
          'Content here, content here', making it look like readable English. <br />
          Many desktop publishing packages and web page editors now use Lorem Ipsum as <br />
          their default model text, and a search for 'lorem ipsum' will uncover many <br />
          web sites still in their infancy. Various versions have evolved over the years, <br />
          sometimes by accident, sometimes on purpose (injected humour and the like).<br />
        </p>

      
    </div>
  )
}

export default Home
