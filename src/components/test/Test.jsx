import React from 'react'

export const Test = () => {
    const handleClick = () => {
        alert('Que onda peri')
    }
    return (
        <>
            <h1>Esto es una prueba de ramas</h1>
            <ul>
                <li><button onClick={handleClick} >Elemento 1</button></li>
                <li><button onClick={handleClick} >Elemento 2</button></li>
                <li><button onClick={handleClick} >Elemento 3</button></li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque itaque quae, nisi, ea veritatis consectetur, tempore cumque repellat delectus quos tenetur distinctio. Corporis necessitatibus natus autem deserunt sapiente at blanditiis.
                In repellat aperiam velit iste ratione, possimus odit a repellendus ipsam quibusdam doloremque recusandae odio delectus ad laboriosam voluptatibus tempora aliquam qui rem inventore. Cum fuga commodi dolor illum ratione.
                Laborum asperiores labore, animi ducimus dolorem praesentium aspernatur placeat vitae dolorum unde voluptatum perspiciatis necessitatibus! Explicabo atque delectus reiciendis. Sint accusamus officiis, alias et perferendis repellendus eius omnis consectetur nobis!
                Praesentium qui laboriosam eligendi libero voluptatum reprehenderit inventore quod aliquam minima, similique eaque possimus nesciunt excepturi magnam obcaecati ducimus eos adipisci sequi labore debitis quis quo vero officia? Animi, maxime!
            </p>
        </>
    )
}
