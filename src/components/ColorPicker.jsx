import React, { useState } from 'react';
import { useTheme } from '../context/Theme';

const ColorPicker = () => {
  const { accentColor, updateAccentColor, resetToDefault } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const presetColors = [
    '#EA384C',
    '#3B82F6',
    '#10B981',
    '#8B5CF6',
    '#F59E0B',
    '#EF4444',
    '#06B6D4',
    '#84CC16',
  ];

  return (
    <div className="fixed top-5 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full shadow-lg border-2"
        style={{ 
          backgroundColor: accentColor,
          borderColor: accentColor
        }}
        title="Customize Colors"
      >
        <i className="fa-solid fa-palette text-white"></i>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-14 bg-black border rounded-lg p-4 shadow-xl min-w-64">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-bold">Theme Colors</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2">
              Accent Color
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={accentColor}
                onChange={(e) => updateAccentColor(e.target.value)}
                className="w-10 h-10 cursor-pointer"
              />
              <input
                type="text"
                value={accentColor}
                onChange={(e) => updateAccentColor(e.target.value)}
                className="flex-1 bg-gray-800 text-white px-3 py-2 rounded text-sm"
                placeholder="#EA384C"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2">
              Quick Presets
            </label>
            <div className="grid grid-cols-4 gap-2">
              {presetColors.map((color) => (
                <button
                  key={color}
                  onClick={() => updateAccentColor(color)}
                  className="w-8 h-8 rounded border-2 border-gray-600 hover:scale-110 transition-transform"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          <button
            onClick={resetToDefault}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded text-sm transition-colors"
          >
            Reset to Default
          </button>

          <div className="mt-4 p-3 rounded border text-xs">
            <div className="text-center mb-2 text-gray-400">Preview</div>
            <div className="flex gap-2 justify-center">
              <div 
                className="w-6 h-6 rounded border"
                style={{ backgroundColor: accentColor }}
              ></div>
              <div 
                className="w-6 h-6 rounded border border-gray-600"
                style={{ backgroundColor: 'var(--dark-bg-color)' }}
              ></div>
              <div 
                className="w-6 h-6 rounded border border-gray-600 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'var(--text-color)',
                  color: accentColor
                }}
              >
                A
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
