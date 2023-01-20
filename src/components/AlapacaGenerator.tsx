import React from 'react'
import { Alpacas } from '../types'
import { AlpacaCustomization } from './AlpacaCustomization'
import { AlpacaImage } from './AlpacaImage'

export const AlapacaGenerator = ({alpacas}: {alpacas: Alpacas[]}) => {
    return (
        <div className="flex justify-center gap-8">
            <div className="w-1/2">
                <AlpacaImage alpacas={alpacas}/>
            </div>
            <div className="w-1/2">
                <AlpacaCustomization />
            </div>
        </div>
    )
}
