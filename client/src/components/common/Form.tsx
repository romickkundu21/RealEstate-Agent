import { Box, Typography, Stack, FormControl, FormHelperText, TextField, TextareaAutosize, Select, MenuItem, Button } from "@pankod/refine-mui";

import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";

const Form = ({
  type,
  register,
  formLoading,
  handleSubmit,
  onFinish,
  propertyImage,
  handleImageChange,
  onFinishHandler,
}: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="11142d">{type} a Property</Typography>
      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
        <form style={{ marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', gap: "20px" }} onSubmit={handleSubmit(onFinishHandler)}>
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d' }}>Enter property name</FormHelperText>
            <TextField fullWidth required id="outlined-basic" variant="outlined" color="info" {...register('title', { required: true })}></TextField>
          </FormControl>

          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d' }}>Enter description</FormHelperText>
            <TextareaAutosize minRows={5} required color="info" placeholder="Write description" style={{ width: '100%', background: 'transparent', fontSize: '16px', borderColor: 'rgba(0,0,0,0.23)', borderRadius: 6, padding: 10, color: '#919191' }} {...register('description', { required: true })} />
          </FormControl>
          <Stack direction='row' gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d' }}>
                Select property type
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ 'aria-label': 'Without label' }}
                defaultValue="apartment"
                {...register('propertyType', { required: true })}
              >
                <MenuItem value="apartment">Apartment</MenuItem>
                <MenuItem value="villa">Villa</MenuItem>
                <MenuItem value="farmhouse">Farm House</MenuItem>
                <MenuItem value="condos">Condos</MenuItem>
                <MenuItem value="townhouse">Town House</MenuItem>
                <MenuItem value="duplex">Duplex</MenuItem>
                <MenuItem value="studio">Studio</MenuItem>
                <MenuItem value="chalet">Chalet</MenuItem>
              </Select>
            </FormControl>

            <FormControl>
              <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d' }}>Enter property price</FormHelperText>
              <TextField fullWidth required id="outlined-basic" type="number" variant="outlined" color="info" {...register('price', { required: true })}></TextField>
            </FormControl>
          </Stack>
          <FormControl>
              <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d' }}>Enter location</FormHelperText>
              <TextField fullWidth required id="outlined-basic" variant="outlined" color="info" {...register('location', { required: true })}></TextField>
            </FormControl>

            <Stack direction="column" gap={1} justifyContent="center" mb={2}>
                <Stack direction="row" gap={1}>
                    <Typography color="#11142d" my="10px" fontWeight={500} fontSize={16}>Property photo</Typography>
                    <Button component="label" sx={{width:'fit-content', color:'#2ed480', textTransform:'uppercase', fontSize:16}}>Upload * 
                    <input hidden accept="image/*" type="file" onChange={(e)=>{
                      // @ts-ignore
                      handleImageChange(e.target.files[0])
                    }}/>
                    </Button>
                </Stack>
                <Typography fontSize={14} color="#808191" sx={{wordBreak:'break-all'}}>{propertyImage?.name}</Typography>
            </Stack>
            <CustomButton type="submit" title={formLoading? 'Submitting...':'Submit'} backgroundColor="#865DFF" color="#fcfcfc"/>
        </form>
      </Box>
    </Box>
  )
}

export default Form