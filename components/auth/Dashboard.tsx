"use client"
import React, { useState } from 'react'

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <div>
            <li
            className="rounded-md p-2 cursor-pointer hover:bg-gray-200"
            onClick={() => setIsModalOpen(true)}
          >
            Dashboard
          </li>
        </div >
    )
}

export default Dashboard