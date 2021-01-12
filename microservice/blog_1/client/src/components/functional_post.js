import React,{useState} from 'react'
import {Input,InputLabel,FormControl, FormHelperText} from '@material-ui/core'


const FunctionalPost=()=>{
  return(
    <FormControl>
        <InputLabel >Post Title</InputLabel>
        <Input id="title" />
        <FormHelperText id="stuff here">Never share data</FormHelperText>
    </FormControl>

  );
}

export default FunctionalPost;
