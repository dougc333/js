import {returnDateTime} from 'file2.mjs';
import {logDate} from 'file3.mjs'

const main=()=>{
  const date = returnDateTime();
  logDate(date);
}