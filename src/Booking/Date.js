<<<<<<< HEAD
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function HelperText() {
  
  return (
    <div style={{backgroundColor:'white',borderRadius:'30px'}}>
      
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
      disablePast
       
        placeholder='DD/MM/YY'
        slotProps={{
          
        }}
      />
    </LocalizationProvider>
    
    </div>
  );
}
=======
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function HelperText() {
  
  return (
    <div style={{backgroundColor:'white',borderRadius:'30px'}}>
      
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
      disablePast
       
        placeholder='DD/MM/YY'
        slotProps={{
          
        }}
      />
    </LocalizationProvider>
    
    </div>
  );
}
>>>>>>> 3d42d72 (updated)
