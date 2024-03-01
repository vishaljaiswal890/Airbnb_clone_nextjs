"use client"
import React, { useEffect, useState } from 'react'
import AnimatedNumbers from 'react-animated-numbers';

const Counter = ({ number }: { number: number }) => {
    const [state, setState] = useState(false)

    useEffect(() => {
        setState(true)
    }, [])
    return (
        <div>
            {state && <AnimatedNumbers
                includeComma
                transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                })}
                animateToNumber={number}
                fontStyle={{
                    fontSize: 40,
                    fontWeight: "bold",
                    color: "red",
                }}
            />}
        </div>
    )
}

export default Counter