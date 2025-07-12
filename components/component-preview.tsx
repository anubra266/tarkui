import React from "react";

export const AccordionPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
    <div className="relative space-y-2">
      <div className="bg-gray-800/80 rounded-md p-2 border border-gray-700/50">
        <div className="flex items-center justify-between">
          <div className="w-16 h-1.5 bg-gray-400 rounded"></div>
          <div className="w-3 h-3 border border-gray-600 rounded flex items-center justify-center">
            <div className="w-1 h-1 bg-gray-400"></div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800/80 rounded-md p-2 border border-blue-500/30">
        <div className="flex items-center justify-between mb-2">
          <div className="w-14 h-1.5 bg-blue-400 rounded"></div>
          <div className="w-3 h-3 border border-blue-500 rounded flex items-center justify-center">
            <div className="w-1 h-1 bg-blue-400"></div>
          </div>
        </div>
        <div className="space-y-1 ml-2">
          <div className="w-12 h-1 bg-gray-500 rounded"></div>
          <div className="w-10 h-1 bg-gray-500 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

export const AngleSliderPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-orange-400 rounded-full transform rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-orange-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  </div>
);

export const AvatarPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
        <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-teal-500 rounded-full"></div>
        <div className="w-4 h-4 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full"></div>
      </div>
    </div>
  </div>
);

export const CarouselPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
    <div className="relative">
      <div className="flex space-x-1 mb-2">
        <div className="w-12 h-8 bg-blue-500/30 border border-blue-500/50 rounded"></div>
        <div className="w-12 h-8 bg-gray-700/50 border border-gray-600/50 rounded"></div>
        <div className="w-12 h-8 bg-gray-700/50 border border-gray-600/50 rounded"></div>
      </div>
      <div className="flex justify-center space-x-1">
        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
      </div>
    </div>
  </div>
);

export const CheckboxPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-500 border border-green-400 rounded flex items-center justify-center">
            <div className="w-2 h-1 border-b-2 border-l-2 border-white transform rotate-[-45deg] translate-y-[-1px]"></div>
          </div>
          <div className="w-8 h-1 bg-gray-500 rounded"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border border-gray-600 rounded"></div>
          <div className="w-10 h-1 bg-gray-500 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

export const ClipboardPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="relative">
        <div className="w-10 h-12 bg-gray-800 border border-gray-600 rounded-md">
          <div className="w-6 h-2 bg-gray-700 rounded-t mx-auto"></div>
          <div className="p-2 space-y-1">
            <div className="w-6 h-1 bg-gray-600 rounded"></div>
            <div className="w-4 h-1 bg-gray-600 rounded"></div>
            <div className="w-5 h-1 bg-gray-600 rounded"></div>
          </div>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
);

export const CollapsiblePreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10"></div>
    <div className="relative space-y-2">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 border border-teal-400 rounded flex items-center justify-center">
          <div className="w-1 h-1 bg-teal-400"></div>
        </div>
        <div className="w-12 h-1.5 bg-teal-400 rounded"></div>
      </div>
      <div className="ml-5 space-y-1">
        <div className="w-10 h-1 bg-gray-600 rounded"></div>
        <div className="w-8 h-1 bg-gray-600 rounded"></div>
        <div className="w-12 h-1 bg-gray-600 rounded"></div>
      </div>
    </div>
  </div>
);

export const ColorPickerPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="space-y-2">
        <div className="w-12 h-8 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 rounded border border-gray-600"></div>
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
);

export const ComboboxPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="w-16 h-6 border border-gray-600 rounded bg-gray-800 flex items-center justify-between px-2">
        <div className="w-8 h-1 bg-blue-400 rounded"></div>
        <div className="w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-400"></div>
      </div>
    </div>
  </div>
);

export const DatePickerPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="w-14 h-10 bg-gray-800 border border-gray-600 rounded p-1">
        <div className="grid grid-cols-3 gap-0.5 h-full">
          <div className="bg-gray-700 rounded-sm"></div>
          <div className="bg-gray-700 rounded-sm"></div>
          <div className="bg-gray-700 rounded-sm"></div>
          <div className="bg-gray-700 rounded-sm"></div>
          <div className="bg-emerald-500 rounded-sm"></div>
          <div className="bg-gray-700 rounded-sm"></div>
        </div>
      </div>
    </div>
  </div>
);

export const DialogPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-gray-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="w-14 h-10 bg-gray-800 border border-gray-600 rounded shadow-lg">
        <div className="p-2 space-y-1">
          <div className="w-8 h-1 bg-gray-500 rounded"></div>
          <div className="w-6 h-1 bg-gray-600 rounded"></div>
          <div className="flex justify-end space-x-1 mt-2">
            <div className="w-3 h-1.5 bg-gray-600 rounded"></div>
            <div className="w-3 h-1.5 bg-blue-500 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const EditablePreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="relative">
        <div className="w-12 h-1.5 bg-amber-400 rounded"></div>
        <div className="absolute right-0 top-0 w-0.5 h-1.5 bg-amber-400 animate-pulse"></div>
      </div>
    </div>
  </div>
);

export const FieldPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10"></div>
    <div className="relative space-y-1">
      <div className="w-8 h-1 bg-gray-500 rounded"></div>
      <div className="w-16 h-4 border border-gray-600 rounded bg-gray-800 px-1 flex items-center">
        <div className="w-10 h-1 bg-gray-500 rounded"></div>
      </div>
      <div className="w-12 h-0.5 bg-red-400 rounded"></div>
    </div>
  </div>
);

export const FieldsetPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-500/10"></div>
    <div className="relative">
      <div className="border border-gray-600 rounded p-2 relative">
        <div className="absolute -top-1 left-2 bg-gray-800 px-1">
          <div className="w-6 h-1 bg-purple-400 rounded"></div>
        </div>
        <div className="space-y-1">
          <div className="w-10 h-1 bg-gray-600 rounded"></div>
          <div className="w-8 h-1 bg-gray-600 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

export const FileUploadPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-blue-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="w-14 h-10 border-2 border-dashed border-sky-400 rounded flex flex-col items-center justify-center">
        <div className="w-4 h-3 border border-sky-400 rounded-t"></div>
        <div className="w-1 h-1 bg-sky-400 rounded-full mt-1"></div>
      </div>
    </div>
  </div>
);

export const FloatingPanelPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10"></div>
    <div className="relative">
      <div className="w-12 h-8 bg-gray-800 border border-gray-600 rounded shadow-lg absolute top-2 right-2">
        <div className="p-1 space-y-0.5">
          <div className="w-8 h-0.5 bg-gray-600 rounded"></div>
          <div className="w-6 h-0.5 bg-gray-600 rounded"></div>
          <div className="w-7 h-0.5 bg-gray-600 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

export const HoverCardPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-pink-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="relative">
        <div className="w-8 h-1.5 bg-rose-400 rounded"></div>
        <div className="absolute top-3 left-0 w-10 h-6 bg-gray-800 border border-gray-600 rounded shadow-lg p-1">
          <div className="space-y-0.5">
            <div className="w-6 h-0.5 bg-gray-600 rounded"></div>
            <div className="w-4 h-0.5 bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ListboxPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10"></div>
    <div className="relative">
      <div className="w-16 h-10 border border-gray-600 rounded bg-gray-800 p-1">
        <div className="space-y-1">
          <div className="w-full h-1.5 bg-violet-500/30 rounded px-1 flex items-center">
            <div className="w-8 h-0.5 bg-violet-400 rounded"></div>
          </div>
          <div className="w-full h-1.5 rounded px-1 flex items-center">
            <div className="w-6 h-0.5 bg-gray-600 rounded"></div>
          </div>
          <div className="w-full h-1.5 rounded px-1 flex items-center">
            <div className="w-10 h-0.5 bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const MenuPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10"></div>
    <div className="relative">
      <div className="w-14 h-10 bg-gray-800 border border-gray-600 rounded shadow-lg p-1">
        <div className="space-y-1">
          <div className="w-full h-1.5 hover:bg-emerald-500/20 rounded px-1 flex items-center">
            <div className="w-8 h-0.5 bg-gray-500 rounded"></div>
          </div>
          <div className="w-full h-1.5 bg-emerald-500/20 rounded px-1 flex items-center">
            <div className="w-6 h-0.5 bg-emerald-400 rounded"></div>
          </div>
          <div className="w-full h-0.5 bg-gray-700 rounded mx-1"></div>
          <div className="w-full h-1.5 rounded px-1 flex items-center">
            <div className="w-10 h-0.5 bg-gray-500 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const NumberInputPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="w-12 h-6 border border-gray-600 rounded bg-gray-800 flex items-center">
        <div className="flex-1 px-1">
          <div className="w-6 h-1 bg-blue-400 rounded"></div>
        </div>
        <div className="flex flex-col border-l border-gray-600">
          <div className="w-2 h-1.5 bg-gray-700 hover:bg-gray-600 flex items-center justify-center">
            <div
              className="w-0 h-0 border-l border-r border-b border-transparent border-b-gray-400"
              style={{ borderWidth: "1px" }}
            ></div>
          </div>
          <div className="w-2 h-1.5 bg-gray-700 hover:bg-gray-600 flex items-center justify-center">
            <div
              className="w-0 h-0 border-l border-r border-t border-transparent border-t-gray-400"
              style={{ borderWidth: "1px" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const PaginationPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="flex items-center space-x-1">
        <div className="w-4 h-4 border border-gray-600 rounded flex items-center justify-center">
          <div className="w-1 h-1 bg-gray-400"></div>
        </div>
        <div className="w-4 h-4 bg-indigo-500 border border-indigo-400 rounded flex items-center justify-center">
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
        <div className="w-4 h-4 border border-gray-600 rounded flex items-center justify-center">
          <div className="w-1 h-1 bg-gray-400"></div>
        </div>
        <div className="w-4 h-4 border border-gray-600 rounded flex items-center justify-center">
          <div className="w-1 h-1 bg-gray-400"></div>
        </div>
      </div>
    </div>
  </div>
);

export const PasswordInputPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="w-16 h-6 border border-gray-600 rounded bg-gray-800 flex items-center justify-between px-2">
        <div className="flex space-x-0.5">
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
        </div>
        <div className="w-3 h-3 border border-gray-600 rounded flex items-center justify-center">
          <div className="w-1 h-1 bg-gray-400"></div>
        </div>
      </div>
    </div>
  </div>
);

export const PinInputPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="flex space-x-1">
        <div className="w-4 h-6 border border-teal-400 rounded bg-gray-800 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
        </div>
        <div className="w-4 h-6 border border-gray-600 rounded bg-gray-800"></div>
        <div className="w-4 h-6 border border-gray-600 rounded bg-gray-800"></div>
        <div className="w-4 h-6 border border-gray-600 rounded bg-gray-800"></div>
      </div>
    </div>
  </div>
);

export const PopoverPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="relative">
        <div className="w-6 h-4 bg-orange-500 rounded"></div>
        <div className="absolute top-5 left-0 w-10 h-6 bg-gray-800 border border-gray-600 rounded shadow-lg p-1">
          <div className="space-y-0.5">
            <div className="w-6 h-0.5 bg-gray-600 rounded"></div>
            <div className="w-8 h-0.5 bg-gray-600 rounded"></div>
            <div className="w-4 h-0.5 bg-gray-600 rounded"></div>
          </div>
          <div className="absolute -top-1 left-2 w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-gray-600"></div>
        </div>
      </div>
    </div>
  </div>
);

export const ProgressCircularPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 border-2 border-gray-700 rounded-full"></div>
        <div className="absolute inset-0 border-2 border-transparent border-t-green-400 border-r-green-400 rounded-full transform rotate-45"></div>
        <div className="absolute inset-2 flex items-center justify-center">
          <div className="w-2 h-1 bg-green-400 rounded text-xs"></div>
        </div>
      </div>
    </div>
  </div>
);

export const ProgressLinearPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div className="w-10 h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
      </div>
    </div>
  </div>
);

export const QRCodePreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-gray-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="w-10 h-10 bg-white rounded grid grid-cols-5 gap-0.5 p-0.5">
        <div className="bg-black rounded-sm"></div>
        <div className="bg-white"></div>
        <div className="bg-black rounded-sm"></div>
        <div className="bg-white"></div>
        <div className="bg-black rounded-sm"></div>
        <div className="bg-white"></div>
        <div className="bg-black rounded-sm"></div>
        <div className="bg-white"></div>
        <div className="bg-black rounded-sm"></div>
        <div className="bg-white"></div>
        <div className="bg-black rounded-sm"></div>
        <div className="bg-white"></div>
        <div className="bg-black rounded-sm"></div>
        <div className="bg-white"></div>
        <div className="bg-black rounded-sm"></div>
        <div className="bg-white"></div>
        <div className="bg-black rounded-sm"></div>
        <div className="bg-white"></div>
        <div className="bg-black rounded-sm"></div>
        <div className="bg-white"></div>
        <div className="bg-black rounded-sm"></div>
        <div className="bg-white"></div>
        <div className="bg-black rounded-sm"></div>
        <div className="bg-white"></div>
        <div className="bg-black rounded-sm"></div>
      </div>
    </div>
  </div>
);

export const RadioGroupPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 border-2 border-purple-400 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
          </div>
          <div className="w-8 h-1 bg-gray-500 rounded"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 border-2 border-gray-600 rounded-full"></div>
          <div className="w-10 h-1 bg-gray-500 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

export const RatingGroupPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="flex space-x-0.5">
        <div
          className="w-3 h-3 bg-yellow-400"
          style={{
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        ></div>
        <div
          className="w-3 h-3 bg-yellow-400"
          style={{
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        ></div>
        <div
          className="w-3 h-3 bg-yellow-400"
          style={{
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        ></div>
        <div
          className="w-3 h-3 bg-gray-600"
          style={{
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        ></div>
        <div
          className="w-3 h-3 bg-gray-600"
          style={{
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        ></div>
      </div>
    </div>
  </div>
);

export const SegmentGroupPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="flex bg-gray-800 border border-gray-600 rounded p-0.5">
        <div className="px-2 py-1 bg-cyan-500 text-white rounded text-xs flex items-center justify-center">
          <div className="w-2 h-1 bg-white rounded"></div>
        </div>
        <div className="px-2 py-1 text-gray-400 rounded text-xs flex items-center justify-center">
          <div className="w-2 h-1 bg-gray-400 rounded"></div>
        </div>
        <div className="px-2 py-1 text-gray-400 rounded text-xs flex items-center justify-center">
          <div className="w-2 h-1 bg-gray-400 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

export const SelectPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="w-16 h-6 border border-gray-600 rounded bg-gray-800 flex items-center justify-between px-2">
        <div className="w-8 h-1 bg-gray-500 rounded"></div>
        <div className="w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-400"></div>
      </div>
    </div>
  </div>
);

export const SignaturePadPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="w-16 h-10 border border-gray-600 rounded bg-gray-800 p-1 relative">
        <svg className="w-full h-full" viewBox="0 0 60 40">
          <path
            d="M5 20 Q15 10 25 20 T45 15"
            stroke="#ec4899"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
    </div>
  </div>
);

export const SliderPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="w-16 h-2 bg-gray-700 rounded-full relative">
        <div className="w-10 h-2 bg-blue-500 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-4 h-4 bg-blue-500 border-2 border-white rounded-full transform -translate-y-1/2 -translate-x-1/2 shadow-lg"></div>
      </div>
    </div>
  </div>
);

export const SplitterPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-slate-500/10"></div>
    <div className="relative flex h-full">
      <div className="w-8 h-full bg-gray-800 border border-gray-600 rounded-l"></div>
      <div className="w-1 h-full bg-gray-600 cursor-col-resize flex items-center justify-center">
        <div className="w-0.5 h-4 bg-gray-400 rounded"></div>
      </div>
      <div className="flex-1 h-full bg-gray-800 border border-gray-600 rounded-r"></div>
    </div>
  </div>
);

export const StepsPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-1 bg-white rounded"></div>
        </div>
        <div className="w-4 h-0.5 bg-emerald-500 rounded"></div>
        <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
        <div className="w-4 h-0.5 bg-gray-600 rounded"></div>
        <div className="w-4 h-4 border-2 border-gray-600 rounded-full"></div>
      </div>
    </div>
  </div>
);

export const SwitchPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="w-8 h-4 bg-green-500 rounded-full relative">
        <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
      </div>
    </div>
  </div>
);

export const TabsPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
    <div className="relative">
      <div className="flex border-b border-gray-700">
        <div className="px-2 py-1 border-b-2 border-blue-500">
          <div className="w-6 h-1 bg-blue-400 rounded"></div>
        </div>
        <div className="px-2 py-1">
          <div className="w-4 h-1 bg-gray-500 rounded"></div>
        </div>
        <div className="px-2 py-1">
          <div className="w-5 h-1 bg-gray-500 rounded"></div>
        </div>
      </div>
      <div className="pt-2">
        <div className="w-12 h-1 bg-gray-600 rounded mb-1"></div>
        <div className="w-8 h-1 bg-gray-600 rounded"></div>
      </div>
    </div>
  </div>
);

export const TagsInputPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="w-16 h-6 border border-gray-600 rounded bg-gray-800 p-1 flex items-center space-x-1">
        <div className="px-1 py-0.5 bg-violet-500/30 border border-violet-500/50 rounded text-xs">
          <div className="w-3 h-0.5 bg-violet-400 rounded"></div>
        </div>
        <div className="px-1 py-0.5 bg-blue-500/30 border border-blue-500/50 rounded text-xs">
          <div className="w-2 h-0.5 bg-blue-400 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

export const TimerPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="text-center">
        <div className="flex space-x-1 mb-1">
          <div className="w-3 h-4 bg-red-500/30 border border-red-500/50 rounded flex items-center justify-center">
            <div className="w-1 h-2 bg-red-400 rounded"></div>
          </div>
          <div className="w-1 h-4 flex flex-col justify-center space-y-0.5">
            <div className="w-0.5 h-0.5 bg-red-400 rounded-full"></div>
            <div className="w-0.5 h-0.5 bg-red-400 rounded-full"></div>
          </div>
          <div className="w-3 h-4 bg-red-500/30 border border-red-500/50 rounded flex items-center justify-center">
            <div className="w-1 h-2 bg-red-400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ToastPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="w-16 h-6 bg-gray-800 border border-gray-600 rounded shadow-lg flex items-center px-2 space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <div className="flex-1">
          <div className="w-8 h-0.5 bg-gray-500 rounded mb-0.5"></div>
          <div className="w-6 h-0.5 bg-gray-600 rounded"></div>
        </div>
        <div className="w-2 h-2 border border-gray-600 rounded flex items-center justify-center">
          <div className="w-0.5 h-0.5 bg-gray-400"></div>
        </div>
      </div>
    </div>
  </div>
);

export const ToggleGroupPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="flex border border-gray-600 rounded">
        <div className="w-4 h-4 bg-purple-500 border-r border-gray-600 flex items-center justify-center">
          <div className="w-1.5 h-1 bg-white rounded"></div>
        </div>
        <div className="w-4 h-4 bg-gray-800 border-r border-gray-600 flex items-center justify-center">
          <div className="w-1.5 h-1 bg-gray-500 rounded"></div>
        </div>
        <div className="w-4 h-4 bg-purple-500 flex items-center justify-center">
          <div className="w-1.5 h-1 bg-white rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

export const TogglePreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="w-6 h-6 bg-blue-500 border border-blue-400 rounded flex items-center justify-center">
        <div className="w-2 h-1 bg-white rounded"></div>
      </div>
    </div>
  </div>
);

export const TooltipPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/10"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="relative">
        <div className="w-6 h-4 bg-yellow-500 rounded"></div>
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 border border-gray-600 rounded text-xs shadow-lg">
          <div className="w-6 h-0.5 bg-gray-400 rounded"></div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-600"></div>
        </div>
      </div>
    </div>
  </div>
);

export const TourPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10"></div>
    <div className="relative">
      <div className="w-6 h-4 bg-indigo-500 rounded mb-2"></div>
      <div className="w-12 h-8 bg-gray-800 border-2 border-indigo-500 rounded shadow-lg p-1 relative">
        <div className="space-y-0.5">
          <div className="w-8 h-0.5 bg-gray-500 rounded"></div>
          <div className="w-6 h-0.5 bg-gray-600 rounded"></div>
        </div>
        <div className="absolute -bottom-1 left-2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-indigo-500"></div>
        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-indigo-500 rounded-full text-xs flex items-center justify-center">
          <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
);

export const TreeViewPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10"></div>
    <div className="relative space-y-1">
      <div className="flex items-center space-x-1">
        <div className="w-2 h-2 border border-green-400 rounded-sm flex items-center justify-center">
          <div className="w-0.5 h-0.5 bg-green-400"></div>
        </div>
        <div className="w-8 h-1 bg-green-400 rounded"></div>
      </div>
      <div className="ml-3 space-y-1">
        <div className="flex items-center space-x-1">
          <div className="w-1.5 h-1.5 bg-gray-600 rounded-sm"></div>
          <div className="w-6 h-0.5 bg-gray-600 rounded"></div>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-1.5 h-1.5 bg-gray-600 rounded-sm"></div>
          <div className="w-8 h-0.5 bg-gray-600 rounded"></div>
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <div className="w-2 h-2 border border-green-400 rounded-sm flex items-center justify-center">
          <div className="w-0.5 h-0.5 bg-green-400"></div>
        </div>
        <div className="w-10 h-1 bg-green-400 rounded"></div>
      </div>
    </div>
  </div>
);

// Export all previews in a map for easy access
export const componentPreviews = {
  accordion: AccordionPreview,
  "angle-slider": AngleSliderPreview,
  avatar: AvatarPreview,
  carousel: CarouselPreview,
  checkbox: CheckboxPreview,
  clipboard: ClipboardPreview,
  collapsible: CollapsiblePreview,
  "color-picker": ColorPickerPreview,
  combobox: ComboboxPreview,
  "date-picker": DatePickerPreview,
  dialog: DialogPreview,
  editable: EditablePreview,
  field: FieldPreview,
  fieldset: FieldsetPreview,
  "file-upload": FileUploadPreview,
  "floating-panel": FloatingPanelPreview,
  "hover-card": HoverCardPreview,
  listbox: ListboxPreview,
  menu: MenuPreview,
  "number-input": NumberInputPreview,
  pagination: PaginationPreview,
  "password-input": PasswordInputPreview,
  "pin-input": PinInputPreview,
  popover: PopoverPreview,
  "progress-circular": ProgressCircularPreview,
  "progress-linear": ProgressLinearPreview,
  "qr-code": QRCodePreview,
  "radio-group": RadioGroupPreview,
  "rating-group": RatingGroupPreview,
  "segment-group": SegmentGroupPreview,
  select: SelectPreview,
  "signature-pad": SignaturePadPreview,
  slider: SliderPreview,
  splitter: SplitterPreview,
  steps: StepsPreview,
  switch: SwitchPreview,
  tabs: TabsPreview,
  "tags-input": TagsInputPreview,
  timer: TimerPreview,
  toast: ToastPreview,
  "toggle-group": ToggleGroupPreview,
  toggle: TogglePreview,
  tooltip: TooltipPreview,
  tour: TourPreview,
  "tree-view": TreeViewPreview,
};
