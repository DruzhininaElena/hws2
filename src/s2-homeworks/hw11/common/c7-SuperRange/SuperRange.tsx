import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: '147px',
                color: '#0c2',
                marginRight: '10px',
                '& .MuiSlider-rail': {
                    backgroundColor: '#8b8b8b',
                    opacity: 1,
                },
                '& .MuiSlider-thumb': {
                    border: '1px solid #0c2',
                    backgroundColor: '#fff',
                    width: 18,
                    height: 18,
                    '&:before': {
                        content: '""',
                        display: 'block',
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: '#0c2',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
