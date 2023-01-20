import { Alpacas } from '../types'

export const AlpacaImage = ({alpacas}: {alpacas: Alpacas[]}) => {
  return (
        <div className="alpaca" id="alpaca">
          {alpacas.map((dir, index) => {
            const item = dir.items.find((item) => item.selected);
            if (!item) return null;
            return (
              <img
                src={`/alpaca/${dir.directory}/${item.filename}.png`}
                alt="alpacas image"
                className={`alpaca-${dir.directory}`}
                key={index}
              />
            );
          })}
        </div>
  )
}
