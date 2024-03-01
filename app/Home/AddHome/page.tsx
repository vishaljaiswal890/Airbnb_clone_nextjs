"use client"
import React from 'react'
import Navbar from '@/components/base/Navbar';
import Counter from './../../../components/common/Counter';

const Page = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        {/* left */}
                        <h1>Airbnb It</h1>
                        <p>You could earn</p>
                        <Counter number={5000} />
                    </div>
                    <div>
                        {/* right */}
                        <h2>Right Side Content</h2>
                        <p>This is the content for the right side of the grid.</p>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Page
