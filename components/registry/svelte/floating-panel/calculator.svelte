<script lang="ts">
  import { FloatingPanel } from "@ark-ui/svelte/floating-panel";
  import { X } from "lucide-svelte";

  let display = "0";
  let previousValue: number | null = null;
  let operation: string | null = null;
  let waitingForNewValue = false;

  const inputNumber = (num: string) => {
    if (waitingForNewValue) {
      display = num;
      waitingForNewValue = false;
    } else {
      display = display === "0" ? num : display + num;
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      previousValue = inputValue;
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      display = String(newValue);
      previousValue = newValue;
    }

    waitingForNewValue = true;
    operation = nextOperation;
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
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      display = String(newValue);
      previousValue = null;
      operation = null;
      waitingForNewValue = true;
    }
  };

  const clearDisplay = () => {
    display = "0";
    previousValue = null;
    operation = null;
    waitingForNewValue = false;
  };
</script>

<div class="relative h-96">
  <FloatingPanel.Root
    defaultSize={{ width: 280, height: 360 }}
    minSize={{ width: 280, height: 360 }}
    maxSize={{ width: 320, height: 400 }}
    class="w-full h-full"
  >
    <FloatingPanel.Positioner class="fixed">
      <FloatingPanel.Content
        class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg data-[stage=maximized]:rounded-none"
      >
        <FloatingPanel.Header
          class="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700 rounded-t-lg"
        >
          <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">
            Calculator
          </h3>
          <FloatingPanel.CloseTrigger
            class="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X class="w-3 h-3" />
          </FloatingPanel.CloseTrigger>
        </FloatingPanel.Header>
        <FloatingPanel.Body class="p-4">
          <!-- Display -->
          <div class="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div
              class="text-right text-2xl font-mono text-gray-900 dark:text-gray-100 truncate"
            >
              {display}
            </div>
          </div>

          <!-- Buttons -->
          <div class="grid grid-cols-4 gap-2">
            <button
              on:click={clearDisplay}
              class="h-12 rounded-lg font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 hover:bg-red-200 dark:hover:bg-red-800"
            >
              C
            </button>
            <button
              on:click={() => {}}
              class="h-12 rounded-lg font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"
            >
              ±
            </button>
            <button
              on:click={() => {}}
              class="h-12 rounded-lg font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"
            >
              %
            </button>
            <button
              on:click={() => inputOperation("÷")}
              class="h-12 rounded-lg font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-blue-500 text-white hover:bg-blue-600"
            >
              ÷
            </button>

            <button
              on:click={() => inputNumber("7")}
              class="h-12 rounded-lg font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              7
            </button>
            <button
              on:click={() => inputNumber("8")}
              class="h-12 rounded-lg font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              8
            </button>
            <button
              on:click={() => inputNumber("9")}
              class="h-12 rounded-lg font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              9
            </button>
            <button
              on:click={() => inputOperation("×")}
              class="h-12 rounded-lg font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-blue-500 text-white hover:bg-blue-600"
            >
              ×
            </button>

            <button
              on:click={() => inputNumber("4")}
              class="h-12 rounded-lg font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              4
            </button>
            <button
              on:click={() => inputNumber("5")}
              class="h-12 rounded-lg font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              5
            </button>
            <button
              on:click={() => inputNumber("6")}
              class="h-12 rounded-lg font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              6
            </button>
            <button
              on:click={() => inputOperation("-")}
              class="h-12 rounded-lg font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-blue-500 text-white hover:bg-blue-600"
            >
              -
            </button>

            <button
              on:click={() => inputNumber("1")}
              class="h-12 rounded-lg font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              1
            </button>
            <button
              on:click={() => inputNumber("2")}
              class="h-12 rounded-lg font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              2
            </button>
            <button
              on:click={() => inputNumber("3")}
              class="h-12 rounded-lg font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              3
            </button>
            <button
              on:click={() => inputOperation("+")}
              class="h-12 rounded-lg font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-blue-500 text-white hover:bg-blue-600"
            >
              +
            </button>

            <button
              on:click={() => inputNumber("0")}
              class="col-span-2 h-12 rounded-lg font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              0
            </button>
            <button
              on:click={() => inputNumber(".")}
              class="h-12 rounded-lg font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              .
            </button>
            <button
              on:click={performCalculation}
              class="h-12 rounded-lg font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-blue-500 text-white hover:bg-blue-600"
            >
              =
            </button>
          </div>
        </FloatingPanel.Body>
      </FloatingPanel.Content>
    </FloatingPanel.Positioner>
  </FloatingPanel.Root>
</div>
