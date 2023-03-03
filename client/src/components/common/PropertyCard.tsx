import React from 'react'
import { Place } from '@mui/icons-material'
import { Link } from '@pankod/refine-react-router-v6'
import { Card, Typography, Box, CardMedia, CardContent, Stack } from "@pankod/refine-mui";

import { PropertyCardProps } from 'interfaces/property'

const PropertyCard = ({ id, title, photo, location, price }: PropertyCardProps) => {
  return (
    <Card
      component={Link}
      to={`/properties/show/${id}`}
      sx={{
        maxWidth:'330px',
        padding:'10px',
        '&:hover':{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          transform: 'scale(1.05)'
        },
        cursor:'pointer',
        transition:'transform 1s',
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        width="100%"
        height={210}
        image={photo}
        alt="card image"
        sx={{borderRadius:'10px'}}
      />
      <CardContent sx={{display: 'flex', flexDirection:'row', gap:"10px", justifyContent:'space-between', paddingX:'5px'}}>
        <Stack direction={'column'} gap={1}>
          <Typography fontSize={16} fontWeight={500} color="#11142d">{title}</Typography>
          <Stack direction={'row'} gap={0.5} alignItems={'flex-start'}>
            <Place
              sx={{fontSize:16, marginTop:0.5, color:'#11142d'}}
            />
            <Typography fontSize={14} color="#808191">{location}</Typography>
          </Stack>
        </Stack>
        <Box px={1.5} py={0.5} borderRadius={1} height="fit-content" bgcolor="#dadefa">
          <Typography fontSize={12} fontWeight={600} color="#2b3aa5">Rs.{price}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PropertyCard