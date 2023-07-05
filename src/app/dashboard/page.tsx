'use client'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles({
  table: {
    minWidth: 400,
    borderCollapse: 'collapse',
    '& th': {
      color: 'white',
      fontSize: '1rem',
      border: '2px solid white',
    },
    '& td': {
      color: 'white',
      fontSize: '1rem',
      border: '2px solid white',
      padding: '8px',
    },
    '& .MuiTableRow-hover:hover': {
      background: '#444',
    },
  },
  tableCell: {
    padding: '8px',
  },
  houseName: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  teamColor: {
    width: '28px',
    height: '20px',
    borderRadius: '4px',
    marginLeft: '8px',
  },
  teamName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
})

const MyTable = () => {
  const classes = useStyles()

  return (
    <div className='h-screen w-screen overflow-hidden bg-[#16083B] text-white'>
      <div className='bg-gradient-to-r from-[#C77DFF] to-[#000000] h-[9%] w-screen'>
        <h1 className='flex justify-center items-center text-3xl pt-2'>
          Dashboard
        </h1>
      </div>
      <div className='flex justify-center items-center pt-[8%]'>
        <div className='bg-[#343A40] w-[70%] rounded-3xl'>
          <div className='p-10'>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Teams/Round</TableCell>
                  <TableCell className={classes.tableCell}>
                    <div className={classes.teamName}>
                      <Typography component='span'>Team1:</Typography>
                      <div
                        className={`bg-red-600 h-8 w-7 ${classes.teamColor}`}
                      />
                    </div>
                    <Typography className={classes.houseName}>
                      Red House
                    </Typography>
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <div className={classes.teamName}>
                      <Typography component='span'>Team2:</Typography>
                      <div className={`bg-green-600 ${classes.teamColor}`} />
                    </div>
                    <Typography className={classes.houseName}>
                      Green House
                    </Typography>
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <div className={classes.teamName}>
                      <Typography component='span'>Team3:</Typography>
                      <div className={`bg-blue-600 ${classes.teamColor}`} />
                    </div>
                    <Typography className={classes.houseName}>
                      Blue House
                    </Typography>
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <div className={classes.teamName}>
                      <Typography component='span'>Team4:</Typography>
                      <div className={`bg-yellow-600 ${classes.teamColor}`} />
                    </div>
                    <Typography className={classes.houseName}>
                      Yellow House
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Multiple Round</TableCell>
                  <TableCell>20</TableCell>
                  <TableCell>40</TableCell>
                  <TableCell>60</TableCell>
                  <TableCell>80</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>50/50</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>20</TableCell>
                  <TableCell>20</TableCell>
                  <TableCell>40</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Rapid</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>15</TableCell>
                  <TableCell>20</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>General</TableCell>
                  <TableCell>30</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>20</TableCell>
                  <TableCell>40</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell>120</TableCell>
                  <TableCell>130</TableCell>
                  <TableCell>150</TableCell>
                  <TableCell>170</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyTable
