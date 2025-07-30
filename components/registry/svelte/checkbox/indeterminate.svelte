<script>
  import { Checkbox } from "@ark-ui/svelte";
  import { CheckIcon, MinusIcon } from "lucide-svelte";

  const features = [
    { label: "Dark mode", value: "dark-mode" },
    { label: "Notifications", value: "notifications" },
    { label: "Analytics", value: "analytics" },
  ];

  let selectedFeatures = ["dark-mode"];

  // Calculate parent state based on selected features
  function getParentState() {
    if (selectedFeatures.length === 0) return false;
    if (selectedFeatures.length === features.length) return true;
    return "indeterminate";
  }

  function handleParentChange(details) {
    const checked = details.checked === true;
    if (checked) {
      // Select all features
      selectedFeatures = features.map((f) => f.value);
    } else {
      // Deselect all features
      selectedFeatures = [];
    }
  }

  function handleGroupChange(details) {
    selectedFeatures = details.values;
  }
</script>

<div class="space-y-4">
  <Checkbox.Root
    checked={getParentState()}
    onCheckedChange={handleParentChange}
    class="flex items-center gap-3 cursor-pointer"
  >
    <Checkbox.Control
      class="w-5 h-5 bg-white border-2 border-gray-300 rounded data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-[state=indeterminate]:bg-gray-100 data-[state=indeterminate]:border-gray-400 data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-[state=indeterminate]:bg-gray-700 dark:data-[state=indeterminate]:border-gray-500 dark:data-hover:border-gray-400 transition-all duration-200 flex items-center justify-center"
    >
      <Checkbox.Indicator>
        <CheckIcon class="w-3.5 h-3.5 text-white" />
      </Checkbox.Indicator>
      <Checkbox.Indicator indeterminate>
        <MinusIcon class="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.Label
      class="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer"
    >
      Select all features
    </Checkbox.Label>
    <Checkbox.HiddenInput />
  </Checkbox.Root>

  <div class="ml-6">
    <Checkbox.Group
      value={selectedFeatures}
      onValueChange={handleGroupChange}
      class="space-y-3"
    >
      {#each features as feature}
        <Checkbox.Root
          value={feature.value}
          class="flex items-center gap-3 cursor-pointer"
        >
          <Checkbox.Control
            class="w-5 h-5 bg-white border-2 border-gray-300 rounded data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-hover:border-gray-400 transition-all duration-200 flex items-center justify-center"
          >
            <Checkbox.Indicator>
              <CheckIcon class="w-3.5 h-3.5 text-white" />
            </Checkbox.Indicator>
          </Checkbox.Control>
          <Checkbox.Label
            class="text-sm text-gray-700 dark:text-gray-200 cursor-pointer"
          >
            {feature.label}
          </Checkbox.Label>
          <Checkbox.HiddenInput />
        </Checkbox.Root>
      {/each}
    </Checkbox.Group>
  </div>
</div>
