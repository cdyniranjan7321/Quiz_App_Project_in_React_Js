'use client'
import axios from 'axios';
import { toast } from 'react-toastify';
import React, { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '@/components/Sidebar';
const UploadTeams = () => {
  const [isSidebarShown, setIsSidebarShown] = useState(true)
  const [data, setData] = useState([{ id: '', teamName: '', gameOrder: '' }]);
  const [numberOfTeams, setNumberOfTeams] = useState(1); // State to store the number of teams
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      if (screenWidth < 768) {
        setIsSidebarShown(false)
        //this makes the sidebar hidden
      } else {
        setIsSidebarShown(true)
      }
    }

    // Attach the event listener on component mount
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const onSubmit = async (formData: any) => {
    const entries = data.map((item, index) => {
      const id = parseInt(formData[`id_${index}`]);
      const gameOrder = parseInt(formData[`gameOrder_${index}`]);
      const teamName = formData[`teamName_${index}`];
      return {
        ...item,
        id,
        teamName,
        gameOrder,
      };
    });
    console.log('entries', entries);
    try {
      const response = await axios.post('/api/createTeams', entries);
      toast.success('Success');
    } catch (err) {
      toast.error('Error');
    }
  };
  const handleTeamNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNumberOfTeams = Number(event.target.value);
    const newData = Array.from({ length: newNumberOfTeams }).map(() => ({
      id: '',
      teamName: '',
      gameOrder: '',
    }));
    setData(newData);
    setNumberOfTeams(newNumberOfTeams);
  };
  return (
    <div className=''>
      <div className='absolute left-0 top-0 z-30 h-full'>
        <Sidebar isSidebarShown={isSidebarShown} />
      </div>
      <div className='fixed top-0 flex justify-center  mt-[6%]  backdrop-blur-4xl  border-2 border-purple-500 rounded-3xl w-[80%] h-[80%] ml-[10%]'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex justify-center'>
            <span className='p-4 text-3xl'>Number of Teams :</span>
            <input
            type="number"
            className="rounded-md w-[8%] my-2 pl-4"
            id=""
            placeholder=""
            max={20}
            min={2}
            value={numberOfTeams}
            onChange={handleTeamNumber}
          />
            </div>
          <table>
            <thead>
              <tr>
                <th className='border-2 border-black'>SN</th>
                <th className='border-2 border-black'>Team Name</th>
                <th className='border-2 border-black'>Game Order</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className='border-2 border-black'>
                    <input
                      type="number"
                      {...register(`id_${index}`, { required: true })}
                    />
                  </td>
                  <td className='border-2 border-black'>
                    <input
                      type="text"
                      {...register(`teamName_${index}`, { required: true })}
                    />
                  </td>
                  <td className='border-2 border-black'>
                    <input
                      type="number"
                      {...register(`gameOrder_${index}`, { required: true })}
                    />
                  </td>
                  <td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className=''>
          <div className='fixed bottom-10 ml-[26%] bg-green-600 rounded-2xl p-2'>
          <input type="submit" value="Save" />
        </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UploadTeams;