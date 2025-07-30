import React from "react";
import {
  AccordionPreview,
  DatePickerPreview,
  CarouselPreview,
  CheckboxPreview,
  ColorPickerPreview,
  SliderPreview,
  AvatarPreview,
  SwitchPreview,
} from "./component-preview";

export const OpenGraphPreview = () => {
  return (
    <div className="w-[900px] h-[572px] mx-auto bg-linear-to-br from-gray-900 via-purple-900/20 to-blue-900/20 overflow-hidden shadow-2xl border border-gray-700/50">
      {/* Header Section */}
      <div className="relative p-8 pb-6">
        <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10"></div>
        <div className="absolute top-4 right-4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-8 w-24 h-24 bg-purple-500/5 rounded-full blur-xl"></div>

        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <h1 className="text-3xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              TarkUI
            </h1>
          </div>
          <p className="text-gray-300 text-lg font-medium">
            Beautiful Components with Ark UI and Tailwind CSS
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">50+ Components</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">4 Frameworks</span>
            </div>
          </div>
        </div>
      </div>

      {/* Components Grid */}
      <div className="px-8 pb-8 mt-4">
        <div className="grid grid-cols-4 gap-3">
          {[
            DatePickerPreview,
            CarouselPreview,
            ColorPickerPreview,
            AvatarPreview,
            AccordionPreview,
            SliderPreview,
            CheckboxPreview,
            SwitchPreview,
          ].map((PreviewComponent, index) => (
            <div
              key={index}
              className="w-50 h-32 rounded-lg overflow-hidden border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <PreviewComponent />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-linear-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full">
            <span className="text-white font-medium">Build faster</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Border */}
      <div className="h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </div>
  );
};
