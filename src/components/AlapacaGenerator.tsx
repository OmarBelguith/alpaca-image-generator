import React from 'react'
import { Alpacas } from '../types'
import { AlpacaCustomization } from './AlpacaCustomization'
import { AlpacaImage } from './AlpacaImage'


type AlapacaGeneratorProps = {
    alpacas: Alpacas[];
    onSelectDir: (dir: string) => void;
    onSelectItem: (item: string) => void;
    onRandomizeAlpaca: () => void;
    onDownloadAlpaca: () => void;
}

export const AlapacaGenerator = ({alpacas, onSelectDir, onSelectItem, onRandomizeAlpaca, onDownloadAlpaca}: AlapacaGeneratorProps) => {
    return (
        <div className="flex justify-center gap-8">
            <div className="w-1/2">
                <AlpacaImage alpacas={alpacas}/>
            </div>
            <div className="w-1/2">
                <AlpacaCustomization alpacas={alpacas} onSelectDir={onSelectDir} onSelectItem={onSelectItem}/>
            </div>
        </div>
    )
}
