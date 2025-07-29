"use client";

import { FloatingPanel } from "@ark-ui/solid/floating-panel";
import { X } from "lucide-solid";
import { createSignal } from "solid-js";

export default function Calculator() {
  const [display, setDisplay] = createSignal("0");
  const [previousValue, setPreviousValue] = createSignal<number | null>(null);
  const [operation, setOperation] = createSignal<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = createSignal(false);

  const inputNumber = (num: string) => {
    if (waitingForNewValue()) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display() === "0" ? num : display() + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display());

    if (previousValue() === null) {
      setPreviousValue(inputValue);
    } else if (operation()) {
      const currentValue = previousValue() || 0;
      const newValue = calculate(currentValue, inputValue, operation()!);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const calculate = (
    firstValue: number,
    secondValue: number,
    operation: string
  ) => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "×":
        return firstValue * secondValue;
      case "÷":
        return firstValue / secondValue;
      case "=":
        return secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display());

    if (previousValue() !== null && operation()) {
      const newValue = calculate(previousValue()!, inputValue, operation()!);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const clearDisplay = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const Button = (props: {
    children: any;
    onClick: () => void;
    className?: string;
  }) => (
    <button
      onClick={props.onClick}
      class={`h-12 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        props.className ||
        "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600"
      }`}
    >
      {props.children}
    </button>
  );

  return (
    <div class="relative h-96">
      <FloatingPanel.Root
        defaultSize={{ width: 280, height: 360 }}
        minSize={{ width: 280, height: 360 }}
        maxSize={{ width: 320, height: 400 }}
        class="w-full h-full"
      >
        <FloatingPanel.Positioner class="fixed">
          <FloatingPanel.Content class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg data-[stage=maximized]:rounded-none">
            <FloatingPanel.Header class="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700 rounded-t-lg">
              <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">
                Calculator
              </h3>
              <FloatingPanel.CloseTrigger class="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <X class="w-3 h-3" />
              </FloatingPanel.CloseTrigger>
            </FloatingPanel.Header>
            <FloatingPanel.Body class="p-4">
              {/* Display */}
              <div class="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div class="text-right text-2xl font-mono text-gray-900 dark:text-gray-100 truncate">
                  {display()}
                </div>
              </div>

              {/* Buttons */}
              <div class="grid grid-cols-4 gap-2">
                <Button
                  onClick={clearDisplay}
                  class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 hover:bg-red-200 dark:hover:bg-red-800"
                >
                  C
                </Button>
                <Button
                  onClick={() => {}}
                  class="bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"
                >
                  ±
                </Button>
                <Button
                  onClick={() => {}}
                  class="bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"
                >
                  %
                </Button>
                <Button
                  onClick={() => inputOperation("÷")}
                  class="bg-blue-500 text-white hover:bg-blue-600"
                >
                  ÷
                </Button>

                <Button onClick={() => inputNumber("7")}>7</Button>
                <Button onClick={() => inputNumber("8")}>8</Button>
                <Button onClick={() => inputNumber("9")}>9</Button>
                <Button
                  onClick={() => inputOperation("×")}
                  class="bg-blue-500 text-white hover:bg-blue-600"
                >
                  ×
                </Button>

                <Button onClick={() => inputNumber("4")}>4</Button>
                <Button onClick={() => inputNumber("5")}>5</Button>
                <Button onClick={() => inputNumber("6")}>6</Button>
                <Button
                  onClick={() => inputOperation("-")}
                  class="bg-blue-500 text-white hover:bg-blue-600"
                >
                  -
                </Button>

                <Button onClick={() => inputNumber("1")}>1</Button>
                <Button onClick={() => inputNumber("2")}>2</Button>
                <Button onClick={() => inputNumber("3")}>3</Button>
                <Button
                  onClick={() => inputOperation("+")}
                  class="bg-blue-500 text-white hover:bg-blue-600"
                >
                  +
                </Button>

                <Button onClick={() => inputNumber("0")} class="col-span-2">
                  0
                </Button>
                <Button onClick={() => inputNumber(".")}>.</Button>
                <Button
                  onClick={performCalculation}
                  class="bg-blue-500 text-white hover:bg-blue-600"
                >
                  =
                </Button>
              </div>
            </FloatingPanel.Body>
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </FloatingPanel.Root>
    </div>
  );
}
