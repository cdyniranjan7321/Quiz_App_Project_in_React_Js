'use client'
import React, { useState } from 'react'
import AdminSidebar from '@/components/AdminSidebar'
    
const TeamsToPlay = () => {
        const dummyData = [
            { id: 1, roundName: 'General Round' },
            { id: 2, roundName: 'Rapid Fire' },
            { id: 3, roundName: '50/50' },
            { id: 4, roundName: 'Audio Visual' },
          ]
      return (
        <div >
          <div className='absolute'>
    <AdminSidebar/>
          </div>
          <div className='absolute flex flex-col w-[60%] ml-72 mt-36'>
            {/* Table Section */}
            <div className='pt-5  pl-7  '>
              <div className='bg-gray-600  w-[130%] rounded-md pl-[14%] pr-10  pt-10  '>
                {/* Input and buttons */}
                <table className=' text-2xl'>
                  <thead>
                    <tr>
                      <th className='text-white text-center px-4 py-2 pl-6 pr-11 border border-white'>
                        SN
                      </th>
                      <th className='text-white pl-5 pr-5 py-3 border border-white w-32 text-center'>
                        <h1>Team Name</h1>
                      </th>
                      <th className='text-white text-center px-4 py-4 pl-[8%] pr-[8%] border border-white'>
                        Game Order
                      </th>
                    </tr>
                  </thead>
                  <tbody>
    
                    {/* Loop through dummyData to create table rows */}
                    {dummyData.map((data) => (
                      <tr key={data.id} className=''>
                        <td className='text-white px-4 py-2 border border-white text-center'>
                          {data.id}
                        </td>
                        <td className='text-blue px-4 py-2 border border-white max-w-xs w-3/4 truncate text-center'>
                          {data.roundName}
                        </td>
                        <td className='text-blue px-4 py-2 border border-white max-w-xs w-3/4 truncate text-center'>
                          {data.id}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
    
                {/* Save  button */}
                <div className='pt-[5%] pb-5'>
                  <button className='bg-[#417468] text-2xl text-white  w-[14%] rounded-2xl flex justify-center  ml-[40%] '>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
    
         </div>
      )
    }
    
export default TeamsToPlay;