import React from 'react'
import "./App.css"

const App = () => {
    return (
        <div className='h-[500px] w-[700px] p-10 bg-base'>

            <div className="h-full w-full bg-base-2 p-20">
                <div className="h-full w-full bg-base-2 p-20">
                    <button className='px-8 py-4 bg-primary'>click me</button>
                    <button className='px-8 py-4 bg-secondary'>click me</button>
                    <button className='px-8 py-4 bg-info'>click me</button>
                    <button className='px-8 py-4 bg-success'>click me</button>
                </div>

                <div className="">
                    <h1 className='text-dark-base-3'>Lorem ipsum dolor sit amet.</h1>
                </div>
            </div>


        </div>
    )
}

export default App