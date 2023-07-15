import React, { useState } from 'react';
import {
  BlockPicker,
  CirclePicker,
  PhotoshopPicker,
  SketchPicker,
} from 'react-color';
import './App.css';

function App() {
  const [circleColor, setCircleColor] = useState('#FFF');
  const [sketchColor, setSketchColor] = useState('#0000FF');
  const [photoshopColor, setphotoshopColor] = useState('#0000FF');
  const [blockPickerColor, setBlockPickerColor] = useState('#0000FF');

  return (
    <div style={{ backgroundColor: circleColor, transition: 'ease all 500ms' }}>
      <div className="circlePicker">
        <h2>React-color picker example 1</h2>
        <h4>Circle Picker option of RGB</h4>
        <p>Selected color: {circleColor}</p>
        <CirclePicker
          color={circleColor}
          colors={['	#FF0000', '#00FF00', '#0000FF']}
          onChange={(e) => setCircleColor(e.hex)}
        />
      </div>

      <div className="sketchpicker">
        <h2>React-color picker 2 example</h2>
        <h4>Sketch Picker can set colors option</h4>
        <p>Selected color: {sketchColor}</p>
        <SketchPicker
          color={sketchColor}
          onChange={(e) => setSketchColor(e.hex)}
        />
      </div>

      <div className="photoshoppicker">
        <h2>React-color picker example 3</h2>
        <h4>Photoshop Picker </h4>
        <p>Selected color: {photoshopColor}</p>
        <PhotoshopPicker
          color={photoshopColor}
          onChangeComplete={(color) => {
            setphotoshopColor(color.hex);
          }}
        />
      </div>

      <div className="blockpicker">
        <h2>React-color picker example 4</h2>
        <h4>BlockPicker</h4>
        <p>Selected color: {blockPickerColor}</p>
        <BlockPicker
          color={blockPickerColor}
          onChange={(color) => {
            setBlockPickerColor(color.hex);
          }}
        />
      </div>
    </div>
  );
}

export default App;
