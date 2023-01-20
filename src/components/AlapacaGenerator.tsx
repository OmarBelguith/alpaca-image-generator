import React from 'react'
import { AlpacaCustomization } from './AlpacaCustomization'
import { AlpacaImage } from './AlpacaImage'

export const AlapacaGenerator = () => {
    return (
        <div className="flex justify-center">
            <div className="w-1/2">
                <AlpacaImage />
            </div>
            <div className="w-1/2">
                <AlpacaCustomization />
            </div>
        </div>
    )
}
