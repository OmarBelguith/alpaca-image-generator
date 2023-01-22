import { useState } from 'react'
import { AlapacaGenerator } from './components/AlapacaGenerator'
import { alpacas } from './data/alpacas'

function App() {
  const [alpacasState, setAlpacas] = useState(alpacas);

  // This function will take the directory (Part: e.g. Background, Eyes...) we want to customize
  const handleSelectDir = (dirname: string) => {
    const newAlpacas = alpacasState.map((dir) => {
      if (dir.directory === dirname) {
        return {
          ...dir,
          selected: true,
        };
      }
      return {
        ...dir,
        selected: false,
      };
    });
    setAlpacas(newAlpacas);
  }

  // This function will take which item (e.g. Blue, Green, Red...) we want to select for the directory
  const handleSelectItem = (filename: string) => {
    const newAlpacas = alpacasState.map((dir) => {
      if (dir.selected) {
        return {
          ...dir,
          items: dir.items.map((item) => {
            if (item.filename === filename) {
              return {
                ...item,
                selected: true,
              };
            }
            return {
              ...item,
              selected: false,
            };
          }),
        };
      }
      return dir;
    });
    setAlpacas(newAlpacas);
  }

  // This function will create a random alpaca out of the alpacas array
  const handleRandomAlpaca = () => {
    const newAlpacas = alpacasState.map((dir) => {
      const randomIndex = Math.floor(Math.random() * dir.items.length);
      return {
        ...dir,
        items: dir.items.map((item, index) => {
          if (index === randomIndex) {
            return {
              ...item,
              selected: true,
            };
          }
          return {
            ...item,
            selected: false,
          };
        }),
      };
    });
    setAlpacas(newAlpacas);
  }

  // This function will download the final alpaca image
  const handleDownload = () => {
    const alpaca = document.getElementById("alpaca");
    if (alpaca) {
      const canvas = document.createElement("canvas");
      canvas.width = 500;
      canvas.height = 500;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const data = (alpaca as HTMLDivElement).innerHTML;
        const DOMURL = window.URL || window.webkitURL || window;
        const img = new Image();
        const svg = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
        const url = DOMURL.createObjectURL(svg);
        img.onload = function () {
          ctx.drawImage(img, 0, 0);
          DOMURL.revokeObjectURL(url);
          const imgURI = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
          const evt = new MouseEvent("click", {
            view: window,
            bubbles: false,
            cancelable: true,
          });
          const a = document.createElement("a");
          a.setAttribute("download", "alpaca.png");
          a.setAttribute("href", imgURI);
          a.setAttribute("target", "_blank");
          a.dispatchEvent(evt);
        };
        img.src = url;
      }
    }
  };
  
  return (
    <div className="h-screen">
      <div className="container mx-auto p-8 space-y-8">
        <h1 className="text-left text-6xl text-blue-900 uppercase font-semibold">Alpaca Generator</h1>
        <AlapacaGenerator alpacas={alpacasState} onSelectDir={handleSelectDir} onSelectItem={handleSelectItem} onRandomizeAlpaca={handleRandomAlpaca} onDownloadAlpaca={handleDownload}/>
      </div>
    </div>
  )
}

export default App
