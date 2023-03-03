import React from 'react'
import { Box, Typography } from "@pankod/refine-mui"
import { useList } from '@pankod/refine-core'

import { AgentCard } from 'components'

const Agent = () => {
  const { data, isLoading, isError } = useList({ resource: "users" });

  const allAgents = data?.data ?? [];

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;


  // alert(allAgents);

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Agents List
      </Typography>

      <Box
        mt="50px"
        borderRadius="10px"
        boxShadow= 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
        bgcolor="rgb(238 240 255)"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          backgroundColor: "#fcfcfc",
        }}
      >
        {allAgents.map((agent) => (
          <AgentCard
            key={agent._id}
            id={agent._id}
            name={agent.name}
            email={agent.email}
            avatar={agent.avatar}
            noOfProperties={agent.allProperties.length}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Agent