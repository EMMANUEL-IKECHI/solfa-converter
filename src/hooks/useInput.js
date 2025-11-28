import React, { useState } from 'react'

const useInput = (initialValue="") => {
    const [value, setValue] = useState(initialValue);
    
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const reset = () => {
        setValue('');
    }

    return {value, reset, handleChange}
}

export default useInput