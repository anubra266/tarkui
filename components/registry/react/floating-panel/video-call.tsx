"use client";

import { FloatingPanel } from "@ark-ui/react/floating-panel";
import { Portal } from "@ark-ui/react/portal";
import {
  Video,
  Mic,
  MicOff,
  VideoOff,
  Phone,
  X,
  Minus,
  Maximize2,
  ArrowDownLeft,
} from "lucide-react";
import { useState } from "react";

export default function VideoCall() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [callDuration, setCallDuration] = useState("05:23");

  return (
    <FloatingPanel.Root defaultSize={{ width: 380, height: 280 }}>
      <FloatingPanel.Trigger className="px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 focus:outline-hidden focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center gap-2">
        <Video className="w-4 h-4" />
        Start Video Call
      </FloatingPanel.Trigger>

      <Portal>
        <FloatingPanel.Positioner className="z-50">
          <FloatingPanel.Content className="flex flex-col bg-black rounded-lg data-maximized:rounded-none shadow-xl border border-gray-700 w-full overflow-hidden">
            <FloatingPanel.DragTrigger>
              <FloatingPanel.Header className="py-2 px-4 bg-black/80 flex justify-between items-center cursor-move">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <FloatingPanel.Title className="font-medium text-white">
                    Sarah Chen • {callDuration}
                  </FloatingPanel.Title>
                </div>
                <FloatingPanel.Control className="flex items-center gap-1">
                  <FloatingPanel.StageTrigger
                    stage="minimized"
                    className="w-6 h-6 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 rounded transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger
                    stage="maximized"
                    className="w-6 h-6 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 rounded transition-colors"
                  >
                    <Maximize2 className="w-3 h-3" />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger
                    stage="default"
                    className="w-6 h-6 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 rounded transition-colors"
                  >
                    <ArrowDownLeft className="w-3 h-3" />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.CloseTrigger className="w-6 h-6 flex items-center justify-center text-white/70 hover:text-red-400 hover:bg-red-500/20 rounded transition-colors">
                    <X className="w-3 h-3" />
                  </FloatingPanel.CloseTrigger>
                </FloatingPanel.Control>
              </FloatingPanel.Header>
            </FloatingPanel.DragTrigger>

            <FloatingPanel.Body className="relative flex flex-col h-full bg-gray-900">
              {/* Main Video Area */}
              <div className="flex-1 relative flex items-center justify-center">
                {/* Remote User Avatar */}
                <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-semibold text-white">SC</span>
                </div>

                {/* Call Info Overlay */}
                <div className="absolute top-4 left-4 text-white">
                  <div className="text-lg font-semibold">Sarah Chen</div>
                  <div className="text-sm text-white/70">Senior Developer</div>
                </div>

                {/* Local Video Preview */}
                <div className="absolute bottom-4 right-4 w-16 h-12 bg-gray-800 border-2 border-white/20 rounded-lg overflow-hidden">
                  {isVideoOff ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-700">
                      <VideoOff className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-xs font-semibold text-white">
                        You
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Controls */}
              <div className="bg-black/80 p-4">
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      isMuted
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-white/20 hover:bg-white/30"
                    }`}
                  >
                    {isMuted ? (
                      <MicOff className="w-4 h-4 text-white" />
                    ) : (
                      <Mic className="w-4 h-4 text-white" />
                    )}
                  </button>
                  <button
                    onClick={() => setIsVideoOff(!isVideoOff)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      isVideoOff
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-white/20 hover:bg-white/30"
                    }`}
                  >
                    {isVideoOff ? (
                      <VideoOff className="w-4 h-4 text-white" />
                    ) : (
                      <Video className="w-4 h-4 text-white" />
                    )}
                  </button>
                  <button className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors">
                    <Phone className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </FloatingPanel.Body>

            {/* Resize handles */}
            <FloatingPanel.ResizeTrigger
              axis="n"
              className="absolute top-0 left-2 right-2 h-1 cursor-n-resize"
            />
            <FloatingPanel.ResizeTrigger
              axis="e"
              className="absolute top-2 right-0 bottom-2 w-1 cursor-e-resize"
            />
            <FloatingPanel.ResizeTrigger
              axis="w"
              className="absolute top-2 left-0 bottom-2 w-1 cursor-w-resize"
            />
            <FloatingPanel.ResizeTrigger
              axis="s"
              className="absolute bottom-0 left-2 right-2 h-1 cursor-s-resize"
            />
            <FloatingPanel.ResizeTrigger
              axis="ne"
              className="absolute top-0 right-0 w-2 h-2 cursor-ne-resize"
            />
            <FloatingPanel.ResizeTrigger
              axis="se"
              className="absolute bottom-0 right-0 w-2 h-2 cursor-se-resize"
            />
            <FloatingPanel.ResizeTrigger
              axis="sw"
              className="absolute bottom-0 left-0 w-2 h-2 cursor-sw-resize"
            />
            <FloatingPanel.ResizeTrigger
              axis="nw"
              className="absolute top-0 left-0 w-2 h-2 cursor-nw-resize"
            />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  );
}
