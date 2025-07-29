<script lang="ts">
  import { Field } from "@ark-ui/svelte/field";
  import { PasswordInput } from "@ark-ui/svelte/password-input";
  import { Eye, EyeOff, Check, X } from "lucide-svelte";

  let password = "";
  let confirmPassword = "";

  $: passwordsMatch = password && confirmPassword && password === confirmPassword;
  $: showMismatch = confirmPassword.length > 0 && password !== confirmPassword;
</script>

<div class="flex items-center justify-center min-h-32">
  <div class="w-72 space-y-4">
    <Field.Root>
      <PasswordInput.Root autoComplete="new-password">
        <PasswordInput.Label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
          Password
        </PasswordInput.Label>
        <PasswordInput.Control class="relative h-9 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500 dark:focus-within:border-blue-400 transition-all">
          <PasswordInput.Input
            class="w-full h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 pr-10 border-none outline-none focus:outline-none focus-visible:outline-none"
            bind:value={password}
          />
          <PasswordInput.VisibilityTrigger class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            <PasswordInput.Indicator>
              {#snippet fallback()}
                <EyeOff class="w-4 h-4" />
              {/snippet}
              <Eye class="w-4 h-4" />
            </PasswordInput.Indicator>
          </PasswordInput.VisibilityTrigger>
        </PasswordInput.Control>
      </PasswordInput.Root>
    </Field.Root>

    <Field.Root invalid={showMismatch}>
      <PasswordInput.Root autoComplete="new-password">
        <PasswordInput.Label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
          Confirm Password
          {#if passwordsMatch}
            <Check class="w-4 h-4 text-green-500" />
          {/if}
          {#if showMismatch}
            <X class="w-4 h-4 text-red-500" />
          {/if}
        </PasswordInput.Label>
        <PasswordInput.Control class="relative h-9 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500 dark:focus-within:border-blue-400 transition-all data-[invalid]:border-red-500 dark:data-[invalid]:border-red-400 data-[invalid]:focus-within:ring-red-500/50 dark:data-[invalid]:focus-within:ring-red-400/50">
          <PasswordInput.Input
            class="w-full h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 pr-10 border-none outline-none focus:outline-none focus-visible:outline-none"
            bind:value={confirmPassword}
          />
          <PasswordInput.VisibilityTrigger class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            <PasswordInput.Indicator>
              {#snippet fallback()}
                <EyeOff class="w-4 h-4" />
              {/snippet}
              <Eye class="w-4 h-4" />
            </PasswordInput.Indicator>
          </PasswordInput.VisibilityTrigger>
        </PasswordInput.Control>
      </PasswordInput.Root>

      <Field.ErrorText class="text-xs text-red-600 dark:text-red-400 mt-2">
        Passwords do not match
      </Field.ErrorText>

      {#if passwordsMatch}
        <Field.HelperText class="text-xs text-green-600 dark:text-green-400 mt-2">
          Passwords match!
        </Field.HelperText>
      {/if}
    </Field.Root>
  </div>
</div> 